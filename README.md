# Sai Kiran & Siva Abhishek - Save the Date

A modern, mobile-first wedding save-the-date website built with pure HTML, CSS, and JavaScript.

## Features

- Responsive single-page design
- Glassmorphism cards and subtle South Indian-inspired motifs
- Live wedding countdown
- Timeline, event details, venue, gallery lightbox, and RSVP
- Persistent light/dark mode
- Smooth scrolling and reduced-motion support
- Lazy-loaded gallery and venue images
- Accessible navigation, controls, and semantic HTML
- No build step or framework required

## Personalize the site

Open `index.html` and update:

- Wedding date and event details
- Story milestones
- Venue address and Google Maps URL
- RSVP Google Form URL
- Contact phone and email
- Image URLs and alt text

### Add your photographs

Photo placeholders are organized in `assets/images/`:

- `assets/images/hero/` for the main couple photograph
- `assets/images/venue/` for the venue photograph
- `assets/images/gallery/` for gallery photographs

See `assets/images/README.md` for recommended dimensions and replacement instructions. Update all image filenames from the clearly marked `PHOTO PATHS` block at the top of `script.js`.

### WhatsApp and social preview

The Open Graph metadata in `index.html` is configured to show:

- Sai Kiran ❤️ Siva Abhishek
- Save the Date
- Wedding Date: 04 September 2026
- A dedicated 1200 x 630 couple photograph

Before publishing, replace every `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY-NAME` value in `index.html` with the final GitHub Pages URL. Replace `assets/images/social/og-couple-photo.png` with your couple photograph as described in `assets/images/README.md`.

The live countdown date is set on the `.countdown` element:

```html
data-wedding-date="2026-12-12T09:00:00+05:30"
```

## Preview locally

Because this is a static website, you can open `index.html` directly or run a simple local server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then click **Save**.
6. GitHub will publish the site at `https://<username>.github.io/<repository-name>/`.

## Performance notes

The site uses no JavaScript dependencies, serves responsive compressed images from Unsplash, lazy-loads non-hero images, reserves image dimensions to reduce layout shifts, and respects reduced-motion preferences. For production, replacing the external images with locally optimized WebP or AVIF photos will provide the most consistent Lighthouse results.
