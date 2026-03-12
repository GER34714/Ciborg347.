// /public/app.js
const SUPABASE_URL = "https://fhxcumwhgtfirznnznjx.supabase.co";
const REAL_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGN1bXdoZ3RmaXJ6bm56bmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5OTYyNzEsImV4cCI6MjA4MzU3MjI3MX0.7z1B099L4yrA9k1JxwvYGCABzqiqYtkUClI3E8wQ2zA";
const WHATSAPP_NUMBER = "5491164499481";

const sb = window.supabase.createClient(SUPABASE_URL, REAL_SUPABASE_KEY);

/* =========================
   DOM
========================= */
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

const topWhatsAppBtn = document.getElementById("topWhatsAppBtn");
const mobileWhatsAppBtn = document.getElementById("mobileWhatsAppBtn");
const heroWhatsAppBtn = document.getElementById("heroWhatsAppBtn");
const finalWhatsAppBtn = document.getElementById("finalWhatsAppBtn");
const waFloat = document.getElementById("waFloat");

const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");

const solutionsIntro = document.getElementById("solutionsIntro");

const featuredGrid = document.getElementById("featuredGrid");
const categoryChips = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const stateBox = document.getElementById("stateBox");
const projectsGrid = document.getElementById("projectsGrid");
const moreWrap = document.getElementById("moreWrap");
const moreBtn = document.getElementById("moreBtn");

const autoadminTitle = document.getElementById("autoadminTitle");
const autoadminSubtitle = document.getElementById("autoadminSubtitle");
const autoadminContent = document.getElementById("autoadminContent");
const autoadminBtn = document.getElementById("autoadminBtn");

const budgetTitle = document.getElementById("budgetTitle");
const budgetSubtitle = document.getElementById("budgetSubtitle");
const budgetContent = document.getElementById("budgetContent");
const budgetBtn = document.getElementById("budgetBtn");

const differentialsSubtitle = document.getElementById("differentialsSubtitle");

const faqList = document.getElementById("faqList");

const finalCtaTitle = document.getElementById("finalCtaTitle");
const finalCtaSubtitle = document.getElementById("finalCtaSubtitle");

const modal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalType = document.getElementById("modalType");
const modalPreviewType = document.getElementById("modalPreviewType");
const modalShort = document.getElementById("modalShort");
const modalFull = document.getElementById("modalFull");
const modalDemoBtn = document.getElementById("modalDemoBtn");
const modalWhatsAppBtn = document.getElementById("modalWhatsAppBtn");

/* =========================
   STATE
========================= */
let categoriesData = [];
let projectsData = [];
let faqsData = [];
let siteContentData = [];

let activeCategory = "__all__";
let searchTerm = "";
let activeType = "__all__";
let visibleCount = 8;

/* =========================
   HELPERS
========================= */
function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function norm(s) {
  return String(s || "").toLowerCase().trim();
}

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function setDefaultWhatsAppLinks() {
  const msg = "Hola CIBORG 347, vi tus demos y quiero consultar por una web para mi marca o emprendimiento.";

  [topWhatsAppBtn, mobileWhatsAppBtn, heroWhatsAppBtn, finalWhatsAppBtn, waFloat].forEach(el => {
    if (!el) return;
    el.href = getWhatsAppUrl(msg);
    el.target = "_blank";
    el.rel = "noopener";
  });

  if (autoadminBtn) {
    autoadminBtn.href = getWhatsAppUrl("Hola CIBORG 347, quiero consultar por una web autoadministrable para mi proyecto.");
  }

  if (budgetBtn) {
    budgetBtn.href = getWhatsAppUrl("Hola CIBORG 347, quiero consultar por un sistema o herramienta especial para mi negocio.");
  }
}

function findCategoryName(id) {
  return categoriesData.find(c => c.id === id)?.name || "Sin categoría";
}

function findSiteContent(key) {
  return siteContentData.find(item => item.key === key && item.active);
}

function showState(msg) {
  if (!stateBox) return;
  stateBox.style.display = "block";
  stateBox.textContent = msg;
}

function hideState() {
  if (!stateBox) return;
  stateBox.style.display = "none";
  stateBox.textContent = "";
}

function switchMobileMenu(force) {
  if (!mobileMenu || !burgerBtn) return;

  const open = typeof force === "boolean" ? force : !mobileMenu.classList.contains("isOpen");
  mobileMenu.classList.toggle("isOpen", open);
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
  burgerBtn.setAttribute("aria-expanded", open ? "true" : "false");
}

