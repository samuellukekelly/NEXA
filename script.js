const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = [...document.querySelectorAll(".nav-links a")];

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navItems.forEach((item) => {
      item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

const serviceContent = {
  electrical: {
    kicker: "Electrical Design",
    title: "Resilient power, lighting and life safety systems.",
    copy: "From load assessments and LV distribution to lighting, fire alarm interfaces and critical supplies, NEXA designs electrical systems that are clear, compliant and easy to coordinate.",
    points: [
      "LV distribution and single line diagrams",
      "Lighting, emergency lighting and controls",
      "Small power, containment and mechanical supplies",
      "Healthcare resilience and critical power support"
    ],
    outputs: ["Stage reports", "Drawings", "Schedules", "Specifications"]
  },
  mechanical: {
    kicker: "Mechanical Design",
    title: "Comfort, ventilation and plant strategies that work in real buildings.",
    copy: "Mechanical design is shaped around occupancy, resilience, maintainability and the realities of existing sites, with early coordination around routes, plant space and controls.",
    points: [
      "Heating, cooling and ventilation strategy",
      "Plant replacement and lifecycle upgrades",
      "Controls philosophy and metering interfaces",
      "Mechanical support for live healthcare estates"
    ],
    outputs: ["Plant strategy", "Schematics", "Room data", "Controls notes"]
  },
  "public-health": {
    kicker: "Public Health",
    title: "Water, drainage and specialist services planned from day one.",
    copy: "Public health design is integrated with architecture and structure early so routes, risers, access and maintenance are resolved before they become site issues.",
    points: [
      "Domestic water services",
      "Above-ground drainage",
      "Specialist gases and healthcare interfaces",
      "Water hygiene and maintainability reviews"
    ],
    outputs: ["Riser strategy", "Layouts", "Schematics", "Asset notes"]
  },
  sustainability: {
    kicker: "Low Carbon Systems",
    title: "Lower-energy decisions made visible at each design stage.",
    copy: "NEXA brings low carbon thinking into everyday M&E choices, helping teams understand energy, plant efficiency, controls, metering and future upgrade paths.",
    points: [
      "Heat pump and electrification readiness",
      "LED lighting and controls upgrades",
      "Metering, monitoring and load reduction",
      "PV, EV and battery storage coordination"
    ],
    outputs: ["Options appraisals", "Energy notes", "Upgrade routes", "Carbon actions"]
  }
};

const serviceTabs = [...document.querySelectorAll("[data-service]")];
const serviceKicker = document.querySelector("#service-kicker");
const serviceTitle = document.querySelector("#service-title");
const serviceCopy = document.querySelector("#service-copy");
const serviceList = document.querySelector("#service-list");
const serviceOutputTags = document.querySelector("#service-output-tags");

function setService(serviceKey) {
  const content = serviceContent[serviceKey];
  if (!content || !serviceKicker || !serviceTitle || !serviceCopy || !serviceList || !serviceOutputTags) return;

  serviceTabs.forEach((tab) => {
    const isActive = tab.dataset.service === serviceKey;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  serviceKicker.textContent = content.kicker;
  serviceTitle.textContent = content.title;
  serviceCopy.textContent = content.copy;
  serviceList.innerHTML = content.points.map((point) => `<li>${point}</li>`).join("");
  serviceOutputTags.innerHTML = content.outputs.map((output) => `<span>${output}</span>`).join("");
}

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => setService(tab.dataset.service));
});

const sectorChips = [...document.querySelectorAll("[data-filter]")];
const sectorCards = [...document.querySelectorAll("[data-sector]")];

sectorChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    sectorChips.forEach((item) => item.classList.toggle("active", item === chip));
    sectorCards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.sector !== filter);
    });
  });
});

const layerButtons = [...document.querySelectorAll("[data-layer]")];
const buildingModel = document.querySelector(".building-model");

function updateLayers() {
  if (!buildingModel) return;
  const activeLayers = layerButtons
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.layer);
  buildingModel.dataset.activeLayers = activeLayers.join(" ");
}

layerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeCount = layerButtons.filter((item) => item.classList.contains("active")).length;
    if (button.classList.contains("active") && activeCount === 1) return;
    button.classList.toggle("active");
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    updateLayers();
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const systemsPanel = document.querySelector(".systems-panel");

