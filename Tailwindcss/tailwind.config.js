/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Playwrite AU SA", "sans-serif"],
      },
      colors: {
        brand: "#3498db",
        peach: "#F5ECD5",
      },
    },
  },
  plugins: [],
};