function applyGlobalContent() {
  const hero = findSiteContent("hero");
  if (hero) {
    if (hero.title && heroTitle) heroTitle.textContent = hero.title;
    if (hero.subtitle && heroSubtitle) heroSubtitle.textContent = hero.subtitle;
  }

  const solutions = findSiteContent("solutions_intro");
  if (solutions?.subtitle && solutionsIntro) {
    solutionsIntro.textContent = solutions.subtitle;
  }

  const autoadmin = findSiteContent("autoadmin_block");
  if (autoadmin) {
    if (autoadmin.title && autoadminTitle) autoadminTitle.textContent = autoadmin.title;
    if (autoadmin.subtitle && autoadminSubtitle) autoadminSubtitle.textContent = autoadmin.subtitle;
    if (autoadmin.content && autoadminContent) autoadminContent.textContent = autoadmin.content;
    if (autoadmin.cta_label && autoadminBtn) autoadminBtn.textContent = autoadmin.cta_label;
    if (autoadmin.cta_url && autoadminBtn) autoadminBtn.href = autoadmin.cta_url;
  }

  const budget = findSiteContent("budget_system_block");
  if (budget) {
    if (budget.title && budgetTitle) budgetTitle.textContent = budget.title;
    if (budget.subtitle && budgetSubtitle) budgetSubtitle.textContent = budget.subtitle;
    if (budget.content && budgetContent) budgetContent.textContent = budget.content;
    if (budget.cta_label && budgetBtn) budgetBtn.textContent = budget.cta_label;
    if (budget.cta_url && budgetBtn) budgetBtn.href = budget.cta_url;
  }

  const diff = findSiteContent("differentials");
  if (diff?.subtitle && differentialsSubtitle) {
    differentialsSubtitle.textContent = diff.subtitle;
  }

  const finalCta = findSiteContent("final_cta");
  if (finalCta) {
    if (finalCta.title && finalCtaTitle) finalCtaTitle.textContent = finalCta.title;
    if (finalCta.subtitle && finalCtaSubtitle) finalCtaSubtitle.textContent = finalCta.subtitle;
    if (finalCta.cta_label && finalWhatsAppBtn) finalWhatsAppBtn.textContent = finalCta.cta_label;
    if (finalCta.cta_url && finalWhatsAppBtn) finalWhatsAppBtn.href = finalCta.cta_url;
  }
}

function renderFaqs() {
  if (!faqList) return;

  const activeFaqs = faqsData
    .filter(faq => faq.active)
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  if (!activeFaqs.length) {
    faqList.innerHTML = `<div class="emptyState">No hay preguntas frecuentes cargadas todavía.</div>`;
    return;
  }

  faqList.innerHTML = activeFaqs.map(faq => `
    <article class="faqItem">
      <button class="faqItem__head" type="button">
        <strong>${escapeHtml(faq.question)}</strong>
        <span>+</span>
      </button>
      <div class="faqItem__body">
        <p>${escapeHtml(faq.answer)}</p>
      </div>
    </article>
  `).join("");

  faqList.querySelectorAll(".faqItem").forEach(item => {
    const head = item.querySelector(".faqItem__head");
    head.addEventListener("click", () => {
      item.classList.toggle("isOpen");
    });
  });
}

function renderFeatured() {
  if (!featuredGrid) return;

  const list = projectsData
    .filter(p => p.active && p.featured_home)
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  if (!list.length) {
    featuredGrid.innerHTML = `<div class="emptyState">No hay destacados cargados.</div>`;
    return;
  }

  featuredGrid.innerHTML = list.map(project => `
    <article class="featuredCard" data-open-project="${project.id}">
      <div class="featuredCard__image">
        <img src="${escapeHtml(project.image_url)}" alt="${escapeHtml(project.title)}" loading="lazy" />
      </div>

      <div class="featuredCard__body">
        <span class="tag">${escapeHtml(findCategoryName(project.category_id))}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.short_description)}</p>
        <div class="featuredCard__meta">${escapeHtml(project.solution_type)}</div>
      </div>
    </article>
  `).join("");

  featuredGrid.querySelectorAll("[data-open-project]").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-open-project");
      const project = projectsData.find(p => String(p.id) === String(id));
      if (project) openProjectModal(project);
    });
  });
}

function renderCategoryChips() {
  if (!categoryChips) return;

  const categories = categoriesData
    .filter(c => c.active)
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  const baseChip = `<button class="chip ${activeCategory === "__all__" ? "isActive" : ""}" data-category="__all__" type="button">Todas</button>`;

  const chips = categories.map(cat => {
    const activeClass = activeCategory === cat.id ? "isActive" : "";
    return `<button class="chip ${activeClass}" data-category="${cat.id}" type="button">${escapeHtml(cat.name)}</button>`;
  }).join("");

  categoryChips.innerHTML = baseChip + chips;

  categoryChips.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-category");
      visibleCount = 8;
      renderCategoryChips();
      renderProjects();
    });
  });
}

