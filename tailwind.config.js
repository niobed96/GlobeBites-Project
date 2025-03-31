/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7BB330",
        second: "#749A40",
        Third: "#D38E34",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      backgroundImage: {
        bannerImg: "url('/public/Images/pexels-lum3n-44775-1410235.jpg')",
        bannerlogin: "url('/public/Images/pexels-julieaagaard-2097090.jpg')",
      },
      height: {
        slvh: ["85vh"],
      },
    },
  },
  plugins: [],
};
