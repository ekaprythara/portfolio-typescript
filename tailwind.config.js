/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BC9DB",
        secondary: "#C5CADF",
        light: "#FEFEFE",
        dark: "#132347",
        darker: "#0F1B31",
      },
    },
  },
  plugins: [],
};
