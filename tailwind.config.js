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
        "cursive-standard": ["Cursive standard"],
        "Brettley-Signature": ["Brettley Signature"],
        georgia: ["Georgia"],
        "league-spartan": ["League Spartan"],
        Poppins: ["Poppins"],
        "dm-serif": ["Dm Serif Display"],
        "sofia-Pro": ["Sofia Pro"],
        "fontspring-demo": ["Fontspring Demo"],
      },
      boxShadow: {
        "custom-white":
          "rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px",
        content:
          "rgba(255, 255, 255, 0.2) 0px 10px 30px,rgba(0, 0, 0, 0.2) 0px 30px 90px",
        wrapper: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
        heading: "rgb(38, 57, 77) 0px 20px 30px -10px",
      },
      animation: {
        rotBGimg: "rotBGimg 5s linear infinite",
      },
      keyframes: {
        rotBGimg: {
          "0%": { transform: "rotate(0deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1.1)" },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(109.6deg, rgb(41, 125, 182) 3.6%, rgb(77, 58, 151) 51%, rgb(103, 55, 115) 92.9%)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
