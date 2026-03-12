const SUPABASE_URL = "https://fhxcumwhgtfirznnznjx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGN1bXdoZ3RmaXJ6bm56bmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5OTYyNzEsImV4cCI6MjA4MzU3MjI3MX0.7z1B099L4yrA9k1JxwvYGCABzqiqYtkUClI3E8wQ2zA";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

/* =========================
   DOM
========================= */
const authBox = document.getElementById("authBox");
const adminBox = document.getElementById("adminBox");

const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const authMsg = document.getElementById("authMsg");
const userEmail = document.getElementById("userEmail");

const navBtns = document.querySelectorAll(".navBtn");
const viewPanels = document.querySelectorAll(".viewPanel");
const quickNewProjectBtn = document.getElementById("quickNewProjectBtn");

/* Dashboard */
const dashboardRefreshBtn = document.getElementById("dashboardRefreshBtn");
const dashboardNewBtn = document.getElementById("dashboardNewBtn");
const dashboardSeeProjectsBtn = document.getElementById("dashboardSeeProjectsBtn");
const statProjects = document.getElementById("statProjects");
const statActive = document.getElementById("statActive");
const statHighlight = document.getElementById("statHighlight");
const statHome = document.getElementById("statHome");
const statPortfolio = document.getElementById("statPortfolio");
const statCategories = document.getElementById("statCategories");
const dashboardRecentList = document.getElementById("dashboardRecentList");

/* Projects */
const projectsRefreshBtn = document.getElementById("projectsRefreshBtn");
const projectsNewBtn = document.getElementById("projectsNewBtn");
const projectSearchInput = document.getElementById("projectSearchInput");
const projectCategoryFilter = document.getElementById("projectCategoryFilter");
const projectTypeFilter = document.getElementById("projectTypeFilter");
const projectStatusFilter = document.getElementById("projectStatusFilter");
const projectsMsg = document.getElementById("projectsMsg");
const projectsList = document.getElementById("projectsList");

/* Project form */
const projectFormTitle = document.getElementById("projectFormTitle");
const projectFormResetBtn = document.getElementById("projectFormResetBtn");
const projectImageUrlInput = document.getElementById("projectImageUrlInput");
const projectPreviewImg = document.getElementById("projectPreviewImg");
const projectTitleInput = document.getElementById("projectTitleInput");
const projectDemoUrlInput = document.getElementById("projectDemoUrlInput");
const projectCategorySelect = document.getElementById("projectCategorySelect");
const projectTypeSelect = document.getElementById("projectTypeSelect");
const projectShortDescInput = document.getElementById("projectShortDescInput");
const projectActiveInput = document.getElementById("projectActiveInput");
const projectHighlightInput = document.getElementById("projectHighlightInput");
const projectFeaturedHomeInput = document.getElementById("projectFeaturedHomeInput");
const projectFeaturedPortfolioInput = document.getElementById("projectFeaturedPortfolioInput");
const projectAdvancedToggleBtn = document.getElementById("projectAdvancedToggleBtn");
const projectAdvancedBox = document.getElementById("projectAdvancedBox");
const projectFullDescInput = document.getElementById("projectFullDescInput");
const projectPreviewTypeSelect = document.getElementById("projectPreviewTypeSelect");
const projectOrderInput = document.getElementById("projectOrderInput");
const projectSaveBtn = document.getElementById("projectSaveBtn");
const projectDeleteBtn = document.getElementById("projectDeleteBtn");
const projectFormMsg = document.getElementById("projectFormMsg");

/* Categories */
const categoriesRefreshBtn = document.getElementById("categoriesRefreshBtn");
const categoryNameInput = document.getElementById("categoryNameInput");
const categorySlugInput = document.getElementById("categorySlugInput");
const categoryOrderInput = document.getElementById("categoryOrderInput");
const categoryActiveInput = document.getElementById("categoryActiveInput");
const categorySaveBtn = document.getElementById("categorySaveBtn");
const categoryResetBtn = document.getElementById("categoryResetBtn");
const categoriesMsg = document.getElementById("categoriesMsg");
const categoriesList = document.getElementById("categoriesList");

