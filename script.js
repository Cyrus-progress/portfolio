/* ============================================================
   Cyrus Ho — Portfolio
   EDIT YOUR CONTENT HERE. Everything on the page is generated
   from the PROJECTS array below.

   To edit a project:   change its text / tags / links.
   To add a Notion link: replace  "#"  with your real URL.
   To add a project:     copy a { ... } block and fill it in.

   Each link's href of "#" automatically renders as a greyed-out
   "soon" button, so placeholders look intentional, not broken.

   Categories drive the filter chips. Keep them consistent.
   ============================================================ */

const PROJECTS = [
  {
    id: "ship",
    title: "SHiP — Silica-Histidine Polyplex",
    category: "Research",
    year: "2026",
    image: "assets/projects/ship.jpg",
    blurb: "A lipid-free mRNA delivery vehicle engineered to take vaccines off the cold chain — a predicted ~90× longer shelf life at room temperature.",
    description: [
      "mRNA-LNP vaccines degrade mainly through oxidation of their unsaturated ionizable lipids — today's formulations carry 22 bis-allylic C–H sites that propagate radical chain reactions even below freezing. That single chemistry problem is why these vaccines need a –70 °C freezer.",
      "SHiP replaces the lipid nanoparticle with a four-layer architecture — a pHK polymer core, a biomimetic silica shell, a PEG-mannose surface, and a trehalose glass matrix — containing zero such sites. Rather than slowing oxidation, it removes the substrate entirely.",
      "I also built a computational stability predictor (React + Recharts) validated against five published datasets (Muramatsu 2022, Ai 2023, Kafetzis 2023, Youssef 2025, Alejo 2024): MAE 4.52%, R² 0.848 over 36 data points. It projects SHiP's shelf life at ≈58 months at 25 °C versus ~0.6 months for current LNPs — about 90× longer. (SHiP figures are computational predictions, not yet wet-lab measured.)"
    ],
    tags: ["mRNA / LNP", "Drug delivery", "React", "Recharts", "Computational modeling", "GitHub Pages"],
    links: [
      { label: "Live site",        href: "https://cyrus-progress.github.io/SHIp/" },
      { label: "Interactive model", href: "https://cyrus-progress.github.io/SHIp/model.html" },
      { label: "GitHub",            href: "https://github.com/cyrus-progress/SHIp" },
      { label: "Notion",            href: "#" }
    ]
  },
  {
    id: "sepsisguard",
    title: "SepsisGuard",
    category: "Research",
    year: "2026",
    image: "assets/projects/sepsisguard.jpg",
    blurb: "AI-powered continuous monitoring that flags the silent onset of sepsis hours before traditional methods — built with a team on Cerebras inference.",
    description: [
      "Sepsis is involved in 1 in 18 deaths in Canada and kills roughly 11 million people worldwide each year, yet it is frequently caught too late. SepsisGuard continuously monitors patient vitals and labs to surface the early, silent signature of sepsis hours before conventional criteria fire — giving clinicians critical time to intervene.",
      "Built as a team project (with Ayman, Eddie, and Lauryn) on Cerebras inference, with a validated model, a clinician-facing landing experience, and a cost-savings analysis quantifying the impact of earlier detection."
    ],
    tags: ["AI / ML", "Healthcare", "Cerebras", "Team project", "Web"],
    links: [
      { label: "Notion",      href: "https://aboard-bucket-e6a.notion.site/Sepsis-Guard-3888252082df80aea548f0383a4054ca" },
      { label: "GitHub",      href: "https://github.com/payman12/sepsis-reflex" },
      { label: "Live demo",   href: "https://sepsis-guard-now.base44.app/" },
      { label: "Demo video",  href: "https://www.loom.com/share/a9edeaef08cb468c9802edba34cc0943" }
    ]
  },
  {
    id: "arxa",
    title: "ARXA — mRNA Therapy for Atherosclerosis",
    category: "Research",
    year: "2025",
    image: "assets/projects/arxa.jpg",
    blurb: "A modular mRNA therapy concept designed to clear artery-clogging foam cells and reverse cardiovascular disease.",
    description: [
      "Cardiovascular disease causes ~20 million deaths a year and is the world's leading cause of death — yet 80% of those deaths are preventable, and existing treatments slow plaque without reversing it.",
      "ARXA is a modular mRNA therapy designed to clear foam cells from arterial plaques in three stages: (1) Targeted delivery — mRNA in LNPs coated with LOX-1-binding peptides to reach foam cells inside plaques; (2) Smart activation — a fusion protein that only switches on in diseased, oxidized-LDL-rich tissue, reducing off-target effects; (3) Triple-enzyme action — PON1 breaks down oxidized lipids, CEH dissolves cholesterol esters, and LCAT rebuilds the protective HDL layer.",
      "Together the three enzymes aim to break plaque, heal arteries, and prevent reformation. Presented as a research poster with an ask for lab access and funding to test enzyme expression and RNA uptake."
    ],
    tags: ["mRNA", "Gene therapy", "Cardiovascular", "Research design"],
    links: [
      { label: "Notion", href: "#" }
    ]
  },
  {
    id: "constructfinance",
    title: "ConstructFinance Pro",
    category: "Software",
    year: "2025",
    image: "assets/projects/constructfinance.jpg",
    blurb: "A construction-finance platform — loan matching, draw requests, and budget tracking in one dashboard.",
    description: [
      "ConstructFinance Pro is a financing and project-management dashboard for construction. Builders upload a project, apply for loans through a loan-matching flow, submit draw requests, invite their team, and track budget progress and completion across multiple lots in real time.",
      "It covers the full financing lifecycle — from application to completion — in a polished product UI with card and table views, project dashboards, and budget progress tracking."
    ],
    tags: ["Web app", "Fintech", "Product design", "Dashboard"],
    links: [
      { label: "Notion",    href: "#" },
      { label: "Live demo", href: "#" }
    ]
  },
  {
    id: "speedskating",
    title: "Short-Track Speed Skating Training App",
    category: "Software",
    year: "2026",
    emoji: "⛸️",
    accent: "#0ea5e9",
    blurb: "A full-stack training tracker for short-track speed skaters — ice sessions, lap splits, weights, and training-load metrics.",
    description: [
      "A workout-tracking platform built for short-track speed skating. Athletes log ice sessions with lap splits and rep comparisons, weight-training sessions, and technical practices, and see training-load metrics (CTL / ATL / TSB, TSS) borrowed from endurance sport science.",
      "Built as a monorepo: an Express + TypeScript API, a Vite + React + Tailwind web app, and an Expo (React Native) mobile app, backed by PostgreSQL, with shared TypeScript types and a shared fitness-formula package."
    ],
    tags: ["React", "Expo / React Native", "Node.js", "TypeScript", "PostgreSQL", "Monorepo"],
    links: [
      { label: "Notion", href: "#" },
      { label: "GitHub", href: "#" }
    ]
  },
  {
    id: "thinkyouth",
    title: "Project Think Youth — Beyond the Basics",
    category: "Community",
    year: "2025",
    image: "assets/projects/think-youth.jpg",
    blurb: "A youth-led Vancouver nonprofit empowering young people to lead through education and community initiatives.",
    description: [
      "Project Think Youth (“Beyond the Basics”) is a youth-led nonprofit creating meaningful change through education and community initiatives in Vancouver.",
      "I helped lead the brand identity — including the butterfly logo and visual system — and built the organization's website to recruit volunteers and share programs."
    ],
    tags: ["Nonprofit", "Leadership", "Branding", "Web"],
    links: [
      { label: "Notion",  href: "#" },
      { label: "Website", href: "#" }
    ]
  },
  {
    id: "pitchtrainer",
    title: "Pitch Trainer",
    category: "Software",
    year: "2026",
    emoji: "🎤",
    accent: "#8b5cf6",
    blurb: "A browser-based singing trainer that detects your pitch in real time to help you practice intervals and vocal jazz.",
    description: [
      "Pitch Trainer is a web app for singing practice. It uses the microphone and real-time pitch detection (via the pitchy library) to show the note you're singing and how close you are to the target — helping with ear training, interval practice, and vocal jazz.",
      "Built with React, Vite, and Tailwind."
    ],
    tags: ["React", "Vite", "Tailwind", "Web Audio", "Pitch detection"],
    links: [
      { label: "Notion",    href: "#" },
      { label: "GitHub",    href: "#" },
      { label: "Live demo", href: "#" }
    ]
  },
  {
    id: "journal",
    title: "Daily Journaling App",
    category: "Software",
    year: "2026",
    emoji: "📓",
    accent: "#10b981",
    blurb: "A calming daily-journaling app with rotating nature backgrounds, ambient music, and a personal login.",
    description: [
      "A daily journaling app designed to make reflection feel calm and inviting — rotating nature backgrounds, ambient / focus music, a title screen, and a personal login so entries stay private."
    ],
    tags: ["Web", "Front-end", "UX"],
    links: [
      { label: "Notion",    href: "#" },
      { label: "Live demo", href: "#" }
    ]
  }
];

