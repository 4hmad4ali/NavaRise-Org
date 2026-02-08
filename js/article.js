
// js/article.js

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function aSafe(v) { return (v ?? "").toString(); }

function renderBlock(block) {
  if (!block) return "";

  if (block.type === "h2") {
    return `<h2 class="mt-8 text-xl sm:text-2xl font-black">${aSafe(block.text)}</h2>`;
  }

  if (block.type === "p") {
    return `<p class="mt-4 text-sm sm:text-base text-slate-700 leading-8">${aSafe(block.text)}</p>`;
  }

  if (block.type === "ul") {
    const items = (block.items || []).map(i => `<li class="leading-8 text-slate-700">• ${aSafe(i)}</li>`).join("");
    return `<ul class="mt-4 text-sm sm:text-base">${items}</ul>`;
  }

  return "";
}

function renderArticlePage() {
  const host = document.getElementById("articleHost");
  if (!host) return;

  const slug = getQueryParam("slug");
  const all = window.NR_DATA?.articles || [];
  const a = all.find(x => x.slug === slug);

  if (!a) {
    host.innerHTML = `
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-3xl sm:text-4xl font-black">Article not found</h1>
        <p class="mt-3 text-slate-600">The link may be incorrect or the article may have been removed.</p>
        <a href="articles.html" class="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white font-bold">Back to Articles</a>
      </div>
    `;
    return;
  }

  const cover = aSafe(a.cover);
  const coverHtml = cover
    ? `<img src="${cover}" alt="${aSafe(a.title)}" class="nr-article-cover" />`
    : `<div class="nr-article-cover nr-article-cover--ph">Cover</div>`;

  const contentHtml = (a.content || []).map(renderBlock).join("");

  host.innerHTML = `
    <article class="mx-auto max-w-4xl">
      <div class="text-center">
        <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700">
          ${aSafe(a.categoryLabel)}
          <span class="mx-1">|</span>
          ${aSafe(a.readTime)}
        </div>

        <h1 class="mt-5 text-3xl sm:text-5xl font-black tracking-tight">${aSafe(a.title)}</h1>
        <p class="mx-auto mt-3 max-w-3xl text-slate-600 leading-8">${aSafe(a.excerpt)}</p>

        <div class="mt-4 text-xs text-slate-500">
          <span>${aSafe(a.author)}</span>
          <span class="mx-2">•</span>
          <span dir="ltr">${aSafe(a.date)}</span>
        </div>
      </div>

      <div class="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/60 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
        ${coverHtml}
      </div>

      <div class="mt-10 nr-card">
        ${contentHtml}
      </div>

      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="articles.html" class="nr-btn nr-btn--primary">Back to Articles</a>
        <a href="contact.html" class="nr-btn">Suggest an Article</a>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", renderArticlePage);
