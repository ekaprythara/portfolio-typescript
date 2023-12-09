/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    animation: {
      "spin-slow": "spin 7s linear infinite",
      morph: "morph 7s ease-in-out infinite",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3BC9DB",
        secondary: "#C5CADF",
        light: "#F9F9F9",
        "color-primary": "#2d2e32",
        "color-secondary": "#5C5957",
        dark: "#132347",
        darker: "#0F1B31",
      },
    },
  },
  plugins: [],
};
