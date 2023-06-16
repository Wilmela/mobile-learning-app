/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ACCENT: "#E56050",
        LIGHT_GRAY: "#EDEDED",
        DARK_GRAY: "#232325",
        APP_BLUE: "#CCEDF9",
        APP_GREEN: "#D4F1DA",
        APP_YELLOW: "#F7EECF",
        APP_BLACK: "#000000",
      },
    },
  },
  plugins: [],
};
