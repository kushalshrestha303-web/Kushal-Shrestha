// Update LinkedIn, GitHub, email, resume/workbook paths, project links, project screenshots
// and certification verification links here as Kushal's portfolio grows.
const portfolioData = {
  profile: {
    name: "Kushal Shrestha",
    title: "Cybersecurity Specialist | SOC / Security Operations | Microsoft Security | Cloud & Network Security",
    headline: "Kushal Shrestha",
    location: "Sydney, Australia",
    email: "kushalshrestha993@gmail.com",
    phone: "0431 317 108",
    availability: "Open to Cybersecurity / SOC / Security Operations opportunities in Australia",
    summary:
      "SOC Analyst portfolio - Microsoft Security, cloud and endpoint defense.",
    about:
      "Cybersecurity-focused MIT student building practical SOC experience with Microsoft Defender XDR, Sentinel, KQL, Entra ID, Azure, AWS, Windows Server, endpoint security, network monitoring and incident investigation."
  },
  links: {
    github: "https://github.com/kushalshrestha303-web/sc200.git",
    linkedin: "http://www.linkedin.com/in/kushal-shrestha-42702b247",
    email: "mailto:kushalshrestha993@gmail.com",
    resume: "assets/documents/Kushal-Shrestha-Cybersecurity-Resume.pdf",
    workbook: "assets/documents/Security-Operations-Efficiency-Workbook.pdf",
    architecture: "assets/images/contoso-security-architecture.png"
  },
  socWorkflow: [
    {
      stage: "Detect",
      detail: "Defender XDR, Sentinel, KQL and endpoint alerts."
    },
    {
      stage: "Investigate",
      detail: "Events, identity activity and process evidence."
    },
    {
      stage: "Respond",
      detail: "Live Response and containment concepts."
    },
    {
      stage: "Remediate",
      detail: "Threat removal, review and hardening."
    },
    {
      stage: "Improve",
      detail: "Tune detections, refine KQL and document lessons."
    }
  ],
  skillCategories: [
    {
      name: "Microsoft Security",
      skills: [
        ["Microsoft Defender XDR", "Hands-on"],
        ["Defender for Endpoint", "Hands-on"],
        ["Defender for Cloud Apps", "Currently Developing"],
        ["Microsoft Sentinel", "Hands-on"],
        ["Microsoft Entra ID", "Working Knowledge"],
        ["Microsoft 365", "Working Knowledge"],
        ["KQL", "Currently Developing"],
        ["Incident investigation", "Hands-on"],
        ["Detection rules", "Currently Developing"],
        ["Security alerts", "Hands-on"]
      ]
    },
    {
      name: "Cloud",
      skills: [
        ["Microsoft Azure", "Working Knowledge"],
        ["AWS", "Working Knowledge"],
        ["Azure Monitor", "Currently Developing"],
        ["Azure Arc", "Familiar"],
        ["Azure Log Analytics", "Hands-on"],
        ["Data Collection Rules", "Hands-on"],
        ["Azure Monitor Agent", "Hands-on"],
        ["Cloud security fundamentals", "Working Knowledge"]
      ]
    },
    {
      name: "Network & Endpoint",
      skills: [
        ["TCP/IP", "Working Knowledge"],
        ["DNS", "Working Knowledge"],
        ["HTTP/HTTPS", "Working Knowledge"],
        ["Windows", "Hands-on"],
        ["Windows Server", "Hands-on"],
        ["Network troubleshooting", "Hands-on"],
        ["Wireshark", "Hands-on"],
        ["Nmap", "Hands-on"],
        ["UFW", "Familiar"],
        ["Fail2Ban", "Familiar"],
        ["Nessus", "Hands-on"]
      ]
    },
    {
      name: "Security Operations",
      skills: [
        ["SOC monitoring", "Hands-on"],
        ["Alert triage", "Hands-on"],
        ["Incident response fundamentals", "Working Knowledge"],
        ["Threat investigation", "Hands-on"],
        ["Endpoint investigation", "Hands-on"],
        ["Log analysis", "Hands-on"],
        ["Detection engineering fundamentals", "Currently Developing"],
        ["Security automation concepts", "Familiar"]
      ]
    }
  ],
  certifications: [
    {
      name: "Google Cybersecurity Professional Certificate",
      provider: "Google / Coursera",
      status: "Completed",
      learned: "Security foundations, detection concepts, incident response workflow and practical analyst thinking.",
      skills: ["Security fundamentals", "SIEM concepts", "Incident response"]
    },
    {
      name: "AWS Fundamentals",
      provider: "Amazon Web Services",
      status: "Completed",
      learned: "Core cloud concepts and AWS fundamentals relevant to cloud security learning.",
      skills: ["AWS", "Cloud fundamentals", "Cloud security basics"]
    },
    {
      name: "Microsoft SC-200: Security Operations Analyst",
      provider: "Microsoft",
      status: "In Progress",
      learned: "Microsoft Defender XDR, Microsoft Sentinel, KQL, incident investigation and response workflows.",
      skills: ["Defender XDR", "Sentinel", "KQL", "Security operations"]
    },
    {
      name: "Microsoft Security Hands-on Labs",
      provider: "Self-directed labs",
      status: "Hands-on Lab",
      learned: "Sentinel, Defender XDR, Defender for Endpoint and AWS cloud security practice environments.",
      skills: ["Microsoft Sentinel", "Defender for Endpoint", "AWS cloud security"]
    }
  ],
  projects: [
    {
      id: "defender-xdr",
      title: "Microsoft Defender XDR / Defender for Endpoint Security Lab",
      category: "microsoft",
      description:
        "Endpoint onboarding, alerts, EICAR testing, indicators, Live Response concepts and investigation.",
      technologies: ["Microsoft Defender XDR", "Defender for Endpoint", "Entra ID", "Windows Server", "PowerShell"],
      github: "https://github.com/kushalshrestha303-web/sc200.git",
      status: "Hands-on lab",
      caseStudy: {
        overview: "A practical Microsoft security lab for exploring endpoint, identity and alert investigation workflows.",
        objective: "Build confidence in junior SOC analyst workflows across triage, investigation and response.",
        environment: "Lab / learning environment using Microsoft security tools and Windows endpoints.",
        implementation: "Onboarded endpoints, generated test detections, reviewed portal evidence and practiced analyst workflows.",
        detection: "Used alerts, Advanced Hunting concepts and MITRE ATT&CK mapping to understand suspicious behavior.",
        response: "Practiced response concepts including indicators, Live Response concepts and containment decision-making.",
        lessons: "Strong evidence collection and clear triage notes make investigations easier to communicate.",
        future: "Add more screenshots, detection queries and repeatable playbook notes as the lab matures."
      }
    },
    {
      id: "sentinel-soc",
      title: "Microsoft Sentinel SOC Lab",
      category: "microsoft",
      description:
        "Sentinel lab for logs, AMA, DCR, Log Analytics, KQL, incidents and automation concepts.",
      technologies: ["Microsoft Sentinel", "Azure", "Log Analytics", "AMA", "DCR", "KQL"],
      github: "",
      status: "Hands-on lab",
      caseStudy: {
        overview: "A Sentinel learning environment built around the SOC lifecycle.",
        objective: "Understand how logs become detections, incidents and investigation tasks.",
        environment: "Lab / learning environment using Azure, Log Analytics and Microsoft Sentinel.",
        implementation: "Connected log sources, explored data collection rules and drafted KQL-driven detection logic.",
        detection: "Reviewed events and incidents to understand how signal quality affects triage.",
        response: "Explored automation concepts and incident workflow decisions.",
        lessons: "Good detections depend on clean ingestion, useful context and iterative tuning.",
        future: "Add sample KQL queries, automation playbooks and screenshots from lab exercises."
      }
    },
    {
      id: "identity-monitoring",
      title: "Identity Security & Privileged Role Monitoring",
      category: "identity",
      description:
        "Monitoring identity and privileged-role activity with Entra audit logs and alert concepts.",
      technologies: ["Microsoft Entra ID", "Audit Logs", "Microsoft Sentinel", "KQL", "Logic Apps concepts", "Teams"],
      github: "",
      status: "Hands-on lab",
      caseStudy: {
        overview: "Identity security lab focused on privileged role visibility.",
        objective: "Detect and review identity changes that may require analyst attention.",
        environment: "Lab / learning environment with Microsoft Entra and Sentinel concepts.",
        implementation: "Reviewed audit logs, role activity and notification workflow concepts.",
        detection: "Explored KQL logic for unusual or important identity activity.",
        response: "Mapped investigation steps for validating privileged changes.",
        lessons: "Identity logs are high-value SOC evidence and need clear prioritisation.",
        future: "Add evidence screenshots and alert logic once the lab is extended."
      }
    },
    {
      id: "cyberlearn",
      title: "CyberLearn Academy",
      category: "frontend",
      description:
        "Responsive cybersecurity learning platform with courses, paths, quizzes and progress UI.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive UI", "Frontend architecture", "Vercel"],
      github: "",
      status: "Frontend project",
      caseStudy: {
        overview: "A frontend education platform concept for cybersecurity learning paths.",
        objective: "Create a structured, responsive experience for learners.",
        environment: "Static frontend project suitable for Vercel deployment.",
        implementation: "Designed course cards, learning pathways, quiz concepts and progress UI.",
        detection: "Not a detection project; the project demonstrates frontend architecture and cybersecurity education UX.",
        response: "Not applicable; this is a learning platform interface.",
        lessons: "Security education products need clear hierarchy and simple progress feedback.",
        future: "Connect real course data, authentication and progress storage later."
      }
    },
    {
      id: "network-security",
      title: "Network Security Lab",
      category: "network",
      description:
        "Defensive lab for visibility, vulnerability identification and network hardening.",
      technologies: ["Wireshark", "Nmap", "UFW", "Fail2Ban", "Nessus"],
      github: "",
      status: "Hands-on lab",
      caseStudy: {
        overview: "A network security lab for visibility, assessment and hardening practice.",
        objective: "Understand host and network evidence from a defensive analyst perspective.",
        environment: "Lab / learning environment using common defensive and assessment tools.",
        implementation: "Used packet analysis, scanning, firewall rules, log review and vulnerability assessment workflows.",
        detection: "Observed network behavior and identified notable services, traffic and vulnerabilities.",
        response: "Practiced hardening concepts with firewalling, service review and remediation notes.",
        lessons: "Network context improves incident investigation and endpoint triage.",
        future: "Add before/after hardening evidence and written remediation checklists."
      }
    }
  ],
  experience: [
    {
      title: "Cybersecurity Analyst & Researcher",
      organization: "Nepal Fortress Security (NFS)",
      location: "Remote",
      date: "March 2026 - Present",
      points: [
        "Architected and managed a SOC home lab simulating enterprise-style security operations for detection engineering and threat analysis.",
        "Configured Wazuh, Sysmon and Suricata for log collection and investigation practice.",
        "Produced playbooks, investigation reports and dashboard concepts."
      ]
    },
    {
      title: "IT Support Consultant",
      organization: "Global Peace Consultancy",
      location: "Kathmandu, Nepal",
      date: "July 2024 - 2025",
      points: [
        "Delivered Tier 1/2 hardware, software and network support.",
        "Supported Windows, Active Directory fundamentals, backups and user access."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Information Technology",
      school: "Crown Institute of Higher Education (CIHE)",
      location: "Sydney, Australia",
      date: "2026 - Present"
    },
    {
      degree: "Bachelor of Information Technology",
      school: "Gateway Business College",
      location: "Australia",
      date: "2022 - 2025"
    }
  ],
  toolkit: [
    {
      group: "SIEM",
      tool: "Microsoft Sentinel",
      used: "Used in learning labs for log ingestion, KQL, analytics rules, incidents and SOC monitoring.",
      project: "Microsoft Sentinel SOC Lab"
    },
    {
      group: "XDR / EDR",
      tool: "Microsoft Defender XDR",
      used: "Used to study security alerts, incident investigation and Microsoft security operations workflows.",
      project: "Microsoft Defender XDR Security Lab"
    },
    {
      group: "XDR / EDR",
      tool: "Microsoft Defender for Endpoint",
      used: "Used for endpoint onboarding, EICAR testing, indicators and investigation practice.",
      project: "Microsoft Defender XDR Security Lab"
    },
    {
      group: "Identity",
      tool: "Microsoft Entra ID",
      used: "Used to study identity activity, audit logs and privileged-role monitoring concepts.",
      project: "Identity Security & Privileged Role Monitoring"
    },
    {
      group: "Cloud",
      tool: "Azure",
      used: "Used across Sentinel, Log Analytics and Microsoft cloud security learning.",
      project: "Microsoft Sentinel SOC Lab"
    },
    {
      group: "Cloud",
      tool: "AWS",
      used: "Studied through AWS Fundamentals and cloud security learning.",
      project: "Cloud Security Learning"
    },
    {
      group: "Network",
      tool: "Wireshark / Nmap / Nessus",
      used: "Used for packet analysis, service discovery and vulnerability assessment in defensive labs.",
      project: "Network Security Lab"
    },
    {
      group: "Linux Security",
      tool: "UFW / Fail2Ban",
      used: "Used to understand basic hardening, firewalling and log-based protection concepts.",
      project: "Network Security Lab"
    },
    {
      group: "Query / Automation",
      tool: "KQL / PowerShell / Logic Apps concepts",
      used: "Used for investigation queries, endpoint administration and automation concepts.",
      project: "Microsoft Security Labs"
    }
  ],
  roadmap: [
    ["Foundation", "Networking, Linux, Windows, Security Fundamentals"],
    ["Current", "Microsoft Security, SC-200, Sentinel, Defender XDR, KQL, Azure Security"],
    ["Next", "SOC Analyst, Incident Response, Security Automation"],
    ["Future", "Cloud Security, Detection Engineering, Advanced Incident Response"]
  ]
};
