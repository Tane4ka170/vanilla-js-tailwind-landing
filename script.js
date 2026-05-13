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
