/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Vazir'", "serif"],
      serif: ["'Vazir'", "serif"],
      display: ["'Vazir'", "serif"],
      body: ["'Vazir'", "serif"],
      drawer: ["'Vazir'", "serif"],
    },
    extend: {
      fontFamily: {
        sacramento: ['"Sacramento"', "cursive"],
        vazir: ["'Vazir'", "serif"],
      },
    },
  },
  plugins: [],
};