/* Site content */
const siteContentRefreshBtn = document.getElementById("siteContentRefreshBtn");
const siteContentSelect = document.getElementById("siteContentSelect");
const siteContentTitleInput = document.getElementById("siteContentTitleInput");
const siteContentSubtitleInput = document.getElementById("siteContentSubtitleInput");
const siteContentBodyInput = document.getElementById("siteContentBodyInput");
const siteContentImageUrlInput = document.getElementById("siteContentImageUrlInput");
const siteContentCtaLabelInput = document.getElementById("siteContentCtaLabelInput");
const siteContentCtaUrlInput = document.getElementById("siteContentCtaUrlInput");
const siteContentOrderInput = document.getElementById("siteContentOrderInput");
const siteContentActiveInput = document.getElementById("siteContentActiveInput");
const siteContentSaveBtn = document.getElementById("siteContentSaveBtn");
const siteContentMsg = document.getElementById("siteContentMsg");

/* FAQs */
const faqsRefreshBtn = document.getElementById("faqsRefreshBtn");
const faqQuestionInput = document.getElementById("faqQuestionInput");
const faqAnswerInput = document.getElementById("faqAnswerInput");
const faqOrderInput = document.getElementById("faqOrderInput");
const faqActiveInput = document.getElementById("faqActiveInput");
const faqSaveBtn = document.getElementById("faqSaveBtn");
const faqResetBtn = document.getElementById("faqResetBtn");
const faqsMsg = document.getElementById("faqsMsg");
const faqsList = document.getElementById("faqsList");

/* =========================
   STATE
========================= */
let currentView = "dashboard";
let categoriesData = [];
let projectsData = [];
let faqsData = [];
let siteContentData = [];

let editingProjectId = null;
let editingCategoryId = null;
let editingFaqId = null;

/* =========================
   HELPERS
========================= */
function setAuthMsg(msg = "") {
  authMsg.textContent = msg;
}
function setProjectsMsg(msg = "") {
  projectsMsg.textContent = msg;
}
function setProjectFormMsg(msg = "") {
  projectFormMsg.textContent = msg;
}
function setCategoriesMsg(msg = "") {
  categoriesMsg.textContent = msg;
}
function setFaqsMsg(msg = "") {
  faqsMsg.textContent = msg;
}
function setSiteContentMsg(msg = "") {
  siteContentMsg.textContent = msg;
}

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function boolText(v) {
  return v ? "Sí" : "No";
}

function findCategoryName(categoryId) {
  return categoriesData.find(c => c.id === categoryId)?.name || "Sin categoría";
}

function formatDate(date) {
  try {
    return new Date(date).toLocaleString("es-AR");
  } catch {
    return date || "";
  }
}

function switchView(view) {
  currentView = view;

  navBtns.forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.view === view);
  });

  viewPanels.forEach(panel => {
    panel.style.display = panel.dataset.panel === view ? "" : "none";
  });
}

function fillCategorySelects() {
  const activeCats = categoriesData
    .slice()
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  const opts = [`<option value="">Elegir...</option>`]
    .concat(
      activeCats.map(cat => `<option value="${cat.id}">${escapeHtml(cat.name)}</option>`)
    )
    .join("");

  projectCategorySelect.innerHTML = opts;

  const filterOpts = [`<option value="__all__">Todas</option>`]
    .concat(
      activeCats.map(cat => `<option value="${cat.id}">${escapeHtml(cat.name)}</option>`)
    )
    .join("");

  projectCategoryFilter.innerHTML = filterOpts;
}

function fillSiteContentSelect() {
  const opts = [`<option value="">Elegir bloque...</option>`]
    .concat(
      siteContentData
        .slice()
        .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0))
        .map(item => `<option value="${item.id}">${escapeHtml(item.key)}</option>`)
    )
    .join("");

  siteContentSelect.innerHTML = opts;
}

function updateDashboardStats() {
  statProjects.textContent = String(projectsData.length);
  statActive.textContent = String(projectsData.filter(p => p.active).length);
  statHighlight.textContent = String(projectsData.filter(p => p.highlight).length);
  statHome.textContent = String(projectsData.filter(p => p.featured_home).length);
  statPortfolio.textContent = String(projectsData.filter(p => p.featured_portfolio).length);
  statCategories.textContent = String(categoriesData.filter(c => c.active).length);
}

