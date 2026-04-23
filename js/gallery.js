/* ═══════════════════════════════════════════════════════
   CINDY HAIR SALON — Gallery Module
   ═══════════════════════════════════════════════════════ */

/**
 * Gallery items.
 *
 * HOW TO ADD YOUR OWN PHOTOS:
 *  1. Put your images in the /cindy-hair-salon-pic/ folder
 *  2. Update the `src` and `alt` fields below
 *  3. Set `category` to one of: cut | color | styling | highlights
 *  4. Optional: add `wide: true` or `tall: true` for layout variation
 */
const GALLERY_ITEMS = [
  { id: 1,  src: "cindy-hair-salon-pic/Image_20260410170636_2_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410170636_2_2.jpg",  alt: "Haircut style",       caption: "Precision Cut",         category: "cut" },
  { id: 2,  src: "cindy-hair-salon-pic/Image_20260410170637_3_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410170637_3_2.jpg",  alt: "Haircut style",       caption: "Layered Cut",           category: "cut", wide: true },
  { id: 3,  src: "cindy-hair-salon-pic/Image_20260410170642_4_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410170642_4_2.jpg",  alt: "Haircut style",       caption: "Bob Cut",               category: "cut" },
  { id: 4,  src: "cindy-hair-salon-pic/Image_20260410184452_5_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410184452_5_2.jpg",  alt: "Hair color",          caption: "Vibrant Color",         category: "color", tall: true },
  { id: 5,  src: "cindy-hair-salon-pic/Image_20260410184455_6_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410184455_6_2.jpg",  alt: "Hair color",          caption: "Full Color",            category: "color" },
  { id: 6,  src: "cindy-hair-salon-pic/Image_20260410184457_7_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410184457_7_2.jpg",  alt: "Hair color",          caption: "Color Transformation",  category: "color" },
  { id: 7,  src: "cindy-hair-salon-pic/Image_20260410184505_8_2.jpg",  thumb: "cindy-hair-salon-pic/Image_20260410184505_8_2.jpg",  alt: "Hair styling",        caption: "Blowout Style",         category: "styling" },
  { id: 8,  src: "cindy-hair-salon-pic/Image_20260410184515_10_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410184515_10_2.jpg", alt: "Hair styling",        caption: "Elegant Updo",          category: "styling" },
  { id: 9,  src: "cindy-hair-salon-pic/Image_20260410184517_11_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410184517_11_2.jpg", alt: "Hair styling",        caption: "Voluminous Blowout",    category: "styling", wide: true },
  { id: 10, src: "cindy-hair-salon-pic/Image_20260410184522_12_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410184522_12_2.jpg", alt: "Highlights",          caption: "Sun-Kissed Highlights", category: "highlights" },
  { id: 11, src: "cindy-hair-salon-pic/Image_20260410184526_13_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410184526_13_2.jpg", alt: "Highlights",          caption: "Balayage Highlights",   category: "highlights", tall: true },
  { id: 12, src: "cindy-hair-salon-pic/Image_20260410184529_14_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410184529_14_2.jpg", alt: "Highlights",          caption: "Foil Highlights",       category: "highlights" },
  { id: 13, src: "cindy-hair-salon-pic/Image_20260410184532_15_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410184532_15_2.jpg", alt: "Haircut style",       caption: "Textured Cut",          category: "cut" },
  { id: 14, src: "cindy-hair-salon-pic/Image_20260410190336_16_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410190336_16_2.jpg", alt: "Haircut style",       caption: "Modern Cut",            category: "cut" },
  { id: 15, src: "cindy-hair-salon-pic/Image_20260410190338_17_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410190338_17_2.jpg", alt: "Hair color",          caption: "Ombre Color",           category: "color" },
  { id: 16, src: "cindy-hair-salon-pic/Image_20260410190344_18_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410190344_18_2.jpg", alt: "Hair color",          caption: "Dimensional Color",     category: "color" },
  { id: 17, src: "cindy-hair-salon-pic/Image_20260410190417_19_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410190417_19_2.jpg", alt: "Hair styling",        caption: "Sleek Blowout",         category: "styling" },
  { id: 18, src: "cindy-hair-salon-pic/Image_20260410190423_20_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410190423_20_2.jpg", alt: "Hair styling",        caption: "Bridal Style",          category: "styling" },
  { id: 19, src: "cindy-hair-salon-pic/Image_20260410191853_21_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410191853_21_2.jpg", alt: "Highlights",          caption: "Golden Highlights",     category: "highlights" },
  { id: 20, src: "cindy-hair-salon-pic/Image_20260410192242_22_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410192242_22_2.jpg", alt: "Highlights",          caption: "Lowlights & Depth",     category: "highlights" },
  { id: 21, src: "cindy-hair-salon-pic/Image_20260410193405_24_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193405_24_2.jpg", alt: "Haircut style",       caption: "Fringe Cut",            category: "cut" },
  { id: 22, src: "cindy-hair-salon-pic/Image_20260410193410_25_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193410_25_2.jpg", alt: "Haircut style",       caption: "Shag Cut",              category: "cut" },
  { id: 23, src: "cindy-hair-salon-pic/Image_20260410193414_26_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193414_26_2.jpg", alt: "Hair color",          caption: "Warm Brunette",         category: "color" },
  { id: 24, src: "cindy-hair-salon-pic/Image_20260410193418_27_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193418_27_2.jpg", alt: "Hair color",          caption: "Ash Blonde",            category: "color" },
  { id: 25, src: "cindy-hair-salon-pic/Image_20260410193424_28_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193424_28_2.jpg", alt: "Hair styling",        caption: "Curls & Waves",         category: "styling" },
  { id: 26, src: "cindy-hair-salon-pic/Image_20260410193429_29_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193429_29_2.jpg", alt: "Hair styling",        caption: "Soft Waves",            category: "styling" },
  { id: 27, src: "cindy-hair-salon-pic/Image_20260410193435_30_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193435_30_2.jpg", alt: "Highlights",          caption: "Platinum Highlights",   category: "highlights" },
  { id: 28, src: "cindy-hair-salon-pic/Image_20260410193440_31_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193440_31_2.jpg", alt: "Highlights",          caption: "Caramel Highlights",    category: "highlights" },
  { id: 29, src: "cindy-hair-salon-pic/Image_20260410193453_32_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193453_32_2.jpg", alt: "Haircut style",       caption: "Lob Haircut",           category: "cut" },
  { id: 30, src: "cindy-hair-salon-pic/Image_20260410193534_33_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193534_33_2.jpg", alt: "Haircut style",       caption: "Long Layers",           category: "cut" },
  { id: 31, src: "cindy-hair-salon-pic/Image_20260410193539_34_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193539_34_2.jpg", alt: "Hair color",          caption: "Red Tones",             category: "color" },
  { id: 32, src: "cindy-hair-salon-pic/Image_20260410193549_35_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193549_35_2.jpg", alt: "Hair color",          caption: "Chocolate Brown",       category: "color" },
  { id: 33, src: "cindy-hair-salon-pic/Image_20260410193556_36_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410193556_36_2.jpg", alt: "Hair styling",        caption: "Special Occasion Style",category: "styling" },
  { id: 34, src: "cindy-hair-salon-pic/Image_20260410220548_37_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410220548_37_2.jpg", alt: "Hair styling",        caption: "Romantic Curls",        category: "styling" },
  { id: 35, src: "cindy-hair-salon-pic/Image_20260410220620_38_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410220620_38_2.jpg", alt: "Highlights",          caption: "Blended Highlights",    category: "highlights" },
  { id: 36, src: "cindy-hair-salon-pic/Image_20260410220634_39_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410220634_39_2.jpg", alt: "Highlights",          caption: "Dimension & Glow",      category: "highlights" },
  { id: 37, src: "cindy-hair-salon-pic/Image_20260410220638_40_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410220638_40_2.jpg", alt: "Haircut style",       caption: "Curtain Bangs",         category: "cut" },
  { id: 38, src: "cindy-hair-salon-pic/Image_20260410220642_41_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410220642_41_2.jpg", alt: "Hair color",          caption: "Balayage Color",        category: "color" },
  { id: 39, src: "cindy-hair-salon-pic/Image_20260410220646_42_2.jpg", thumb: "cindy-hair-salon-pic/Image_20260410220646_42_2.jpg", alt: "Hair styling",        caption: "Glam Style",            category: "styling" }
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
