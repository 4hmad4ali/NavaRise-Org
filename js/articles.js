// js/articles.js

let NR_ARTICLES_STATE = { filter: "all", query: "" };

function aSafe(v) { return (v ?? "").toString(); }

function articleCard(article) {
  const cover = aSafe(article.cover);
  const media = cover
    ? `<img src="${cover}" alt="${aSafe(article.title)}" class="nr-acover" loading="lazy" />`
    : `<div class="nr-acover nr-acover--ph">Cover</div>`;

  return `
    <article class="nr-acard" data-cat="${article.category}" data-search="${(aSafe(article.title)+' '+aSafe(article.excerpt)).toLowerCase()}">
      <a href="article.html?slug=${encodeURIComponent(article.slug)}" class="block">
        <div class="nr-amedia">${media}</div>

        <div class="p-4">
          <div class="flex items-center justify-between gap-2">
            <span class="nr-abadge">${aSafe(article.categoryLabel)}</span>
            <span class="text-xs text-slate-500">${aSafe(article.readTime)}</span>
          </div>

          <h3 class="mt-3 font-black text-lg leading-8">${aSafe(article.title)}</h3>
          <p class="mt-2 text-sm text-slate-600 leading-7">${aSafe(article.excerpt)}</p>

          <div class="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>${aSafe(article.author)}</span>
            <span dir="ltr">${aSafe(article.date)}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderArticles() {
  const grid = document.getElementById("articlesGrid");
  const empty = document.getElementById("articlesEmpty");
  const all = window.NR_DATA?.articles || [];
  if (!grid) return;

  const q = NR_ARTICLES_STATE.query.trim().toLowerCase();
  const f = NR_ARTICLES_STATE.filter;

  const filtered = all.filter(a => {
    const matchesFilter = (f === "all") ? true : a.category === f;
    const matchesQuery = q
      ? ((aSafe(a.title) + " " + aSafe(a.excerpt)).toLowerCase().includes(q))
      : true;
    return matchesFilter && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");
  grid.innerHTML = filtered.map(articleCard).join("");
}

function setActiveChip(value) {
  document.querySelectorAll("[data-afilter]").forEach(btn => {
    btn.classList.toggle("is-active", btn.getAttribute("data-afilter") === value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-afilter]").forEach(btn => {
    btn.addEventListener("click", () => {
      NR_ARTICLES_STATE.filter = btn.getAttribute("data-afilter") || "all";
      setActiveChip(NR_ARTICLES_STATE.filter);
      renderArticles();
    });
  });

  const input = document.getElementById("articleSearch");
  if (input) {
    input.addEventListener("input", () => {
      NR_ARTICLES_STATE.query = input.value || "";
      renderArticles();
    });
  }

  renderArticles();
});