function renderDashboardRecent() {
  const list = projectsData
    .slice()
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 6);

  if (!list.length) {
    dashboardRecentList.innerHTML = `<div class="emptyState">Todavía no hay proyectos cargados.</div>`;
    return;
  }

  dashboardRecentList.innerHTML = list.map(project => {
    return `
      <article class="listCard">
        <div class="listCard__thumb">
          <img src="${escapeHtml(project.image_url)}" alt="${escapeHtml(project.title)}" />
        </div>

        <div class="listCard__body">
          <div class="listCard__title">${escapeHtml(project.title)}</div>
          <div class="listCard__meta">
            ${escapeHtml(findCategoryName(project.category_id))} · ${escapeHtml(project.solution_type)}
          </div>
          <div class="listCard__meta">
            ${project.active ? "Activo" : "Inactivo"} · ${project.highlight ? "Destacado" : "Normal"}
          </div>
        </div>

        <div class="listCard__actions">
          <button class="btn btn--ghost btn--small" type="button" data-edit-project="${project.id}">Editar</button>
        </div>
      </article>
    `;
  }).join("");

  dashboardRecentList.querySelectorAll("[data-edit-project]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-edit-project");
      openProjectForEdit(id);
    });
  });
}

function renderProjectsList() {
  const q = (projectSearchInput.value || "").trim().toLowerCase();
  const cat = projectCategoryFilter.value;
  const type = projectTypeFilter.value;
  const status = projectStatusFilter.value;

  let list = projectsData.slice();

  if (q) {
    list = list.filter(project => {
      const hay = `${project.title} ${project.short_description} ${project.full_description || ""}`.toLowerCase();
      return hay.includes(q);
    });
  }

  if (cat !== "__all__") {
    list = list.filter(project => project.category_id === cat);
  }

  if (type !== "__all__") {
    list = list.filter(project => project.solution_type === type);
  }

  if (status === "active") {
    list = list.filter(project => project.active);
  } else if (status === "inactive") {
    list = list.filter(project => !project.active);
  } else if (status === "highlight") {
    list = list.filter(project => project.highlight);
  }

  list.sort((a, b) => {
    const ai = a.order_index ?? 0;
    const bi = b.order_index ?? 0;
    if (ai !== bi) return ai - bi;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  if (!list.length) {
    projectsList.innerHTML = `<div class="emptyState">No hay proyectos para mostrar con esos filtros.</div>`;
    return;
  }

  projectsList.innerHTML = list.map(project => {
    return `
      <article class="listCard">
        <div class="listCard__thumb">
          <img src="${escapeHtml(project.image_url)}" alt="${escapeHtml(project.title)}" />
        </div>

        <div class="listCard__body">
          <div class="listCard__title">${escapeHtml(project.title)}</div>
          <div class="listCard__meta">
            ${escapeHtml(findCategoryName(project.category_id))} · ${escapeHtml(project.solution_type)}
          </div>
          <div class="listCard__meta">
            Activo: ${boolText(project.active)} · Destacado: ${boolText(project.highlight)} · Home: ${boolText(project.featured_home)} · Portfolio: ${boolText(project.featured_portfolio)}
          </div>
          <div class="listCard__meta">
            Orden: ${project.order_index ?? 0} · ${formatDate(project.created_at)}
          </div>
        </div>

        <div class="listCard__actions">
          <button class="btn btn--ghost btn--small" type="button" data-edit-project="${project.id}">Editar</button>
          <button class="btn btn--ghost btn--small" type="button" data-toggle-project="${project.id}">
            ${project.active ? "Desactivar" : "Activar"}
          </button>
          <button class="btn btn--danger btn--small" type="button" data-delete-project="${project.id}">Borrar</button>
        </div>
      </article>
    `;
  }).join("");

  projectsList.querySelectorAll("[data-edit-project]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-edit-project");
      openProjectForEdit(id);
    });
  });

  projectsList.querySelectorAll("[data-toggle-project]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-toggle-project");
      const project = projectsData.find(p => p.id === id);
      if (!project) return;
      await toggleProjectActive(project);
    });
  });

  projectsList.querySelectorAll("[data-delete-project]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-delete-project");
      const project = projectsData.find(p => p.id === id);
      if (!project) return;
      await deleteProject(project);
    });
  });
}