if (systemsPanel && buildingModel && !prefersReducedMotion) {
  systemsPanel.addEventListener("pointermove", (event) => {
    const rect = systemsPanel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    buildingModel.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translate(${(x * 8).toFixed(1)}px, ${(y * 6).toFixed(1)}px)`;
  });

  systemsPanel.addEventListener("pointerleave", () => {
    buildingModel.style.transform = "";
  });
}

const briefBuilder = document.querySelector("#brief-builder");
const briefSector = document.querySelector("#brief-sector");
const briefArea = document.querySelector("#brief-area");
const areaOutput = document.querySelector("#area-output");
const briefTitle = document.querySelector("#brief-title");
const briefCopy = document.querySelector("#brief-copy");
const briefStage = document.querySelector("#brief-stage");
const briefRisk = document.querySelector("#brief-risk");
const briefTeam = document.querySelector("#brief-team");
const copyBrief = document.querySelector("#copy-brief");
const briefExport = document.querySelector("#brief-export");

const sectorAdvice = {
  healthcare: {
    title: "Healthcare-led M&E strategy route",
    copy: "Start with resilience, compliance and phasing. Existing services, shutdown planning and clinical continuity should be tested before coordinated design begins.",
    risk: "High"
  },
  commercial: {
    title: "Flexible commercial services route",
    copy: "Focus early on occupancy, landlord interfaces, future fit-out flexibility and metering so the design can adapt without costly rework.",
    risk: "Medium"
  },
  education: {
    title: "Robust education estate route",
    copy: "Prioritise safe phasing, durable plant choices, simple controls and seasonal programme constraints around term-time activity.",
    risk: "Medium"
  },
  public: {
    title: "Compliance-led public sector route",
    copy: "Begin with asset condition, lifecycle value, procurement requirements and clear decision records for stakeholders.",
    risk: "Medium"
  },
  residential: {
    title: "Repeatable residential M&E route",
    copy: "Set riser, plant, utility and metering strategies early so repeated layouts stay efficient across the full building.",
    risk: "Low"
  }
};

function updateBrief() {
  if (!briefBuilder || !briefSector || !briefArea || !areaOutput) return;

  const area = Number(briefArea.value);
  const checked = [...briefBuilder.querySelectorAll("input[type='checkbox']:checked")].map((item) => item.value);
  const advice = sectorAdvice[briefSector.value];
  const teamSize = Math.max(1, Math.min(5, checked.length + (area > 6000 ? 1 : 0)));

  areaOutput.value = `${area.toLocaleString("en-GB")} m2`;
  briefTitle.textContent = advice.title;
  briefCopy.textContent = advice.copy;
  briefRisk.textContent = area > 8000 && advice.risk !== "High" ? "Medium+" : advice.risk;
  briefTeam.textContent = teamSize === 1 ? "1" : `${Math.max(2, teamSize - 1)}-${teamSize}`;
  briefStage.textContent = checked.includes("Low Carbon") ? "RIBA 1-4" : "RIBA 2-4";
}

if (briefBuilder) {
  briefBuilder.addEventListener("input", updateBrief);
  updateBrief();
}

if (copyBrief) {
  copyBrief.addEventListener("click", async () => {
    const selectedDisciplines = [...briefBuilder.querySelectorAll("input[type='checkbox']:checked")]
      .map((item) => item.value)
      .join(", ");
    const summary = `${briefTitle.textContent}\n${briefCopy.textContent}\nArea: ${areaOutput.value}\nDisciplines: ${selectedDisciplines}\nStages: ${briefStage.textContent}\nRisk: ${briefRisk.textContent}`;

    if (briefExport) {
      briefExport.hidden = false;
      briefExport.textContent = summary;
    }

    let copied = false;
    try {
      await navigator.clipboard.writeText(summary);
      copied = true;
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = summary;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.left = "-9999px";
      document.body.appendChild(fallback);
      fallback.select();
      copied = document.execCommand("copy");
      fallback.remove();
    }

    copyBrief.textContent = copied ? "Brief Copied" : "Brief Summary Ready";

    window.setTimeout(() => {
      copyBrief.textContent = "Copy Brief Summary";
    }, 1800);
  });
}

const processSteps = [...document.querySelectorAll(".process-step")];

processSteps.forEach((step) => {
  step.addEventListener("click", () => {
    processSteps.forEach((item) => {
      const isActive = item === step;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-expanded", String(isActive));
    });
  });
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = [...contactForm.querySelectorAll("input, select, textarea")];
    const invalidFields = fields.filter((field) => !field.checkValidity());

    fields.forEach((field) => field.classList.toggle("error", invalidFields.includes(field)));

    if (invalidFields.length) {
      formStatus.textContent = "Please complete the highlighted fields before sending.";
      formStatus.className = "form-status error";
      invalidFields[0].focus();
      return;
    }

    const name = contactForm.elements.name.value.trim();
    formStatus.textContent = `Thanks, ${name}. Your enquiry is ready to connect to email or a CRM.`;
    formStatus.className = "form-status success";
    contactForm.reset();
  });
}
