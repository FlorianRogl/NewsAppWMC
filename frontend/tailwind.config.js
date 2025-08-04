/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // <- Diese Zeile fehlt!
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}