function resetProjectForm() {
  editingProjectId = null;
  projectFormTitle.textContent = "Nueva web";
  projectSaveBtn.textContent = "Publicar";
  projectDeleteBtn.style.display = "none";

  projectImageUrlInput.value = "";
  projectPreviewImg.removeAttribute("src");
  projectTitleInput.value = "";
  projectDemoUrlInput.value = "";
  projectCategorySelect.value = "";
  projectTypeSelect.value = "";
  projectShortDescInput.value = "";
  projectFullDescInput.value = "";
  projectPreviewTypeSelect.value = "image";
  projectOrderInput.value = "0";
  projectActiveInput.checked = true;
  projectHighlightInput.checked = false;
  projectFeaturedHomeInput.checked = false;
  projectFeaturedPortfolioInput.checked = false;

  projectAdvancedBox.style.display = "none";
  projectAdvancedToggleBtn.textContent = "Abrir ajustes avanzados";
  setProjectFormMsg("");
}

function fillProjectForm(project) {
  editingProjectId = project.id;
  projectFormTitle.textContent = "Editar web";
  projectSaveBtn.textContent = "Guardar cambios";
  projectDeleteBtn.style.display = "";

  projectImageUrlInput.value = project.image_url || "";
  if (project.image_url) projectPreviewImg.src = project.image_url;
  projectTitleInput.value = project.title || "";
  projectDemoUrlInput.value = project.demo_url || "";
  projectCategorySelect.value = project.category_id || "";
  projectTypeSelect.value = project.solution_type || "";
  projectShortDescInput.value = project.short_description || "";
  projectFullDescInput.value = project.full_description || "";
  projectPreviewTypeSelect.value = project.preview_type || "image";
  projectOrderInput.value = String(project.order_index ?? 0);
  projectActiveInput.checked = !!project.active;
  projectHighlightInput.checked = !!project.highlight;
  projectFeaturedHomeInput.checked = !!project.featured_home;
  projectFeaturedPortfolioInput.checked = !!project.featured_portfolio;

  setProjectFormMsg("");
}

function openProjectForEdit(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  fillProjectForm(project);
  switchView("new-project");
}

