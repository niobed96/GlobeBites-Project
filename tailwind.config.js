/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7BB330",
        second: "#749A40",
      },
      fontFamily: {
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
