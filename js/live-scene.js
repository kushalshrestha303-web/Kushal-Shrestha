(function () {
  const canvas = document.getElementById("threat-canvas");
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let renderer;
  let frameId;

  function resizeRenderer(camera) {
    const box = canvas.getBoundingClientRect();
    if (!box.width || !box.height) return;
    renderer.setSize(box.width, box.height, false);
    camera.aspect = box.width / box.height;
    camera.updateProjectionMatrix();
  }

  function startThreeScene() {
    if (!window.THREE) return false;
    const THREE = window.THREE;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x061018, 12, 46);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 7.5, 17);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    resizeRenderer(camera);

    const geometry = new THREE.PlaneGeometry(24, 18, 86, 64);
    geometry.rotateX(-Math.PI / 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x10efd0,
      wireframe: true,
      transparent: true,
      opacity: 0.72
    });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.position.y = -2.2;
    scene.add(terrain);

    const chromeGeometry = new THREE.IcosahedronGeometry(1.9, 5);
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xdffaff,
      metalness: 0.88,
      roughness: 0.18,
      transmission: 0.18,
      thickness: 0.6,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      iridescence: 0.85,
      iridescenceIOR: 1.8
    });
    const chrome = new THREE.Mesh(chromeGeometry, chromeMaterial);
    chrome.position.set(0, 1.45, 0.5);
    chrome.scale.set(1.15, 0.9, 1.15);
    scene.add(chrome);

    const keyLight = new THREE.PointLight(0x71e8ff, 2.4, 30);
    keyLight.position.set(-5, 6, 8);
    scene.add(keyLight);
    const violetLight = new THREE.PointLight(0x8c6bff, 1.8, 28);
    violetLight.position.set(5, 4, 6);
    scene.add(violetLight);
    scene.add(new THREE.AmbientLight(0x5edbff, 0.45));

    const glowMaterial = new THREE.PointsMaterial({
      color: 0x71e8ff,
      size: 0.045,
      transparent: true,
      opacity: 0.72
    });
    const points = new THREE.Points(geometry.clone(), glowMaterial);
    points.position.copy(terrain.position);
    scene.add(points);

    const alertGeometry = new THREE.BufferGeometry();
    const alertPositions = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i += 1) {
      alertPositions[i * 3] = (Math.random() - 0.5) * 22;
      alertPositions[i * 3 + 1] = Math.random() * 4 - 1.2;
      alertPositions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    alertGeometry.setAttribute("position", new THREE.BufferAttribute(alertPositions, 3));
    const alerts = new THREE.Points(alertGeometry, new THREE.PointsMaterial({
      color: 0xff3d66,
      size: 0.08,
      transparent: true,
      opacity: 0.52
    }));
    scene.add(alerts);

    const position = terrain.geometry.attributes.position;
    const animate = (time) => {
      const t = time * 0.001;
      for (let i = 0; i < position.count; i += 1) {
        const x = position.getX(i);
        const z = position.getZ(i);
        const wave = Math.sin(x * 0.8 + t) * 0.55 + Math.cos(z * 0.9 + t * 1.4) * 0.42;
        const pulse = Math.sin((x + z) * 0.32 + t * 2.1) * 0.22;
        position.setY(i, wave + pulse);
      }
      position.needsUpdate = true;
      terrain.rotation.z = Math.sin(t * 0.18) * 0.025;
      points.rotation.z = terrain.rotation.z;
      alerts.rotation.y = t * 0.08;
      chrome.rotation.x = t * 0.42;
      chrome.rotation.y = t * 0.58;
      chrome.position.y = 1.45 + Math.sin(t * 1.4) * 0.18;
      keyLight.intensity = 2.1 + Math.sin(t * 1.7) * 0.35;
      renderer.render(scene, camera);
      if (!prefersReducedMotion) frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => resizeRenderer(camera));
    animate(0);
    return true;
  }

  function startFallbackScene() {
    const ctx = canvas.getContext("2d");
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(box.width * ratio));
      canvas.height = Math.max(1, Math.floor(box.height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (time) => {
      const box = canvas.getBoundingClientRect();
      const width = box.width;
      const height = box.height;
      const t = time * 0.001;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(3, 7, 11, 0.68)";
      ctx.fillRect(0, 0, width, height);

      for (let row = 0; row < 42; row += 1) {
        const yBase = height * 0.38 + row * 6;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 8) {
          const y = yBase + Math.sin(x * 0.025 + row * 0.23 + t * 1.4) * 20 + Math.cos(x * 0.014 + t) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(31, 255, 192, ${0.08 + row / 160})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(255, 61, 102, 0.72)";
      for (let i = 0; i < 18; i += 1) {
        const x = (Math.sin(t * 0.7 + i) * 0.5 + 0.5) * width;
        const y = height * 0.22 + (Math.cos(t * 0.9 + i * 1.7) * 0.5 + 0.5) * height * 0.54;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) frameId = requestAnimationFrame(draw);
    };
    draw(0);
  }

  setTimeout(() => {
    if (!startThreeScene()) startFallbackScene();
  }, 0);

  window.addEventListener("pagehide", () => {
    if (frameId) cancelAnimationFrame(frameId);
  });
})();