function renderCategoriesList() {
  const list = categoriesData
    .slice()
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  if (!list.length) {
    categoriesList.innerHTML = `<div class="emptyState">No hay categorías cargadas.</div>`;
    return;
  }

  categoriesList.innerHTML = list.map(cat => {
    return `
      <article class="listCard listCard--compact">
        <div class="listCard__body">
          <div class="listCard__title">${escapeHtml(cat.name)}</div>
          <div class="listCard__meta">Slug: ${escapeHtml(cat.slug)}</div>
          <div class="listCard__meta">Activa: ${boolText(cat.active)} · Orden: ${cat.order_index ?? 0}</div>
        </div>

        <div class="listCard__actions">
          <button class="btn btn--ghost btn--small" type="button" data-edit-category="${cat.id}">Editar</button>
          <button class="btn btn--ghost btn--small" type="button" data-toggle-category="${cat.id}">
            ${cat.active ? "Desactivar" : "Activar"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  categoriesList.querySelectorAll("[data-edit-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-edit-category");
      const cat = categoriesData.find(c => c.id === id);
      if (!cat) return;
      editingCategoryId = cat.id;
      categoryNameInput.value = cat.name || "";
      categorySlugInput.value = cat.slug || "";
      categoryOrderInput.value = String(cat.order_index ?? 0);
      categoryActiveInput.checked = !!cat.active;
      setCategoriesMsg("");
    });
  });

  categoriesList.querySelectorAll("[data-toggle-category]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-toggle-category");
      const cat = categoriesData.find(c => c.id === id);
      if (!cat) return;

      const { error } = await sb
        .from("categories")
        .update({
          active: !cat.active,
          updated_at: new Date().toISOString()
        })
        .eq("id", id);

      if (error) {
        setCategoriesMsg(`No se pudo actualizar la categoría: ${error.message}`);
        return;
      }

      setCategoriesMsg("Categoría actualizada.");
      await loadCategories();
      await loadProjects();
    });
  });
}

function resetCategoryForm() {
  editingCategoryId = null;
  categoryNameInput.value = "";
  categorySlugInput.value = "";
  categoryOrderInput.value = "0";
  categoryActiveInput.checked = true;
  setCategoriesMsg("");
}

function renderFaqsList() {
  const list = faqsData
    .slice()
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  if (!list.length) {
    faqsList.innerHTML = `<div class="emptyState">No hay FAQs cargadas.</div>`;
    return;
  }

  faqsList.innerHTML = list.map(faq => {
    return `
      <article class="listCard listCard--compact">
        <div class="listCard__body">
          <div class="listCard__title">${escapeHtml(faq.question)}</div>
          <div class="listCard__meta">${escapeHtml(faq.answer)}</div>
          <div class="listCard__meta">Activa: ${boolText(faq.active)} · Orden: ${faq.order_index ?? 0}</div>
        </div>

        <div class="listCard__actions">
          <button class="btn btn--ghost btn--small" type="button" data-edit-faq="${faq.id}">Editar</button>
          <button class="btn btn--ghost btn--small" type="button" data-toggle-faq="${faq.id}">
            ${faq.active ? "Desactivar" : "Activar"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  faqsList.querySelectorAll("[data-edit-faq]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-edit-faq");
      const faq = faqsData.find(f => f.id === id);
      if (!faq) return;

      editingFaqId = faq.id;
      faqQuestionInput.value = faq.question || "";
      faqAnswerInput.value = faq.answer || "";
      faqOrderInput.value = String(faq.order_index ?? 0);
      faqActiveInput.checked = !!faq.active;
      setFaqsMsg("");
    });
  });

  faqsList.querySelectorAll("[data-toggle-faq]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-toggle-faq");
      const faq = faqsData.find(f => f.id === id);
      if (!faq) return;

      const { error } = await sb
        .from("faqs")
        .update({
          active: !faq.active,
          updated_at: new Date().toISOString()
        })
        .eq("id", id);

      if (error) {
        setFaqsMsg(`No se pudo actualizar la FAQ: ${error.message}`);
        return;
      }

      setFaqsMsg("FAQ actualizada.");
      await loadFaqs();
    });
  });
}

function resetFaqForm() {
  editingFaqId = null;
  faqQuestionInput.value = "";
  faqAnswerInput.value = "";
  faqOrderInput.value = "0";
  faqActiveInput.checked = true;
  setFaqsMsg("");
}

function fillSiteContentFormById(id) {
  const item = siteContentData.find(x => x.id === id);
  if (!item) return;

  siteContentTitleInput.value = item.title || "";
  siteContentSubtitleInput.value = item.subtitle || "";
  siteContentBodyInput.value = item.content || "";
  siteContentImageUrlInput.value = item.image_url || "";
  siteContentCtaLabelInput.value = item.cta_label || "";
  siteContentCtaUrlInput.value = item.cta_url || "";
  siteContentOrderInput.value = String(item.order_index ?? 0);
  siteContentActiveInput.checked = !!item.active;
  setSiteContentMsg("");
}

/* =========================
   AUTH
========================= */
async function whitelistCheck() {
  const { data } = await sb.auth.getUser();
  const email = data?.user?.email || "";
  if (!email) return { ok: false, reason: "No hay sesión activa." };

  const { data: row, error } = await sb
    .from("admin_users")
    .select("email")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.error(error);
    return { ok: false, reason: "No se pudo verificar admin_users." };
  }

  if (!row?.email) {
    return { ok: false, reason: "Tu email no está autorizado en admin_users." };
  }

  return { ok: true, email };
}

async function guardAdmin() {
  const { data } = await sb.auth.getSession();
  const session = data?.session;

  if (!session) {
    authBox.style.display = "";
    adminBox.style.display = "none";
    userEmail.textContent = "";
    return;
  }

  const check = await whitelistCheck();

  if (!check.ok) {
    setAuthMsg(check.reason);
    await sb.auth.signOut();
    authBox.style.display = "";
    adminBox.style.display = "none";
    userEmail.textContent = "";
    return;
  }

  userEmail.textContent = check.email;
  authBox.style.display = "none";
  adminBox.style.display = "";
  setAuthMsg("");

  await loadAll();
}

