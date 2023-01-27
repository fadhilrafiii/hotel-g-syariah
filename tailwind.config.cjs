/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'Arial', 'Helvetica', 'Trebuchet MS', 'Verdana'],
      secondary: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
