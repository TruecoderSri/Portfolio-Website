import weatherify from "/weatherify.mp4";
import shirtCustomizer from "/shirtCustomizer.mp4";
import dermacare from "/Dermacare.mp4";

import shirtImg from "../assets/shirt.png";
import weatherImg from "../assets/weather.png";
import dijkstrasImg from "../assets/dijkstras.png";
import dermaImg from "../assets/derma-img.png";

const projects = [
  {
    Name: "Dermacare",
    image: dermaImg,
    link: "",
    videoUrl:
      "https://www.veed.io/view/3225dd23-8494-408c-95e1-f35176dd4318?panel=share",
    sourceCode: "https://github.com/goyalh4164/Dermacare",
  },
  {
    Name: "Shirt Customizer 3D",
    image: shirtImg,
    link: "",
    videoUrl: shirtCustomizer,
    sourceCode: "https://github.com/TruecoderSri/3D-AI",
  },
  {
    Name: "Weatherify",
    image: weatherImg,
    link: "",
    videoUrl: weatherify,
    sourceCode: "https://github.com/TruecoderSri/Weatherify",
  },
  {
    Name: "Delhi-Dijkstras-Path",
    image: dijkstrasImg,
    link: "https://dijkstras-path.vercel.app",
    videoUrl: "",
    sourceCode: "https://github.com/TruecoderSri/delhi-dijkstras-path",
  },
];

export default projects;