loginBtn.addEventListener("click", async () => {
  setAuthMsg("Ingresando...");
  const email = (emailInput.value || "").trim();
  const password = passInput.value || "";

  if (!email || !password) {
    setAuthMsg("Completá email y password.");
    return;
  }

  const { error } = await sb.auth.signInWithPassword({ email, password });

  if (error) {
    console.error(error);
    setAuthMsg(`No autenticado: ${error.message}`);
    return;
  }

  await guardAdmin();
});

logoutBtn.addEventListener("click", async () => {
  await sb.auth.signOut();
  await guardAdmin();
});

sb.auth.onAuthStateChange(() => {
  guardAdmin();
});

/* =========================
   LOADERS
========================= */
async function loadCategories() {
  const { data, error } = await sb
    .from("categories")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error(error);
    setCategoriesMsg(`No se pudieron cargar categorías: ${error.message}`);
    return;
  }

  categoriesData = data || [];
  fillCategorySelects();
  renderCategoriesList();
}

async function loadProjects() {
  const { data, error } = await sb
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    setProjectsMsg(`No se pudieron cargar proyectos: ${error.message}`);
    return;
  }

  projectsData = data || [];
  renderProjectsList();
  updateDashboardStats();
  renderDashboardRecent();
}

async function loadFaqs() {
  const { data, error } = await sb
    .from("faqs")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error(error);
    setFaqsMsg(`No se pudieron cargar FAQs: ${error.message}`);
    return;
  }

  faqsData = data || [];
  renderFaqsList();
}

async function loadSiteContent() {
  const { data, error } = await sb
    .from("site_content")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error(error);
    setSiteContentMsg(`No se pudo cargar site_content: ${error.message}`);
    return;
  }

  siteContentData = data || [];
  fillSiteContentSelect();
}

async function loadAll() {
  await loadCategories();
  await loadProjects();
  await loadFaqs();
  await loadSiteContent();
}

/* =========================
   PROJECTS CRUD
========================= */
projectImageUrlInput.addEventListener("input", () => {
  const value = (projectImageUrlInput.value || "").trim();
  if (value) {
    projectPreviewImg.src = value;
  } else {
    projectPreviewImg.removeAttribute("src");
  }
});

projectAdvancedToggleBtn.addEventListener("click", () => {
  const open = projectAdvancedBox.style.display !== "none";
  projectAdvancedBox.style.display = open ? "none" : "";
  projectAdvancedToggleBtn.textContent = open ? "Abrir ajustes avanzados" : "Cerrar ajustes avanzados";
});

projectFormResetBtn.addEventListener("click", resetProjectForm);
dashboardNewBtn.addEventListener("click", () => {
  resetProjectForm();
  switchView("new-project");
});
projectsNewBtn.addEventListener("click", () => {
  resetProjectForm();
  switchView("new-project");
});
quickNewProjectBtn.addEventListener("click", () => {
  resetProjectForm();
  switchView("new-project");
});

