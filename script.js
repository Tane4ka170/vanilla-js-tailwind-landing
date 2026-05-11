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
        "slide-in-left": "slide-in-left 0.8s ease forwards",
        "slide-in-right": "slide-in-right 0.8s ease forwards",
      },
    },
  },
};
