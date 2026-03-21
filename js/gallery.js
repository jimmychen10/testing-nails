/* ═══════════════════════════════════════════════════════
   LUXE NAILS — Gallery Module
   ═══════════════════════════════════════════════════════ */

/**
 * Gallery items.
 * 
 * HOW TO ADD YOUR OWN PHOTOS:
 *  1. Put your images in the /assets/gallery/ folder
 *  2. Update the `src` and `alt` fields below
 *  3. Set `category` to one of: gel | acrylic | art | classic
 *  4. Optional: add `wide: true` or `tall: true` for layout variation
 * 
 * The placeholder images below use https://picsum.photos — 
 * replace them with your real photos before publishing.
 */
const GALLERY_ITEMS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70",
    alt: "Soft pink gel nails with subtle shimmer finish",
    caption: "Blush Shimmer Gel",
    category: "gel"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70",
    alt: "Nude almond-shaped acrylic nails",
    caption: "Nude Almond Acrylic",
    category: "acrylic",
    wide: true
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=400&q=70",
    alt: "Hand-painted floral nail art in soft pastels",
    caption: "Pastel Floral Art",
    category: "art"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=70",
    alt: "Classic French manicure with white tips",
    caption: "Classic French Manicure",
    category: "classic",
    tall: true
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=400&q=70",
    alt: "Chrome powder gel nails with mirror finish",
    caption: "Rose Gold Chrome Gel",
    category: "gel"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70",
    alt: "Coffin-shaped acrylic nails with glitter ombré",
    caption: "Glitter Ombré Coffin",
    category: "acrylic"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=70",
    alt: "Detailed botanical nail art with hand-painted leaves",
    caption: "Botanical Hand-Paint",
    category: "art"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=400&q=70",
    alt: "Deep red classic gel nails — timeless and elegant",
    caption: "Classic Deep Red",
    category: "classic"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70",
    alt: "Pastel rainbow gel nails — each nail a different color",
    caption: "Rainbow Pastel Gel",
    category: "gel",
    wide: true
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=70",
    alt: "3D floral embellishments on acrylic nails",
    caption: "3D Floral Acrylic",
    category: "acrylic"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604655855765-7e23040d4b65?w=400&q=70",
    alt: "Minimalist nail art with abstract geometric lines",
    caption: "Geometric Minimalist",
    category: "art",
    tall: true
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    thumb: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70",
    alt: "Natural nude classic manicure with clean finish",
    caption: "Nude Classic Polish",
    category: "classic"
  }
];

/* ── State ─────────────────────────────────────────────── */
let currentFilter = "all";
let lightboxIndex = 0;
let visibleItems  = [];

/* ── Build gallery ──────────────────────────────────────── */
function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = GALLERY_ITEMS.map((item, idx) => {
    const classes = [
      "gallery-item",
      "reveal",
      item.wide ? "wide" : "",
      item.tall ? "tall" : ""
    ].filter(Boolean).join(" ");

    return `
      <div
        class="${classes}"
        data-category="${item.category}"
        data-index="${idx}"
        role="button"
        tabindex="0"
        aria-label="View ${item.alt}"
      >
        <img
          src="${item.thumb}"
          alt="${item.alt}"
          loading="lazy"
          decoding="async"
          width="400"
          height="533"
        />
        <div class="gallery-overlay" aria-hidden="true">
          <div>
            <span class="gallery-tag">${item.category}</span>
            <p class="gallery-caption">${item.caption}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach click / keyboard events
  grid.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.index)));
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(Number(el.dataset.index));
      }
    });
  });

  filterGallery(currentFilter);
  observeReveal();
}

/* ── Filter ─────────────────────────────────────────────── */
function filterGallery(category) {
  currentFilter = category;

  const items = document.querySelectorAll(".gallery-item");
  visibleItems  = [];

  items.forEach((el, i) => {
    const cat = el.dataset.category;
    const show = category === "all" || cat === category;

    el.style.display = show ? "" : "none";
    if (show) visibleItems.push(i);
  });

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    const isActive = btn.dataset.filter === category;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

/* ── Lightbox ───────────────────────────────────────────── */
function openLightbox(itemIndex) {
  lightboxIndex = visibleItems.indexOf(itemIndex);
  if (lightboxIndex === -1) lightboxIndex = 0;

  showLightboxItem();

  const lb = document.getElementById("lightbox");
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("lightboxClose").focus();
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.hidden = true;
  document.body.style.overflow = "";
}

function showLightboxItem() {
  const realIndex = visibleItems[lightboxIndex];
  const item = GALLERY_ITEMS[realIndex];
  if (!item) return;

  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  img.src = item.src;
  img.alt = item.alt;
  cap.textContent = item.caption;
}

function lightboxStep(dir) {
  lightboxIndex = (lightboxIndex + dir + visibleItems.length) % visibleItems.length;
  showLightboxItem();
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  buildGallery();

  // Filter buttons
  document.getElementById("galleryFilters")?.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (btn) filterGallery(btn.dataset.filter);
  });

  // Lightbox controls
  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", () => lightboxStep(-1));
  document.getElementById("lightboxNext")?.addEventListener("click", () => lightboxStep(1));

  // Close on backdrop click
  document.getElementById("lightbox")?.addEventListener("click", e => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");
    if (lb?.hidden) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   lightboxStep(-1);
    if (e.key === "ArrowRight")  lightboxStep(1);
  });
});