projectSaveBtn.addEventListener("click", async () => {
  setProjectFormMsg("");

  const image_url = (projectImageUrlInput.value || "").trim();
  const title = (projectTitleInput.value || "").trim();
  const demo_url = (projectDemoUrlInput.value || "").trim();
  const category_id = projectCategorySelect.value || null;
  const solution_type = projectTypeSelect.value || "";
  const short_description = (projectShortDescInput.value || "").trim();
  const full_description = (projectFullDescInput.value || "").trim();
  const preview_type = projectPreviewTypeSelect.value || "image";
  const order_index = Number(projectOrderInput.value || 0);
  const active = projectActiveInput.checked;
  const highlight = projectHighlightInput.checked;
  const featured_home = projectFeaturedHomeInput.checked;
  const featured_portfolio = projectFeaturedPortfolioInput.checked;

  if (!image_url) return setProjectFormMsg("Falta la URL de imagen.");
  if (!title) return setProjectFormMsg("Falta el título.");
  if (!demo_url) return setProjectFormMsg("Falta el link demo.");
  if (!category_id) return setProjectFormMsg("Elegí una categoría.");
  if (!solution_type) return setProjectFormMsg("Elegí un tipo de solución.");
  if (!short_description) return setProjectFormMsg("Falta la descripción corta.");

  const payload = {
    image_url,
    title,
    demo_url,
    category_id,
    solution_type,
    short_description,
    full_description: full_description || null,
    preview_type,
    order_index: Number.isNaN(order_index) ? 0 : order_index,
    active,
    highlight,
    featured_home,
    featured_portfolio,
    updated_at: new Date().toISOString()
  };

  if (!editingProjectId) {
    const { error } = await sb
      .from("projects")
      .insert([payload]);

    if (error) {
      console.error(error);
      setProjectFormMsg(`No se pudo publicar: ${error.message}`);
      return;
    }

    setProjectFormMsg("Proyecto publicado.");
  } else {
    const { error } = await sb
      .from("projects")
      .update(payload)
      .eq("id", editingProjectId);

    if (error) {
      console.error(error);
      setProjectFormMsg(`No se pudo guardar: ${error.message}`);
      return;
    }

    setProjectFormMsg("Proyecto actualizado.");
  }

  await loadProjects();
  resetProjectForm();
  switchView("projects");
});

projectDeleteBtn.addEventListener("click", async () => {
  if (!editingProjectId) return;

  const project = projectsData.find(p => p.id === editingProjectId);
  if (!project) return;

  await deleteProject(project);
});

async function toggleProjectActive(project) {
  const { error } = await sb
    .from("projects")
    .update({
      active: !project.active,
      updated_at: new Date().toISOString()
    })
    .eq("id", project.id);

  if (error) {
    console.error(error);
    setProjectsMsg(`No se pudo actualizar el proyecto: ${error.message}`);
    return;
  }

  setProjectsMsg("Proyecto actualizado.");
  await loadProjects();
}

async function deleteProject(project) {
  const ok = confirm(`¿Borrar "${project.title}"?`);
  if (!ok) return;

  const { error } = await sb
    .from("projects")
    .delete()
    .eq("id", project.id);

  if (error) {
    console.error(error);
    setProjectsMsg(`No se pudo borrar el proyecto: ${error.message}`);
    return;
  }

  setProjectsMsg("Proyecto borrado.");
  await loadProjects();
  resetProjectForm();
  switchView("projects");
}

/* =========================
   PROJECT FILTERS
========================= */
projectsRefreshBtn.addEventListener("click", loadProjects);
dashboardRefreshBtn.addEventListener("click", loadAll);
dashboardSeeProjectsBtn.addEventListener("click", () => switchView("projects"));

projectSearchInput.addEventListener("input", renderProjectsList);
projectCategoryFilter.addEventListener("change", renderProjectsList);
projectTypeFilter.addEventListener("change", renderProjectsList);
projectStatusFilter.addEventListener("change", renderProjectsList);

/* =========================
   CATEGORIES CRUD
========================= */
categoryNameInput.addEventListener("input", () => {
  if (!categorySlugInput.dataset.manuallyEdited) {
    categorySlugInput.value = slugify(categoryNameInput.value);
  }
});

categorySlugInput.addEventListener("input", () => {
  categorySlugInput.dataset.manuallyEdited = "true";
});

categoryResetBtn.addEventListener("click", () => {
  categorySlugInput.dataset.manuallyEdited = "";
  resetCategoryForm();
});

categoriesRefreshBtn.addEventListener("click", loadCategories);

categorySaveBtn.addEventListener("click", async () => {
  setCategoriesMsg("");

  const name = (categoryNameInput.value || "").trim();
  const slug = slugify(categorySlugInput.value || categoryNameInput.value);
  const order_index = Number(categoryOrderInput.value || 0);
  const active = categoryActiveInput.checked;

  if (!name) return setCategoriesMsg("Falta el nombre.");
  if (!slug) return setCategoriesMsg("Falta el slug.");

  const payload = {
    name,
    slug,
    order_index: Number.isNaN(order_index) ? 0 : order_index,
    active,
    updated_at: new Date().toISOString()
  };

  if (!editingCategoryId) {
    const { error } = await sb
      .from("categories")
      .insert([payload]);

    if (error) {
      console.error(error);
      setCategoriesMsg(`No se pudo guardar la categoría: ${error.message}`);
      return;
    }

    setCategoriesMsg("Categoría creada.");
  } else {
    const { error } = await sb
      .from("categories")
      .update(payload)
      .eq("id", editingCategoryId);

    if (error) {
      console.error(error);
      setCategoriesMsg(`No se pudo actualizar la categoría: ${error.message}`);
      return;
    }

    setCategoriesMsg("Categoría actualizada.");
  }

  categorySlugInput.dataset.manuallyEdited = "";
  resetCategoryForm();
  await loadCategories();
  await loadProjects();
});

