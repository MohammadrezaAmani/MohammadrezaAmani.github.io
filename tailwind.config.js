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
      colors: {
        orange: {
          50: "#fff8f0",
          100: "#ffebd9",
          200: "#ffcfb3",
          300: "#ffad7f",
          400: "#ff7a3f",
          500: "#f79902",
          600: "#e64d00",
          700: "#b83d00",
          800: "#953200",
          900: "#783000",
        },
      }
    },
  },
  plugins: [],
};
