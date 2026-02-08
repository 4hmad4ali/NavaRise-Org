function getPrograms() {
  const all = (window.NR_DATA?.programs || []);
  return {
    completed: all.filter(p => p.status === "done"),
    upcoming: all.filter(p => p.status === "soon")
  };
}

function badgeHtml(type, status) {
  const typeBadge =
    type === "classes"
      ? `<span class="nr-badge nr-badge--class">Class</span>`
      : type === "webinars"
      ? `<span class="nr-badge nr-badge--webinar">Webinar</span>`
      : `<span class="nr-badge nr-badge--webinar">Contest</span>`;

  const statusBadge =
    status === "done"
      ? `<span class="nr-badge nr-badge--done">Completed</span>`
      : `<span class="nr-badge nr-badge--soon">Starting Soon</span>`;

  return `<div class="flex flex-wrap gap-2">${typeBadge}${statusBadge}</div>`;
}


function programCard(program) {
  const isUpcoming = program.status === "soon";

  const forms = window.NR_DATA?.googleForms || {};
  const googleFormUrl =
    program.form && forms[program.form] ? forms[program.form] : (forms.default || "#");

  // Upcoming -> Register (Google Form), Completed -> Details page
  const primaryLabel = isUpcoming ? "Register" : "Details";
  const primaryHref  = isUpcoming
    ? googleFormUrl
    : `program-details.html?slug=${encodeURIComponent(program.slug)}`;

  const primaryTarget = isUpcoming ? ` target="_blank" rel="noopener"` : "";

  return `
    <article class="nr-card" data-type="${program.type}" data-title="${(program.title || "").toLowerCase()}">
      <div class="flex items-start justify-between gap-3">
        ${badgeHtml(program.type, program.status)}
        <div class="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center text-slate-600" title="Icon">
          ${
  program.type === "classes"
    ? "🎓"
    : program.type === "webinars"
    ? "🎙️"
    : "🏆"
}

        </div>
      </div>

      <h3 class="mt-4 nr-card-title">${program.title}</h3>
      <p class="mt-2 nr-card-desc">${program.shortDesc || program.desc || ""}</p>

      <div class="nr-card-actions">
        <a class="nr-btn nr-btn--primary flex-1" href="${primaryHref}" ${primaryTarget}>${primaryLabel}</a>
      </div>
    </article>
  `;
}

function renderProgramsPage() {
  const completedGrid = document.getElementById("completedGrid");
  const upcomingGrid  = document.getElementById("upcomingGrid");
  if (!completedGrid || !upcomingGrid) return;

  const { completed, upcoming } = getPrograms();
  completedGrid.innerHTML = completed.map(programCard).join("");
  upcomingGrid.innerHTML  = upcoming.map(programCard).join("");
}

function applyProgramsFilter(filterValue, query) {
  const cards = document.querySelectorAll("[data-type][data-title]");
  const q = (query || "").trim().toLowerCase();

  cards.forEach(card => {
    const type = card.getAttribute("data-type");
    const title = card.getAttribute("data-title") || "";
    const matchesType = (filterValue === "all") ? true : (type === filterValue);
    const matchesQuery = q ? title.includes(q) : true;
    card.style.display = (matchesType && matchesQuery) ? "" : "none";
  });
}

function bindProgramsUI() {
  const chips = document.querySelectorAll(".nr-chip");
  const searchInput = document.getElementById("searchInput");
  let activeFilter = "all";

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      activeFilter = chip.getAttribute("data-filter") || "all";
      applyProgramsFilter(activeFilter, searchInput?.value || "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      applyProgramsFilter(activeFilter, searchInput.value);
    });
  }
}

/* -------- Program Details Page -------- */
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderProgramDetailsPage() {
  const slug = getQueryParam("slug");
  const host = document.getElementById("programDetails");
  if (!host) return;

  const p = (window.NR_DATA?.programs || []).find(x => x.slug === slug);

  if (!p) {
    host.innerHTML = `
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-3xl sm:text-4xl font-black">Program Not Found</h1>
        <p class="mt-3 text-slate-600">The link is incorrect or this program has been removed.</p>
        <a href="programs.html" class="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white font-bold">
          Back to Programs
        </a>
      </div>
    `;
    return;
  }

  const meta = p.meta || {};
  const outcomes = (p.outcomes || []).map(i => `<li class="leading-8 text-slate-700">• ${i}</li>`).join("");

  host.innerHTML = `
    <div class="mx-auto max-w-5xl">
      <div class="text-center">
        <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700">
          ${p.type === "classes" ? "🎓 Class" : "🎙️ Webinar"}
          <span class="mx-1">|</span>
          ${p.status === "done" ? "✅ Completed" : "⏳ Starting Soon"}
        </div>

        <h1 class="mt-5 text-3xl sm:text-5xl font-black tracking-tight">${p.title}</h1>
        <p class="mx-auto mt-3 max-w-3xl text-slate-600 leading-8">${p.shortDesc || ""}</p>
      </div>

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <div class="nr-card lg:col-span-2">
          <h2 class="text-lg font-extrabold">About This Program</h2>
          <p class="mt-3 text-sm text-slate-700 leading-8">${p.longDesc || ""}</p>

          ${outcomes ? `
            <h3 class="mt-6 text-base font-extrabold">Outcomes</h3>
            <ul class="mt-2 text-sm">${outcomes}</ul>
          ` : ""}
        </div>

        <aside class="nr-card">
          <h3 class="text-lg font-extrabold">Quick Info</h3>
          <div class="mt-4 space-y-2 text-sm text-slate-700">
            <div class="flex justify-between"><span>Duration:</span><span class="font-bold">${meta.duration || "—"}</span></div>
            <div class="flex justify-between"><span>Level:</span><span class="font-bold">${meta.level || "—"}</span></div>
            <div class="flex justify-between"><span>Format:</span><span class="font-bold">${meta.format || "—"}</span></div>
           <div class="flex justify-between"><span>${meta.participants ? "Participants:" : "Students:"}</span>
            <span class="font-bold">${meta.participants || meta.students || "—"}</span></div>

          </div>

          <div class="mt-6 space-y-2">
            <a href="programs.html" class="nr-btn nr-btn--primary w-full">Back to Programs</a>
            <a href="contact.html" class="nr-btn w-full">Contact Us</a>
          </div>
        </aside>
      </div>
    </div>
  `;
}

/* -------- Page Router -------- */
document.addEventListener("DOMContentLoaded", () => {
  if (window.NR_PAGE === "programs") {
    renderProgramsPage();
    bindProgramsUI();
  }
  if (window.NR_PAGE === "program_details") {
    renderProgramDetailsPage();
  }
});