/* ============================================================
   Below this line is rendering logic — you normally don't need
   to touch it.
   ============================================================ */

// Lucide-style SVG icons for projects WITHOUT a cover image (keyed by id).
const ICONS = {
  speedskating: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  pitchtrainer: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
  journal: '<path d="M12 7v14"/><path d="M3 5a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3 3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3H4a1 1 0 0 1-1-1z"/>',
};

const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");

// Catalogue number from the project's position in PROJECTS (01, 02, …).
function num(p) { return String(PROJECTS.indexOf(p) + 1).padStart(2, "0"); }

// Cover contents: a real image, or an SVG icon over a faint technical grid.
function coverInner(p) {
  if (p.image) return `<img src="${p.image}" alt="${p.title}" loading="lazy" />`;
  const icon = ICONS[p.id] || '<circle cx="12" cy="12" r="8"/>';
  return `<div class="card__cover-grid"></div>` +
    `<svg viewBox="0 0 24 24" fill="none" stroke="${p.accent || '#2563EB'}" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${icon}</svg>`;
}

function tagHTML(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join("");
}

function linksHTML(links) {
  const arrow = `<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>`;
  return links.map(l => {
    const pending = !l.href || l.href === "#";
    const cls = pending
      ? "linkbtn linkbtn--pending"
      : (l.label === "Notion" ? "linkbtn linkbtn--notion" : "linkbtn");
    const attrs = pending
      ? `href="#" onclick="return false;" title="Add this link in script.js"`
      : `href="${l.href}" target="_blank" rel="noopener"`;
    return `<a class="${cls}" ${attrs}>${l.label}${pending ? "" : arrow}</a>`;
  }).join("");
}

