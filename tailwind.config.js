/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
    theme: {
      container: {
        center: true,
         },
    extend: {
      width: {
        "1000": "1000px"
      }
    },
  },
  plugins: [],
}

