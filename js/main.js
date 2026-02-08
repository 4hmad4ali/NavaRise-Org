

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
 
  const current = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nr-navlink").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("is-active");
  });
}


