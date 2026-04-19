// ===== CIBORG 347 - MINIMAL CYBERPUNK JAVASCRIPT =====
// Ligero, rápido y eficiente

// Supabase Configuration
const SUPABASE_URL = "https://fhxcumwhgtfirznnznjx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGN1bXdoZ3RmaXJ6bm56bmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5OTYyNzEsImV4cCI6MjA4MzU3MjI3MX0.7z1B099L4yrA9k1JxwvYGCABzqiqYtkUClI3E8wQ2zA";
const DEFAULT_WHATSAPP_NUMBER = "5491164499481";

const sb = window.supabase?.createClient ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;

// DOM Elements
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const topWhatsAppBtn = document.getElementById("topWhatsAppBtn");
const mobileWhatsAppBtn = document.getElementById("mobileWhatsAppBtn");
const heroWhatsAppBtn = document.getElementById("heroWhatsAppBtn");
const finalWhatsAppBtn = document.getElementById("finalWhatsAppBtn");
const waFloat = document.getElementById("waFloat");
const emailContactBtn = document.getElementById("emailContactBtn");
const brandLogo = document.getElementById("brandLogo");
const heroLogo = document.getElementById("heroLogo");
const brandTitle = document.getElementById("brandTitle");
const brandTagline = document.getElementById("brandTagline");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const solutionsIntro = document.getElementById("solutionsIntro");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const tagFilter = document.getElementById("tagFilter");
const stateBox = document.getElementById("stateBox");
const projectsGrid = document.getElementById("projectsGrid");
const moreBtn = document.getElementById("moreBtn");
const finalCtaTitle = document.getElementById("finalCtaTitle");
const finalCtaSubtitle = document.getElementById("finalCtaSubtitle");
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalShort = document.getElementById("modalShort");
const modalFull = document.getElementById("modalFull");
const modalDemoBtn = document.getElementById("modalDemoBtn");
const modalWhatsAppBtn = document.getElementById("modalWhatsAppBtn");

// Global State
let projectsData = [];
let siteSettingsData = null;
let visibleCount = 6;