/* =========================
   FAQS CRUD
========================= */
faqsRefreshBtn.addEventListener("click", loadFaqs);
faqResetBtn.addEventListener("click", resetFaqForm);

faqSaveBtn.addEventListener("click", async () => {
  setFaqsMsg("");

  const question = (faqQuestionInput.value || "").trim();
  const answer = (faqAnswerInput.value || "").trim();
  const order_index = Number(faqOrderInput.value || 0);
  const active = faqActiveInput.checked;

  if (!question) return setFaqsMsg("Falta la pregunta.");
  if (!answer) return setFaqsMsg("Falta la respuesta.");

  const payload = {
    question,
    answer,
    order_index: Number.isNaN(order_index) ? 0 : order_index,
    active,
    updated_at: new Date().toISOString()
  };

  if (!editingFaqId) {
    const { error } = await sb
      .from("faqs")
      .insert([payload]);

    if (error) {
      console.error(error);
      setFaqsMsg(`No se pudo guardar la FAQ: ${error.message}`);
      return;
    }

    setFaqsMsg("FAQ creada.");
  } else {
    const { error } = await sb
      .from("faqs")
      .update(payload)
      .eq("id", editingFaqId);

    if (error) {
      console.error(error);
      setFaqsMsg(`No se pudo actualizar la FAQ: ${error.message}`);
      return;
    }

    setFaqsMsg("FAQ actualizada.");
  }

  resetFaqForm();
  await loadFaqs();
});

/* =========================
   SITE CONTENT CRUD
========================= */
siteContentRefreshBtn.addEventListener("click", loadSiteContent);

siteContentSelect.addEventListener("change", () => {
  const id = siteContentSelect.value;
  if (!id) {
    siteContentTitleInput.value = "";
    siteContentSubtitleInput.value = "";
    siteContentBodyInput.value = "";
    siteContentImageUrlInput.value = "";
    siteContentCtaLabelInput.value = "";
    siteContentCtaUrlInput.value = "";
    siteContentOrderInput.value = "0";
    siteContentActiveInput.checked = true;
    setSiteContentMsg("");
    return;
  }

  fillSiteContentFormById(id);
});

siteContentSaveBtn.addEventListener("click", async () => {
  setSiteContentMsg("");

  const id = siteContentSelect.value;
  if (!id) return setSiteContentMsg("Elegí un bloque.");

  const payload = {
    title: (siteContentTitleInput.value || "").trim() || null,
    subtitle: (siteContentSubtitleInput.value || "").trim() || null,
    content: (siteContentBodyInput.value || "").trim() || null,
    image_url: (siteContentImageUrlInput.value || "").trim() || null,
    cta_label: (siteContentCtaLabelInput.value || "").trim() || null,
    cta_url: (siteContentCtaUrlInput.value || "").trim() || null,
    order_index: Number(siteContentOrderInput.value || 0) || 0,
    active: siteContentActiveInput.checked,
    updated_at: new Date().toISOString()
  };

  const { error } = await sb
    .from("site_content")
    .update(payload)
    .eq("id", id);

  if (error) {
    console.error(error);
    setSiteContentMsg(`No se pudo guardar el bloque: ${error.message}`);
    return;
  }

  setSiteContentMsg("Bloque actualizado.");
  await loadSiteContent();
  siteContentSelect.value = id;
  fillSiteContentFormById(id);
});

/* =========================
   NAV
========================= */
navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    switchView(view);
  });
});

/* =========================
   INIT
========================= */
guardAdmin();
