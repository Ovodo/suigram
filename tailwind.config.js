/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary_1: "#E750FF",
        primary_2: "#BA2FFE",
        primary_3: "#9D1AFE",
      },
    },
  },
  plugins: [],
};
