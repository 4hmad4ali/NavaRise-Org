<<<<<<< HEAD
async function loadPartial(targetId, partialPath) {
  const host = document.getElementById(targetId);
  if (!host) return false;

  try {
    const res = await fetch(partialPath, { cache: "no-cache" });
    if (!res.ok) {
      console.error(`Failed to load ${partialPath}:`, res.status);
      host.innerHTML = `<!-- Failed to load ${partialPath} -->`;
      return false;
    }
    host.innerHTML = await res.text();
    return true;
  } catch (err) {
    console.error(`Error loading ${partialPath}:`, err);
    host.innerHTML = `<!-- Error loading ${partialPath} -->`;
    return false;
  }
}

function bindHeaderInteractions() {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");

  if (!btn || !nav) return;

  // Prevent multiple listeners if header is reloaded
  if (btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";

  const closeMenu = () => {
    nav.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const willOpen = nav.classList.contains("hidden"); // currently hidden -> will open
    nav.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  };

  btn.addEventListener("click", toggleMenu);

  // Close menu when clicking any link
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Close on Escape (bind once globally)
  if (!document.body.dataset.escapeBound) {
    document.body.dataset.escapeBound = "1";
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
}

function markActiveNavLink() {
  // Handle "/" as index.html
  const current = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nr-navlink").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("is-active");
  });
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", async () => {
  // ✅ Use RELATIVE paths (works everywhere)
  const headerLoaded = await loadPartial("siteHeader", "partials/header.html");
  if (headerLoaded) {
    bindHeaderInteractions();
    markActiveNavLink();
  }

  const footerLoaded = await loadPartial("siteFooter", "partials/footer.html");
  if (footerLoaded) {
    setFooterYear();
  }
});
=======
async function loadPartial(targetId, partialPath) {
  const host = document.getElementById(targetId);
  if (!host) return false;

  try {
    const res = await fetch(partialPath, { cache: "no-cache" });
    if (!res.ok) {
      console.error(`Failed to load ${partialPath}:`, res.status);
      host.innerHTML = `<!-- Failed to load ${partialPath} -->`;
      return false;
    }
    host.innerHTML = await res.text();
    return true;
  } catch (err) {
    console.error(`Error loading ${partialPath}:`, err);
    host.innerHTML = `<!-- Error loading ${partialPath} -->`;
    return false;
  }
}

function bindHeaderInteractions() {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");

  if (!btn || !nav) return;

  // Prevent multiple listeners if header is reloaded
  if (btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";

  const closeMenu = () => {
    nav.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const willOpen = nav.classList.contains("hidden"); // currently hidden -> will open
    nav.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  };

  btn.addEventListener("click", toggleMenu);

  // Close menu when clicking any link
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Close on Escape (bind once globally)
  if (!document.body.dataset.escapeBound) {
    document.body.dataset.escapeBound = "1";
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
}

function markActiveNavLink() {
  // Handle "/" as index.html
  const current = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nr-navlink").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("is-active");
  });
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", async () => {
  // ✅ Use RELATIVE paths (works everywhere)
  const headerLoaded = await loadPartial("siteHeader", "partials/header.html");
  if (headerLoaded) {
    bindHeaderInteractions();
    markActiveNavLink();
  }

  const footerLoaded = await loadPartial("siteFooter", "partials/footer.html");
  if (footerLoaded) {
    setFooterYear();
  }
});
>>>>>>> 5e8b220 (Initial commit)
