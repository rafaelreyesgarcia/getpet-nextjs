/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js, ts, jsx, tsx}",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'highlight': ['Lilita One', 'cursive'],
      'body': ['Montserrat', 'sans-serif'],
      'heading': ['Hind', 'sans-serif'],
    }
  },
  plugins: [],
}