// Utility Functions
function escapeHtml(s) {
  return String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function getCurrentWhatsAppNumber() { 
  return siteSettingsData?.whatsapp_number || DEFAULT_WHATSAPP_NUMBER; 
}

function getWhatsAppUrl(text) { 
  return `https://wa.me/${getCurrentWhatsAppNumber()}?text=${encodeURIComponent(text)}`; 
}

function showState(msg) { 
  if (stateBox) {
    stateBox.style.display = "block"; 
    stateBox.textContent = msg; 
  }
}

function hideState() { 
  if (stateBox) {
    stateBox.style.display = "none"; 
    stateBox.textContent = ""; 
  }
}

function switchMobileMenu(force) {
  if (!mobileMenu || !burgerBtn) return;
  const open = typeof force === "boolean" ? force : !mobileMenu.classList.contains("isOpen");
  mobileMenu.classList.toggle("isOpen", open);
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
  burgerBtn.setAttribute("aria-expanded", open ? "true" : "false");
}

// ===== MINIMAL UX FUNCTIONS =====

// Simple fade-in animations
function setupFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Smooth scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== ORIGINAL FUNCTIONS =====

function setDefaultWhatsAppLinks() {
  const msg = "Hola CIBORG 347, vi tus demos y quiero consultar por una web para mi marca o emprendimiento.";
  [topWhatsAppBtn, mobileWhatsAppBtn, heroWhatsAppBtn, finalWhatsAppBtn, waFloat].forEach(el => {
    if (!el) return;
    el.href = getWhatsAppUrl(msg);
    el.target = "_blank";
    el.rel = "noopener";
  });
  
  if (siteSettingsData?.email_contact && emailContactBtn) {
    emailContactBtn.href = `mailto:${siteSettingsData.email_contact}`;
  }
}

function applySiteSettings() {
  const s = siteSettingsData;
  if (!s) return;
  
  const logo = s.logo_url || "https://iili.io/fETkPEv.md.png";
  const heroLogoUrl = s.hero_logo_url || logo;
  const siteTitle = s.site_title || "CIBORG 347";
  const siteTagline = s.site_tagline || "Landing Pages & Web Designs";
  
  if (brandLogo) brandLogo.src = logo;
  if (heroLogo) heroLogo.src = heroLogoUrl;
  if (brandTitle) brandTitle.textContent = siteTitle;
  if (brandTagline) brandTagline.textContent = siteTagline;
  if (heroTitle && s.hero_title) heroTitle.textContent = s.hero_title;
  if (heroSubtitle && s.hero_subtitle) heroSubtitle.textContent = s.hero_subtitle;
  if (solutionsIntro && s.solutions_intro) solutionsIntro.textContent = s.solutions_intro;
  if (finalCtaTitle && s.final_cta_title) finalCtaTitle.textContent = s.final_cta_title;
  if (finalCtaSubtitle && s.final_cta_subtitle) finalCtaSubtitle.textContent = s.final_cta_subtitle;
  
  setDefaultWhatsAppLinks();
}

function renderFeatured() {
  if (!featuredGrid) return;
  
  const list = projectsData.filter(p => p.active && p.featured_home && p.status !== "archived").slice(0, 6);
  
  if (!list.length) {
    featuredGrid.innerHTML = `<div class="emptyState">No hay destacados cargados.</div>`;
    return;
  }
  
  featuredGrid.innerHTML = list.map((project, index) => `
    <article class="featuredCard fade-in" style="animation-delay: ${index * 0.1}s" data-open-project="${project.id}">
      <div class="featuredCard__image">
        <img src="${escapeHtml(project.image_url)}" alt="${escapeHtml(project.title)}" loading="lazy" />
      </div>
      <div class="featuredCard__body">
        <span class="tag">${escapeHtml(project.solution_type || 'Web')}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.short_description)}</p>
      </div>
    </article>
  `).join("");
  
  bindProjectOpeners(featuredGrid);
}

function renderProjects() {
  if (!projectsGrid) return;
  
  const filtered = projectsData.filter(p => p.active && p.status !== "archived");
  const slice = filtered.slice(0, visibleCount);
  
  if (!slice.length) {
    projectsGrid.innerHTML = `<div class="emptyState">No hay proyectos para mostrar.</div>`;
    return;
  }
  
  projectsGrid.innerHTML = slice.map((project, index) => `
    <article class="projectCard fade-in" style="animation-delay: ${index * 0.1}s" data-open-project="${project.id}">
      <div class="projectCard__image">
        <img src="${escapeHtml(project.image_url)}" alt="${escapeHtml(project.title)}" loading="lazy" />
      </div>
      <div class="projectCard__body">
        <span class="tag">${escapeHtml(project.solution_type || 'Web')}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.short_description)}</p>
      </div>
    </article>
  `).join("");
  
  bindProjectOpeners(projectsGrid);
}

function bindProjectOpeners(root) {
  root.querySelectorAll("[data-open-project]").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-open-project");
      const project = projectsData.find(p => String(p.id) === String(id));
      if (project) openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  if (!modal) return;
  
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalImage) { 
    modalImage.src = project.image_url || ""; 
    modalImage.alt = project.title || ""; 
  }
  if (modalShort) modalShort.textContent = project.short_description || "";
  if (modalFull) modalFull.textContent = project.full_description || "";
  if (modalDemoBtn) modalDemoBtn.href = project.demo_url || "#";
  if (modalWhatsAppBtn) modalWhatsAppBtn.href = getWhatsAppUrl(
    `Hola CIBORG 347, vi la demo "${project.title}" y quiero algo así para mi marca.`
  );
  
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

// ===== DATA LOADING =====

async function loadProjects() {
  if (!sb) return;
  
  const { data, error } = await sb.from("projects").select("*")
    .eq("active", true)
    .is("deleted_at", null)
    .neq("status", "archived")
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

async function loadSiteSettings() {
  if (!sb) return;
  
  const { data, error } = await sb.from("site_settings")
    .select("*")
    .eq("id", "global")
    .maybeSingle();
  
  if (error) {
    console.error(error);
    return;
  }
  
  siteSettingsData = data || null;
  applySiteSettings();
}

// ===== INITIALIZATION =====

async function init() {
  // Setup minimal UX
  setupFadeIn();
  setupSmoothScroll();
  
  // Setup original functionality
  setDefaultWhatsAppLinks();
  
  if (!sb) {
    showState("No se pudo conectar con Supabase. La estructura visual sigue funcionando.");
    return;
  }
  
  showState("Cargando contenido...");
  await Promise.all([loadSiteSettings(), loadProjects()]);
  
  if (!projectsData.length) {
    showState("Todavía no hay proyectos para mostrar.");
  } else {
    hideState();
  }
}

// ===== EVENT LISTENERS =====

if (burgerBtn) burgerBtn.addEventListener("click", () => switchMobileMenu());
if (modalClose) modalClose.addEventListener("click", closeProjectModal);
if (modal) modal.addEventListener("click", (e) => {
  if (e.target === modal) closeProjectModal();
});
if (moreBtn) moreBtn.addEventListener("click", () => {
  visibleCount += 6;
  renderProjects();
});

window.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal?.classList.contains("isOpen")) {
    closeProjectModal();
  }
});

// Initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Export for global access
window.CIBORG347 = {
  openModal: openProjectModal,
  loadProjects: renderProjects,
  minimal: true
};
