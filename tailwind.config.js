/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cursive-standard": ["Cursive standard", "sans-serif"],
        "Brettley-Signature": ["Brettley Signature", "sans-serif"],
        georgia: ["Georgia", "sans-serif"],
        "league-spartan": ["League Spartan", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        "dm-serif": ["Dm Serif Display", "serif"],
        "sofia-Pro": ["Sofia Pro", "sans-serif"],
        "fontspring-demo": ["Fontspring Demo", "sans-serif"],
      },
      boxShadow: {
        "custom-white":
          "rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px",
        content:
          "rgba(255, 255, 255, 0.2) 0px 10px 30px,rgba(0, 0, 0, 0.2) 0px 30px 90px",

        wrapper: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
        heading: "rgb(38, 57, 77) 0px 20px 30px -10px;",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
