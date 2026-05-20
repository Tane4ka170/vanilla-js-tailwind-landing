// Theme toggle
const html = document.documentElement;
const toggle = document.getElementById(".themeToggle");
const moon = document.getElementById(".moonIcon");
const sun = document.getElementById(".sunIcon");

const saved = localStorage.getItem("theme") || "light";
html.classList.toggle("dark", saved === "dark");
moon.classList.toggle("hidden", saved === "dark");
sun.classList.toggle("dark", saved !== "dark");

toggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  moon.classList.toggle("hidden", isDark);
  sun.classList.toggle("dark", !isDark);
});

// Navbar scroll
const navbar = document.getElementById("navbar");
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrolld = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  const ptc = scrolld / total;

  // Progress bar
  if (scrolld > 60) {
    navbar.classList.add("glass", "nav-scrolled");
  } else {
    navbar.classList.remove("glass", "nav-scrolled");
  }
  // Reveal on screen
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("visible");
    }
  });
});
// Initial reveal
setTimeout(() => window.dispatchEvent(new Event("scroll")), 100);

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuBtn.classList.toggle("hidden", !menuOpen);
});

function closeMobile() {
  menuOpen = false;
  mobileMenu.classList.add("hidden");
}

const scrollBtn = document.getElementById("scrollTopBtn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: { 400: "#f472b6", 500: "#ec4899", 600: "#db2777" },
        neon: "#00f5ff",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        float2: "float 8s ease-in-out infinite 1s",
        float3: "float 7s ease-in-out infinite 2s",
        glow: "glow 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.8s ease forwards",
        "slide-in-right": "slideInRight 0.8s ease forwards",
        "fade-up": "fadeUp 0.5s ease forwards",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 20s linear infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 20px rgba(14,165,233,0.4)" },
          "50%": {
            boxShadow:
              "0 0 50px rgba(14,165,233,0.9), 0 0 100px rgba(14,165,233,0.4)",
          },
        },
        slideInLeft: {
          from: { opacity: 0, transform: "translateX(-60px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(1.8)", opacity: 0 },
        },
      },
    },
  },
};
