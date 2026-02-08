<<<<<<< HEAD
// js/teachers.js

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function safe(v, fallback = "—") {
  return (v && String(v).trim()) ? v : fallback;
}

function renderBadges(person) {
  const exp = Array.isArray(person.expertise) ? person.expertise : [];
  const first = exp.slice(0, 3).map(x => `<span class="nr-tag">${x}</span>`).join("");
  return first || `<span class="nr-tag">Education</span>`;
}

function profileCard(person) {
  const img = person.photo
    ? `<img src="${person.photo}" alt="${person.name}" class="nr-avatar-img">`
    : `<div class="nr-avatar-fallback">Photo</div>`;

  const linkedin = person.links?.linkedin && person.links.linkedin !== "#"
    ? `<a class="nr-link" href="${person.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`
    : "";

  const email = person.links?.email && person.links.email !== "#"
    ? `<a class="nr-link" href="${person.links.email}">Email</a>`
    : "";

  return `
    <article class="nr-profile" data-role="${person.roleKey}">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-4">
          <div class="nr-avatar">${img}</div>
          <div>
            <div class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              <span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              ${safe(person.roleLabel)}
            </div>
            <h3 class="mt-2 font-black text-lg">${safe(person.name)}</h3>
            <p class="text-xs text-slate-500 mt-0.5">${safe(person.academicPosition)}</p>
          </div>
        </div>

        <div class="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center text-slate-600">
          ${person.roleKey === "teacher" ? "🎓" : "👤"}
        </div>
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        ${renderBadges(person)}
      </div>

      <div class="mt-4 text-sm text-slate-700 leading-7">
        <div><span class="text-slate-500">Education:</span> <b>${safe(person.education)}</b></div>
        <div class="mt-2"><span class="text-slate-500">Contribution at NavaRise:</span> ${safe(person.contribution)}</div>
      </div>

      ${person.bio ? `<p class="mt-3 text-sm text-slate-600 leading-7">${person.bio}</p>` : ""}

      <div class="mt-4 flex gap-3 text-sm">
        ${linkedin}
        ${email}
      </div>
    </article>
  `;
}

function mountPeople() {
  const leadershipGrid = document.getElementById("leadershipGrid");
  const teachersGrid = document.getElementById("teachersGrid");
  const data = window.NR_DATA?.team;

  if (!leadershipGrid || !teachersGrid || !data) return;

  leadershipGrid.innerHTML = (data.leadership || []).map(profileCard).join("");
  teachersGrid.innerHTML = (data.teachers || []).map(profileCard).join("");
}

function applyRoleFilter(roleKey) {
  const cards = document.querySelectorAll("[data-role]");
  cards.forEach(card => {
    const role = card.getAttribute("data-role");
    card.style.display = (roleKey === "all" || role === roleKey) ? "" : "none";
  });
}

function bindRoleFilters() {
  const chips = document.querySelectorAll("[data-role-filter]");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const roleKey = chip.getAttribute("data-role-filter") || "all";
      applyRoleFilter(roleKey);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountPeople();
  bindRoleFilters();
});
=======
// js/teachers.js

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function safe(v, fallback = "—") {
  return (v && String(v).trim()) ? v : fallback;
}

function renderBadges(person) {
  const exp = Array.isArray(person.expertise) ? person.expertise : [];
  const first = exp.slice(0, 3).map(x => `<span class="nr-tag">${x}</span>`).join("");
  return first || `<span class="nr-tag">Education</span>`;
}

function profileCard(person) {
  const img = person.photo
    ? `<img src="${person.photo}" alt="${person.name}" class="nr-avatar-img">`
    : `<div class="nr-avatar-fallback">Photo</div>`;

  const linkedin = person.links?.linkedin && person.links.linkedin !== "#"
    ? `<a class="nr-link" href="${person.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`
    : "";

  const email = person.links?.email && person.links.email !== "#"
    ? `<a class="nr-link" href="${person.links.email}">Email</a>`
    : "";

  return `
    <article class="nr-profile" data-role="${person.roleKey}">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-4">
          <div class="nr-avatar">${img}</div>
          <div>
            <div class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              <span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              ${safe(person.roleLabel)}
            </div>
            <h3 class="mt-2 font-black text-lg">${safe(person.name)}</h3>
            <p class="text-xs text-slate-500 mt-0.5">${safe(person.academicPosition)}</p>
          </div>
        </div>

        <div class="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center text-slate-600">
          ${person.roleKey === "teacher" ? "🎓" : "👤"}
        </div>
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        ${renderBadges(person)}
      </div>

      <div class="mt-4 text-sm text-slate-700 leading-7">
        <div><span class="text-slate-500">Education:</span> <b>${safe(person.education)}</b></div>
        <div class="mt-2"><span class="text-slate-500">Contribution at NavaRise:</span> ${safe(person.contribution)}</div>
      </div>

      ${person.bio ? `<p class="mt-3 text-sm text-slate-600 leading-7">${person.bio}</p>` : ""}

      <div class="mt-4 flex gap-3 text-sm">
        ${linkedin}
        ${email}
      </div>
    </article>
  `;
}

function mountPeople() {
  const leadershipGrid = document.getElementById("leadershipGrid");
  const teachersGrid = document.getElementById("teachersGrid");
  const data = window.NR_DATA?.team;

  if (!leadershipGrid || !teachersGrid || !data) return;

  leadershipGrid.innerHTML = (data.leadership || []).map(profileCard).join("");
  teachersGrid.innerHTML = (data.teachers || []).map(profileCard).join("");
}

function applyRoleFilter(roleKey) {
  const cards = document.querySelectorAll("[data-role]");
  cards.forEach(card => {
    const role = card.getAttribute("data-role");
    card.style.display = (roleKey === "all" || role === roleKey) ? "" : "none";
  });
}

function bindRoleFilters() {
  const chips = document.querySelectorAll("[data-role-filter]");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const roleKey = chip.getAttribute("data-role-filter") || "all";
      applyRoleFilter(roleKey);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountPeople();
  bindRoleFilters();
});
>>>>>>> 5e8b220 (Initial commit)
