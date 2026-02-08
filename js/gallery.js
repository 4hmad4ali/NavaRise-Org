// js/gallery.js

let NR_GALLERY_STATE = {
  filter: "all",
  query: "",
  visible: [],
  activeIndex: 0
};

function gSafe(v) {
  return (v ?? "").toString();
}

function buildGalleryCard(item, index) {
  const title = gSafe(item.title);
  const caption = gSafe(item.caption);
  const src = gSafe(item.src);

  const media = src
    ? `<img src="${src}" alt="${title}" loading="lazy" class="nr-gimg" />`
    : `<div class="nr-gplaceholder">Image</div>`;

  return `
    <article class="nr-gcard" data-cat="${gSafe(item.category)}" data-title="${title.toLowerCase()}" data-index="${index}">
      <button type="button" class="nr-gbtn" aria-label="Open image">
        <div class="nr-gmedia">${media}</div>
        <div class="nr-gmeta">
          <div class="font-extrabold">${title}</div>
          <div class="text-xs text-slate-600 mt-1 leading-6">${caption}</div>
        </div>
      </button>
    </article>
  `;
}

function applyGalleryFilter(allItems) {
  const q = NR_GALLERY_STATE.query.trim().toLowerCase();
  const f = NR_GALLERY_STATE.filter;

  const filtered = allItems.filter((item) => {
    const inCat = f === "all" ? true : item.category === f;
    const inSearch = q
      ? (gSafe(item.title).toLowerCase().includes(q) ||
         gSafe(item.caption).toLowerCase().includes(q))
      : true;
    return inCat && inSearch;
  });

  NR_GALLERY_STATE.visible = filtered;
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const empty = document.getElementById("galleryEmpty");
  const all = window.NR_DATA?.gallery || [];

  if (!grid) return;

  applyGalleryFilter(all);
  const items = NR_GALLERY_STATE.visible;

  if (items.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");
  grid.innerHTML = items.map((it, idx) => buildGalleryCard(it, idx)).join("");
}

function setActiveChip(role) {
  document.querySelectorAll("[data-gfilter]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-gfilter") === role);
  });
}

/* ---------- Lightbox ---------- */
function openLightbox(index) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const cap = document.getElementById("lightboxCaption");

  if (!lb || !img || !title || !cap) return;

  NR_GALLERY_STATE.activeIndex = index;

  const item = NR_GALLERY_STATE.visible[index];
  if (!item) return;

  img.src = item.src || "";
  img.alt = item.title || "";

  // Debug help: see broken image paths
  img.onerror = () => console.log("Lightbox image failed to load:", img.src);

  title.textContent = item.title || "";
  cap.textContent = item.caption || "";

  lb.classList.remove("hidden");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!lb) return;

  lb.classList.add("hidden");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // Optional cleanup
  if (img) {
    img.src = "";
    img.alt = "";
    img.onerror = null;
  }
}

function showNext(delta) {
  const len = NR_GALLERY_STATE.visible.length;
  if (!len) return;

  NR_GALLERY_STATE.activeIndex =
    (NR_GALLERY_STATE.activeIndex + delta + len) % len;

  openLightbox(NR_GALLERY_STATE.activeIndex);
}

/* ---------- Bind UI ---------- */
function bindGalleryUI() {
  // Filter chips
  document.querySelectorAll("[data-gfilter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      NR_GALLERY_STATE.filter = btn.getAttribute("data-gfilter") || "all";
      setActiveChip(NR_GALLERY_STATE.filter);
      renderGallery();
    });
  });

  // Search input
  const input = document.getElementById("gallerySearch");
  if (input) {
    input.addEventListener("input", () => {
      NR_GALLERY_STATE.query = input.value || "";
      renderGallery();
    });
  }

  // ✅ Grid click handler (bind ONCE, delegated)
  const grid = document.getElementById("galleryGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".nr-gcard");
      if (!card) return;
      const index = Number(card.getAttribute("data-index") || "0");
      openLightbox(index);
    });
  }
}

function bindLightboxUI() {
  const lb = document.getElementById("lightbox");
  const panel = lb?.querySelector(".nr-lightbox-panel");
  if (!lb || !panel) return;

  // Close buttons (backdrop + X)
  lb.querySelectorAll("[data-lb-close]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
    });
  });

  // Click outside panel closes
  lb.addEventListener("click", (e) => {
    if (!panel.contains(e.target)) closeLightbox();
  });

  // Prev/Next
  const prev = document.getElementById("lbPrev");
  const next = document.getElementById("lbNext");
  if (prev) prev.addEventListener("click", (e) => { e.stopPropagation(); showNext(-1); });
  if (next) next.addEventListener("click", (e) => { e.stopPropagation(); showNext(1); });

  // ESC + arrows
  document.addEventListener("keydown", (e) => {
    const isOpen = !lb.classList.contains("hidden");
    if (!isOpen) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showNext(-1);
    if (e.key === "ArrowRight") showNext(1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  closeLightbox();     // ensure hidden on load
  bindGalleryUI();     // binds once
  bindLightboxUI();    // binds once
  renderGallery();     // renders cards
});
