/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
        Bellefair: ['"Bellefair"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
