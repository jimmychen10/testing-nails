# 💅 Luxe Nails Studio — Portfolio Website

A clean, elegant, and fully static nail salon portfolio website.  
Built with HTML, CSS, and vanilla JavaScript. Free to host on GitHub Pages.

---

## 🚀 How to Deploy (Step-by-Step)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up for free.

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `luxe-nails` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
**Option A — Drag & Drop (easiest):**
1. Open your new repo on GitHub
2. Click **uploading an existing file**
3. Drag ALL files from this folder into the browser
4. Click **Commit changes**

**Option B — Git (if you know Git):**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/luxe-nails.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Wait ~60 seconds, then your site is live at:  
   `https://YOUR_USERNAME.github.io/luxe-nails/`

---

## 🖼️ Adding Your Own Photos

1. Put your nail photos inside the `/assets/gallery/` folder
2. Open `js/gallery.js`
3. Edit the `GALLERY_ITEMS` array — replace the placeholder `src` URLs with your image paths:
   ```js
   src: "assets/gallery/my-nail-photo.jpg",
   thumb: "assets/gallery/my-nail-photo.jpg",
   alt: "Describe the photo here (important for SEO)",
   caption: "Design name shown on hover",
   category: "gel"  // gel | acrylic | art | classic
   ```
4. Recommended image sizes: **800×1067px** (portrait 3:4 ratio), JPEG at 80% quality

---

## 🌍 Editing Languages

Open `js/i18n.js`. You'll see three language objects: `en`, `vi`, `es`.

**To change text:** Edit the values inside any language block.

**To add a new language** (e.g. French):
1. Add a new block: `fr: { ... }` — copy the `en` block and translate it
2. Add it to `SUPPORTED_LANGS` (it's automatic since we use `Object.keys`)
3. Add a button in `index.html`:
   ```html
   <button class="lang-btn" data-lang="fr" aria-label="Français">FR</button>
   ```

---

## 📞 Updating Contact Info

In `index.html`, search for these sections and update:

- **Address** → `data-i18n="contact_address"` in each language in `i18n.js`
- **Phone** → `<a href="tel:+14155550192">`
- **Social links** → `<a href="https://instagram.com/YOUR_HANDLE">`
- **Google Maps** → Replace the `href` in the "Get Directions" button

To embed a real Google Map:
1. Go to maps.google.com → find your location → Share → Embed a map
2. Copy the `<iframe>` code
3. In `index.html`, find the `<!-- To embed a real map -->` comment and replace the `map-placeholder` div with the iframe

---

## 🎨 Customising Colors

Open `css/style.css` and find the `:root` block at the top.  
Change these variables to match your brand:

```css
--clr-rose:      #c9796a;   /* Main accent color */
--clr-rose-deep: #a85a4d;   /* Hover/darker accent */
--clr-cream:     #faf7f4;   /* Page background */
--clr-ink:       #1a1010;   /* Main text / headings */
```

---

## 📁 File Structure

```
luxe-nails/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── i18n.js         ← Translations (EN / VI / ES)
│   ├── gallery.js      ← Gallery data + lightbox
│   └── main.js         ← Nav, scroll, animations
├── assets/
│   └── gallery/        ← Put your nail photos here
├── sitemap.xml         ← SEO sitemap
├── robots.txt          ← SEO robots file
└── README.md           ← This file
```

---

## ✅ SEO Checklist

Before publishing, update these in `index.html`:
- [ ] Replace `yourusername` in all URLs with your GitHub username
- [ ] Replace the `og:image` URL with a real image
- [ ] Update the `canonical` URL
- [ ] Update `sitemap.xml` with your real URL
- [ ] Update `robots.txt` with your real URL
- [ ] Add real nail photos with descriptive `alt` text

---

## 💡 Tips

- Use **WebP format** for photos (smaller file size, faster loading)
- Keep gallery images under **200KB** each for fast loading
- Run your site through [PageSpeed Insights](https://pagespeed.web.dev/) to check performance
- Submit your sitemap to [Google Search Console](https://search.google.com/search-console) for indexing
