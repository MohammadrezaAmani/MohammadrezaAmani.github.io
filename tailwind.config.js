/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['"Sacramento"', "cursive"],
        vazir: ['"Vazir"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
