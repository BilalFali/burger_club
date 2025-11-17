/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-green": "#1a3a2e",
        "dark-green": "#0f2419",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