// ---- render cards ----
function renderCards(filter) {
  grid.innerHTML = "";
  PROJECTS
    .filter(p => filter === "All" || p.category === filter)
    .forEach(p => {
      const card = document.createElement("button");
      card.className = "card";
      card.setAttribute("aria-label", `Open ${p.title}`);
      const coverCls = "card__cover" + (p.image ? "" : " card__cover--icon");
      card.innerHTML = `
        <span class="card__num">${num(p)}</span>
        <div class="${coverCls}">${coverInner(p)}</div>
        <div class="card__body">
          <span class="card__meta">${p.category} · ${p.year}</span>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__blurb">${p.blurb}</p>
          <div class="card__tags">${tagHTML(p.tags.slice(0, 4))}</div>
        </div>`;
      card.addEventListener("click", () => openModal(p));
      grid.appendChild(card);
    });
}

// ---- filters ----
function renderFilters() {
  const cats = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  cats.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "filter";
    b.textContent = c;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter").forEach(f => f.setAttribute("aria-selected", "false"));
      b.setAttribute("aria-selected", "true");
      renderCards(c);
    });
    filtersEl.appendChild(b);
  });
}

// ---- modal ----
const modal = document.getElementById("modal");
const mCover = document.getElementById("modal-cover");
const mNum = document.getElementById("modal-num");
const mCat = document.getElementById("modal-cat");
const mTitle = document.getElementById("modal-title");
const mDesc = document.getElementById("modal-desc");
const mTags = document.getElementById("modal-tags");
const mLinks = document.getElementById("modal-links");

function openModal(p) {
  mCover.className = "modal__cover" + (p.image ? "" : " modal__cover--icon");
  mCover.innerHTML = coverInner(p);
  mNum.textContent = num(p);
  mCat.textContent = `${p.category} · ${p.year}`;
  mTitle.textContent = p.title;
  mDesc.innerHTML = p.description.map(d => `<p>${d}</p>`).join("");
  mTags.innerHTML = tagHTML(p.tags);
  mLinks.innerHTML = linksHTML(p.links);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ---- init ----
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("work-count").textContent = PROJECTS.length + " Projects";
renderFilters();
renderCards("All");
