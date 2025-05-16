/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins'],
          poppins_bold: ['Poppins-Bold'],
          poppins_extra: ['Poppins-Extrabold']
        },
      },
    },
    plugins: [],
  }
  