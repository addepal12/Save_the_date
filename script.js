/* ================================================================
   PHOTO PATHS - Add your pictures to assets/images and update only
   the filenames below. WebP or AVIF files are recommended.
   ================================================================ */
const PHOTO_PATHS = {
  hero: "assets/images/hero/hero-photo.png",
  venue: "assets/images/venue/venue-photo.svg",
  gallery01: "assets/images/gallery/gallery-01.png",
  gallery02: "assets/images/gallery/gallery-02.png",
  gallery03: "assets/images/gallery/gallery-03.png",
  gallery04: "assets/images/gallery/gallery-04.png",
  gallery05: "assets/images/gallery/gallery-05.png",
};

document.querySelectorAll("[data-photo]").forEach((image) => {
  const path = PHOTO_PATHS[image.dataset.photo];
  if (path) image.src = path;
});

document.querySelectorAll("[data-gallery-photo]").forEach((item) => {
  const path = PHOTO_PATHS[item.dataset.galleryPhoto];
  if (path) item.dataset.full = path;
});

const body = document.body;
const header = document.querySelector(".site-header");
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const scrollProgress = document.querySelector(".scroll-progress");

const preferredTheme = localStorage.getItem("wedding-theme");
if (preferredTheme === "dark" || (!preferredTheme && matchMedia("(prefers-color-scheme: dark)").matches)) {
  body.classList.add("dark");
  themeToggle.setAttribute("aria-label", "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("wedding-theme", isDark ? "dark" : "light");
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
});

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => link.addEventListener("click", () => {
  body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}));

const updateHeader = () => {
  header.classList.toggle("scrolled", scrollY > 30);
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  scrollProgress.style.transform = `scaleX(${scrollable > 0 ? scrollY / scrollable : 0})`;
};
updateHeader();
addEventListener("scroll", updateHeader, { passive: true });

const countdown = document.querySelector(".countdown");
const weddingTime = new Date(countdown.dataset.weddingDate).getTime();

function updateCountdown() {
  const remaining = Math.max(0, weddingTime - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };

  Object.entries(values).forEach(([unit, value]) => {
    countdown.querySelector(`[data-unit="${unit}"]`).textContent = String(value).padStart(unit === "days" ? 3 : 2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
  observer.observe(element);
});

if (matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) {
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", (event) => {
    const x = (event.clientX / innerWidth - 0.5) * 10;
    const y = (event.clientY / innerHeight - 0.5) * 10;
    hero.style.setProperty("--hero-x", `${x}px`);
    hero.style.setProperty("--hero-y", `${y}px`);
  });
}

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
let activeImage = 0;

function showImage(index) {
  activeImage = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeImage];
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.querySelector("img").alt;
}

galleryItems.forEach((item, index) => item.addEventListener("click", () => {
  showImage(index);
  lightbox.showModal();
  body.classList.add("lightbox-open");
}));

function closeLightbox() {
  lightbox.close();
  body.classList.remove("lightbox-open");
  lightboxImage.src = "";
}

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showImage(activeImage - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => showImage(activeImage + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener("cancel", () => body.classList.remove("lightbox-open"));

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") showImage(activeImage - 1);
  if (event.key === "ArrowRight") showImage(activeImage + 1);
});
