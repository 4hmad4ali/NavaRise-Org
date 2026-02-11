

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
// Entrance animation (matches your content structure)
  gsap.from(".hero-left > *", {
    y: 18,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.08
  });

  // Soft floating blobs
  gsap.to(".hero-blob", { y: 18, x: -10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".hero-blob2", { y: -16, x: 12, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" });

  // 3D tilt card (only on desktop where it exists)
  const wrap = document.querySelector(".tilt-wrap");
  const card = document.querySelector(".tilt-card");

  if (wrap && card) {
    gsap.from(card, { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.15 });

    wrap.addEventListener("mousemove", (e) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const rotY = ((x / r.width) - 0.5) * 16;
      const rotX = -(((y / r.height) - 0.5) * 16);

      gsap.to(card, { rotateX: rotX, rotateY: rotY, duration: 0.35, ease: "power2.out" });
    });

    wrap.addEventListener("mouseleave", () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "elastic.out(1, 0.35)" });
    });
  }
/* about gsap */
 gsap.registerPlugin(ScrollTrigger);

  // Header animation
  gsap.from(".goals-head > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".goals-head",
      start: "top 80%"
    }
  });

  // Cards reveal
  gsap.from(".goal-card", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".goals-grid",
      start: "top 80%"
    }
  });

  // Counter animation
  document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.getAttribute("data-target");

    gsap.to(counter, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power1.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 85%"
      }
    });
  });

  // Hover lift effect
  document.querySelectorAll(".goal-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, scale: 1.03, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.3 });
    });
  });


