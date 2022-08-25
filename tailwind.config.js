/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4267B3",
        grey: {
          light: "#E9EBEE",
          dark: "#616771"
        }
      }
    },
  },
  plugins: [],
}
