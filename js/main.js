/* ═══════════════════════════════════════════════════════
   LUXE NAILS — Main Script
   (nav, scroll effects, reveal animations)
   ═══════════════════════════════════════════════════════ */

/* ── Scroll: header + back-to-top ───────────────────────── */
function initScroll() {
  const header   = document.querySelector(".site-header");
  const backTop  = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 40);
    backTop?.classList.toggle("visible", y > 400);
  }, { passive: true });
}

/* ── Mobile hamburger ───────────────────────────────────── */
function initHamburger() {
  const btn   = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav when a link is clicked
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // Close on outside click
  document.addEventListener("click", e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ── Active nav link highlighting ──────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle("active-link",
            a.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));
}

/* ── Scroll-reveal animation ────────────────────────────── */
let revealObserver = null;

function observeReveal() {
  const els = document.querySelectorAll(".reveal:not(.visible)");

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  els.forEach(el => revealObserver.observe(el));
}

// Export so i18n.js can call it after re-rendering dynamic content
window.observeReveal = observeReveal;

/* ── Add reveal class to static sections ───────────────── */
function initReveal() {
  document.querySelectorAll(
    ".section-header, .info-card, .contact-map, .gallery-filters"
  ).forEach(el => {
    el.classList.add("reveal");
  });
  observeReveal();
}

/* ── Smooth back-to-top ─────────────────────────────────── */
function initBackToTop() {
  document.getElementById("backToTop")?.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ── Prefers-reduced-motion ─────────────────────────────── */
function respectMotionPreference() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty("--dur-fast", "0ms");
    document.documentElement.style.setProperty("--dur-med",  "0ms");
    document.documentElement.style.setProperty("--dur-slow", "0ms");
  }
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  respectMotionPreference();
  initScroll();
  initHamburger();
  initActiveNav();
  initReveal();
  initBackToTop();
});