function getFilteredProjects() {
  let list = projectsData.filter(p => p.active);

  if (activeCategory !== "__all__") {
    list = list.filter(p => String(p.category_id) === String(activeCategory));
  }

  if (activeType !== "__all__") {
    list = list.filter(p => p.solution_type === activeType);
  }

  if (searchTerm) {
    list = list.filter(project => {
      const hay = norm(
        `${project.title} ${project.short_description} ${project.full_description || ""} ${findCategoryName(project.category_id)} ${project.solution_type}`
      );
      return hay.includes(searchTerm);
    });
  }

  list.sort((a, b) => {
    const ai = a.order_index ?? 0;
    const bi = b.order_index ?? 0;
    if (ai !== bi) return ai - bi;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return list;
}

function renderProjects() {
  if (!projectsGrid || !moreWrap) return;

  const filtered = getFilteredProjects();

  if (!filtered.length) {
    projectsGrid.innerHTML = "";
    moreWrap.style.display = "none";
    showState("No hay proyectos para mostrar con esos filtros.");
    return;
  }

  hideState();

  const slice = filtered.slice(0, visibleCount);

  projectsGrid.innerHTML = slice.map(project => `
    <article class="projectCard" data-open-project="${project.id}">
      <div class="projectCard__image">
        <img src="${escapeHtml(project.image_url)}" alt="${escapeHtml(project.title)}" loading="lazy" />
      </div>

      <div class="projectCard__body">
        <div class="projectCard__top">
          <span class="tag">${escapeHtml(findCategoryName(project.category_id))}</span>
          <span class="projectCard__type">${escapeHtml(project.solution_type)}</span>
        </div>

        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.short_description)}</p>
      </div>
    </article>
  `).join("");

  projectsGrid.querySelectorAll("[data-open-project]").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-open-project");
      const project = projectsData.find(p => String(p.id) === String(id));
      if (project) openProjectModal(project);
    });
  });

  moreWrap.style.display = filtered.length > visibleCount ? "flex" : "none";
}

function openProjectModal(project) {
  if (!modal) return;

  if (modalCategory) modalCategory.textContent = findCategoryName(project.category_id);
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalImage) {
    modalImage.src = project.image_url || "";
    modalImage.alt = project.title || "";
  }
  if (modalType) modalType.textContent = project.solution_type || "-";
  if (modalPreviewType) modalPreviewType.textContent = project.preview_type || "image";
  if (modalShort) modalShort.textContent = project.short_description || "";
  if (modalFull) modalFull.textContent = project.full_description || "";
  if (modalDemoBtn) modalDemoBtn.href = project.demo_url || "#";

  if (modalWhatsAppBtn) {
    const msg = `Hola CIBORG 347, vi la demo "${project.title}" (${findCategoryName(project.category_id)} - ${project.solution_type}) y quiero algo así para mi marca o emprendimiento.`;
    modalWhatsAppBtn.href = getWhatsAppUrl(msg);
  }

  modal.classList.add("isOpen");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("bodyLock");
}

function closeProjectModal() {
  if (!modal) return;
  modal.classList.remove("isOpen");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("bodyLock");
}

async function loadCategories() {
  const { data, error } = await sb
    .from("categories")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error(error);
    showState("No se pudieron cargar las categorías.");
    return;
  }

  categoriesData = data || [];
  renderCategoryChips();
}

async function loadProjects() {
  const { data, error } = await sb
    .from("projects")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    showState("No se pudieron cargar los proyectos.");
    return;
  }

  projectsData = data || [];
  renderFeatured();
  renderProjects();
}

async function loadFaqs() {
  const { data, error } = await sb
    .from("faqs")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }

  faqsData = data || [];
  renderFaqs();
}

async function loadSiteContent() {
  const { data, error } = await sb
    .from("site_content")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }

  siteContentData = data || [];
  applyGlobalContent();
}

async function init() {
  setDefaultWhatsAppLinks();
  showState("Cargando contenido...");

  await loadCategories();
  await loadProjects();
  await loadFaqs();
  await loadSiteContent();

  if (!projectsData.length) {
    showState("Todavía no hay proyectos para mostrar.");
  } else {
    hideState();
  }
}

/* =========================
   EVENTS
========================= */
if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    switchMobileMenu();
  });
}

if (mobileMenu) {
  mobileMenu.querySelectorAll("[data-close]").forEach(link => {
    link.addEventListener("click", () => switchMobileMenu(false));
  });
}

if (searchInput) {
  searchInput.addEventListener("input", e => {
    searchTerm = norm(e.target.value);
    visibleCount = 8;
    renderProjects();
  });
}

if (typeFilter) {
  typeFilter.addEventListener("change", e => {
    activeType = e.target.value;
    visibleCount = 8;
    renderProjects();
  });
}

if (moreBtn) {
  moreBtn.addEventListener("click", () => {
    visibleCount += 8;
    renderProjects();
  });
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", closeProjectModal);
}

if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

window.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal && modal.classList.contains("isOpen")) {
    closeProjectModal();
  }
});

init();
