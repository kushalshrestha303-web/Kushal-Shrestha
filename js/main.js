(function () {
  const data = window.portfolioData || portfolioData;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const setText = (selector, value) => {
    const element = $(selector);
    if (element) element.textContent = value;
  };

  const icons = {
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3.1 8.4-7 10-3.9-1.6-7-5-7-10V6l7-3z"></path><path d="M9 12l2 2 4-5"></path></svg>',
    radar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20a8 8 0 1 0-8-8"></path><path d="M12 12l6-6"></path><path d="M4 20h16"></path><path d="M8 16l-4 4"></path></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 18H8a5 5 0 1 1 1.2-9.8A6 6 0 0 1 21 10.5 3.8 3.8 0 0 1 17 18z"></path></svg>',
    identity: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"></circle><path d="M5 21a7 7 0 0 1 14 0"></path><path d="M17 11l2 2 3-4"></path></svg>',
    network: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="12" cy="18" r="3"></circle><path d="M8.5 7.5l2.5 7"></path><path d="M15.5 7.5l-2.5 7"></path><path d="M9 6h6"></path></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9l-4 3 4 3"></path><path d="M16 9l4 3-4 3"></path><path d="M14 4l-4 16"></path></svg>',
    linux: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h12"></path><path d="M8 19l1.2-7.2C9.6 9.3 10.4 6 12 6s2.4 3.3 2.8 5.8L16 19"></path><path d="M9.5 13.5l-3 2"></path><path d="M14.5 13.5l3 2"></path><circle cx="10.5" cy="9.5" r=".7"></circle><circle cx="13.5" cy="9.5" r=".7"></circle><path d="M10 22h4"></path></svg>',
    sentinel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7l8-4 8 4v6c0 4.8-3.3 7.4-8 8-4.7-.6-8-3.2-8-8V7z"></path><path d="M8 12h8"></path><path d="M12 8v8"></path><path d="M9 9l6 6"></path><path d="M15 9l-6 6"></path></svg>',
    xdr: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7"></rect><rect x="13" y="4" width="7" height="7"></rect><rect x="4" y="13" width="7" height="7"></rect><rect x="13" y="13" width="7" height="7"></rect><path d="M7.5 7.5l9 9"></path></svg>',
    eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 20 4a5 5 0 0 0-.1-3.6s-1.3-.4-4 1.5a13.4 13.4 0 0 0-7.2 0C6 .1 4.7.4 4.7.4A5 5 0 0 0 4.6 4 5.4 5.4 0 0 0 3 7.5c0 5.4 3.3 6.6 6.5 7a3.4 3.4 0 0 0-1 2.6V22"></path></svg>'
  };

  const iconForProject = (category) => ({
    microsoft: "shield",
    identity: "identity",
    network: "network",
    frontend: "code"
  }[category] || "radar");

  const iconForTool = (item) => {
    const name = `${item.group} ${item.tool}`.toLowerCase();
    if (name.includes("linux") || name.includes("ufw") || name.includes("fail2ban")) return "linux";
    if (name.includes("sentinel")) return "sentinel";
    if (name.includes("defender xdr") || name.includes("endpoint")) return "xdr";
    if (name.includes("entra")) return "identity";
    if (name.includes("azure") || name.includes("aws") || name.includes("cloud")) return "cloud";
    if (name.includes("wireshark") || name.includes("nmap") || name.includes("nessus")) return "network";
    if (name.includes("kql") || name.includes("powershell")) return "code";
    return "shield";
  };

  setText('[data-profile="headline"]', data.profile.headline);
  setText('[data-profile="summary"]', data.profile.summary);
  setText('[data-profile="availability"]', data.profile.availability);
  setText('[data-profile="about"]', data.profile.about);

  function initOpsBackground() {
    const canvas = $("#ops-background");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = Array.from({ length: 90 }, (_, index) => ({
      x: (index * 131) % 997 / 997,
      y: (index * 73) % 619 / 619,
      speed: 0.05 + (index % 7) * 0.012,
      size: 0.6 + (index % 5) * 0.22
    }));
    let width = 0;
    let height = 0;
    let frameId = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const drawGrid = (time) => {
      const grid = 64;
      const drift = (time * 0.014) % grid;
      ctx.strokeStyle = "rgba(113, 232, 255, 0.075)";
      ctx.lineWidth = 1;
      for (let x = -grid + drift; x < width + grid; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -grid + drift * 0.45; y < height + grid; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(113, 232, 255, 0.2)";
      ctx.font = "11px Inter, sans-serif";
      for (let x = 32; x < width; x += 192) {
        ctx.fillText(`X${Math.round(x).toString().padStart(3, "0")}`, x, 26);
      }
    };

    const drawCrosshairs = (time) => {
      const targets = [
        [width * 0.18, height * 0.3],
        [width * 0.72, height * 0.22],
        [width * 0.84, height * 0.62]
      ];
      ctx.strokeStyle = "rgba(31, 255, 192, 0.2)";
      targets.forEach(([x, y], index) => {
        const pulse = Math.sin(time * 0.002 + index) * 5;
        ctx.beginPath();
        ctx.arc(x, y, 24 + pulse, 0, Math.PI * 2);
        ctx.moveTo(x - 46, y);
        ctx.lineTo(x - 14, y);
        ctx.moveTo(x + 14, y);
        ctx.lineTo(x + 46, y);
        ctx.moveTo(x, y - 46);
        ctx.lineTo(x, y - 14);
        ctx.moveTo(x, y + 14);
        ctx.lineTo(x, y + 46);
        ctx.stroke();
      });
    };

    const drawMountains = (time) => {
      const layers = [
        { base: 0.66, amp: 56, color: "rgba(23, 42, 72, 0.52)", speed: 0.00035 },
        { base: 0.76, amp: 72, color: "rgba(11, 23, 42, 0.78)", speed: 0.0005 },
        { base: 0.86, amp: 92, color: "rgba(4, 10, 19, 0.95)", speed: 0.0007 }
      ];
      layers.forEach((layer, layerIndex) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 18) {
          const y = height * layer.base
            + Math.sin(x * 0.006 + time * layer.speed + layerIndex) * layer.amp
            + Math.cos(x * 0.013 + layerIndex * 2.4) * layer.amp * 0.38;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();
      });
    };

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, width, height);
      const glow = ctx.createRadialGradient(width * 0.66, height * 0.22, 0, width * 0.66, height * 0.22, width * 0.48);
      glow.addColorStop(0, "rgba(140, 107, 255, 0.22)");
      glow.addColorStop(0.45, "rgba(49, 168, 255, 0.07)");
      glow.addColorStop(1, "rgba(3, 7, 11, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      points.forEach((point) => {
        const y = ((point.y + time * point.speed * 0.00008) % 1) * height;
        ctx.fillStyle = "rgba(217, 250, 255, 0.42)";
        ctx.beginPath();
        ctx.arc(point.x * width, y, point.size, 0, Math.PI * 2);
        ctx.fill();
      });
      drawGrid(time);
      drawCrosshairs(time);
      drawMountains(time);
      if (!reducedMotion) frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pagehide", () => cancelAnimationFrame(frameId));
  }

  function badgeClass(status) {
    return status.toLowerCase().includes("progress") ? "badge progress" : "badge";
  }

  function renderWorkflow() {
    const root = $("[data-workflow]");
    root.innerHTML = data.socWorkflow.map((item) => `
      <article class="reveal">
        <h3>${item.stage}</h3>
        <p>${item.detail}</p>
      </article>
    `).join("");
  }

  function renderSkills(filter = "all") {
    const root = $("[data-skills]");
    const filters = $("[data-skill-filters]");
    filters.innerHTML = ['All', ...data.skillCategories.map((category) => category.name)]
      .map((name) => `<button class="filter ${name === 'All' ? 'active' : ''}" type="button" data-skill-filter="${name}">${name}</button>`)
      .join("");
    const selected = filter === "all" ? data.skillCategories : data.skillCategories.filter((category) => category.name === filter);
    root.innerHTML = selected.map((category) => `
      <article class="skill-card reveal">
        <h3 class="card-title"><span class="ui-icon">${icons.radar}</span>${category.name}</h3>
        <ul class="skill-list">
          ${category.skills.map(([skill, level]) => `<li class="skill-pill" title="${level}">${skill} - ${level}</li>`).join("")}
        </ul>
      </article>
    `).join("");
    observeReveals();
  }

  function renderProjects(filter = "all") {
    const root = $("[data-projects]");
    const selected = filter === "all" ? data.projects : data.projects.filter((project) => project.category === filter);
    root.innerHTML = selected.map((project) => `
      <article class="project-card reveal" data-project="${project.id}">
        <span class="${badgeClass(project.status)}">${project.status}</span>
        <h3 class="card-title"><span class="ui-icon">${icons[iconForProject(project.category)]}</span>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="tech-list">
          ${project.technologies.map((tech) => `<li class="tech">${tech}</li>`).join("")}
        </ul>
        <div class="project-actions">
          <button class="project-action icon-button" type="button" data-open-project="${project.id}"><span class="ui-icon">${icons.eye}</span>View</button>
          ${project.github ? `<a class="project-action icon-button" href="${project.github}" target="_blank" rel="noopener"><span class="ui-icon">${icons.github}</span>GitHub</a>` : `<span class="project-action" aria-disabled="true" title="Add project link in js/data.js">GitHub pending</span>`}
          <button class="project-action" type="button" data-open-project="${project.id}">Case Study</button>
        </div>
      </article>
    `).join("");
    observeReveals();
  }

  function renderCertifications() {
    $("[data-certifications]").innerHTML = data.certifications.map((item) => `
      <article class="timeline-item reveal">
        <span class="${badgeClass(item.status)}">${item.status}</span>
        <h3>${item.name}</h3>
        <p><strong>${item.provider}</strong></p>
        <p>${item.learned}</p>
        <ul class="tech-list">${item.skills.map((skill) => `<li class="tech">${skill}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  function renderExperience() {
    $("[data-experience]").innerHTML = `<h3>Relevant Experience</h3>` + data.experience.map((item) => `
      <article class="experience-card reveal">
        <h3>${item.title}</h3>
        <p>${item.organization} - ${item.location} - ${item.date}</p>
        <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
      </article>
    `).join("");

    $("[data-education]").innerHTML = `<h3>Education</h3>` + data.education.map((item) => `
      <article class="education-card reveal">
        <h3>${item.degree}</h3>
        <p>${item.school}</p>
        <p>${item.location} - ${item.date}</p>
      </article>
    `).join("");
  }

  function renderToolkit() {
    const grid = $("[data-toolkit]");
    const detail = $("[data-tool-detail]");
    grid.innerHTML = data.toolkit.map((item, index) => `
      <button class="tool-chip reveal" type="button" data-tool-index="${index}">
        <span>${item.group}</span>
        <strong class="tool-title"><span class="ui-icon">${icons[iconForTool(item)]}</span>${item.tool}</strong>
      </button>
    `).join("");

    const showTool = (index) => {
      const item = data.toolkit[index];
      detail.innerHTML = `
        <p class="eyebrow">${item.group}</p>
        <h3><span class="ui-icon">${icons[iconForTool(item)]}</span>${item.tool}</h3>
        <p>${item.used}</p>
        <p><strong>Relevant project:</strong> ${item.project}</p>
      `;
    };
    showTool(0);
    grid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tool-index]");
      if (button) showTool(Number(button.dataset.toolIndex));
    });
  }

  function renderRoadmap() {
    $("[data-roadmap]").innerHTML = data.roadmap.map(([title, detail]) => `
      <article class="reveal">
        <h3>${title}</h3>
        <p>${detail}</p>
      </article>
    `).join("");
  }

  function openProject(projectId) {
    const project = data.projects.find((item) => item.id === projectId);
    if (!project) return;
    const modal = $("[data-modal]");
    const content = $("[data-modal-content]");
    content.innerHTML = `
      <span class="${badgeClass(project.status)}">${project.status}</span>
      <h2 id="modal-title">${project.title}</h2>
      <p>${project.description}</p>
      <ul class="tech-list">${project.technologies.map((tech) => `<li class="tech">${tech}</li>`).join("")}</ul>
      <div class="diagram">
        <strong>LAB / LEARNING ENVIRONMENT</strong><br>
        Endpoint -> Defender / Logs -> Data Collection -> Log Analytics -> Microsoft Sentinel -> Analytics Rule -> Incident -> Investigation -> Response / Automation
      </div>
      <div class="case-grid">
        ${[
          ["01 - Overview", project.caseStudy.overview],
          ["02 - Objective", project.caseStudy.objective],
          ["03 - Environment", project.caseStudy.environment],
          ["04 - Tools Used", project.technologies.join(", ")],
          ["05 - Implementation", project.caseStudy.implementation],
          ["06 - Detection / Investigation", project.caseStudy.detection],
          ["07 - Response", project.caseStudy.response],
          ["08 - Lessons Learned", project.caseStudy.lessons],
          ["09 - Future Improvements", project.caseStudy.future]
        ].map(([title, body]) => `<article><h3>${title}</h3><p>${body}</p></article>`).join("")}
      </div>
      <div class="diagram">
        Screenshot placeholder: add real project screenshots in assets/images and link them from js/data.js when available.
      </div>
    `;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal-close").focus();
  }

  function closeModal() {
    const modal = $("[data-modal]");
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function setupInteractions() {
    const toggle = $("[data-nav-toggle]");
    const menu = $("[data-nav-menu]");
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
    menu.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
      document.body.classList.remove("nav-open");
    });

    $("[data-project-filters]").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      $$("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });

    $("[data-skill-filters]").addEventListener("click", (event) => {
      const button = event.target.closest("[data-skill-filter]");
      if (!button) return;
      $$("[data-skill-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSkills(button.dataset.skillFilter === "All" ? "all" : button.dataset.skillFilter);
    });

    document.addEventListener("click", (event) => {
      const opener = event.target.closest("[data-open-project]");
      if (opener) openProject(opener.dataset.openProject);
      if (event.target.closest("[data-close-modal]")) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !$("[data-modal]").hidden) closeModal();
    });

    $("[data-copy-email]").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(data.profile.email);
        $("[data-copy-email]").textContent = "Email copied";
      } catch (error) {
        $("[data-copy-email]").textContent = data.profile.email;
      }
      setTimeout(() => ($("[data-copy-email]").textContent = "Copy email"), 1800);
    });

    $("[data-contact-form]").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const note = $("[data-form-note]");
      if (!form.checkValidity()) {
        note.textContent = "Please complete all fields with a valid email address.";
        note.classList.remove("success");
        form.reportValidity();
        return;
      }
      const formData = new FormData(form);
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const subject = formData.get("subject").trim() || "Portfolio contact";
      const message = formData.get("message").trim();
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message
      ].join("\n");
      window.location.href = `mailto:${data.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.reset();
      note.textContent = "Opening your email app with Kushal's address filled in.";
      note.classList.add("success");
    });

    const topButton = $("[data-back-to-top]");
    topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => topButton.classList.toggle("show", window.scrollY > 700), { passive: true });

    const cursorDot = $("[data-cursor-dot]");
    const cursorRing = $("[data-cursor-ring]");
    if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", (event) => {
        cursorDot.style.opacity = "1";
        cursorRing.style.opacity = "1";
        cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
        cursorRing.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      }, { passive: true });
      document.addEventListener("pointerover", (event) => {
        cursorRing.classList.toggle("active", Boolean(event.target.closest("a, button, input, textarea")));
      });
    }

    const parallaxItems = $$(".live-command, .floating-profile, .pop-burst");
    if (parallaxItems.length && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        parallaxItems.forEach((item, index) => {
          const depth = (index + 1) * 5;
          item.style.setProperty("--px", `${x * depth}px`);
          item.style.setProperty("--py", `${y * depth}px`);
        });
      }, { passive: true });
    }

    const sections = $$("main section[id]");
    const navLinks = $$(".nav-menu a");
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach((section) => navObserver.observe(section));
  }

  let revealObserver;
  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((item) => revealObserver.observe(item));
  }

  renderWorkflow();
  renderSkills();
  renderProjects();
  renderCertifications();
  renderExperience();
  renderToolkit();
  renderRoadmap();
  initOpsBackground();
  setupInteractions();
  observeReveals();
})();
