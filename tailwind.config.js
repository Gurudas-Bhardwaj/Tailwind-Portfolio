/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Popins: ["Poppins", "sans-serif"],
      },
      textColor:{
        signature:'#18f1e2',
      },
      backgroundColor:{
        signature:"#18f1e2",
      },
    },
  },
  plugins: [],
}