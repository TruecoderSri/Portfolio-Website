import weatherify from "../assets/weatherify.mp4";
import shirtCustomizer from "../assets/shirtCustomizer.mp4";
import dermacare from "../assets/Dermacare.mp4";

import shirtImg from "../assets/shirt.png";
import weatherImg from "../assets/weather.png";
import dijkstrasImg from "../assets/dijkstras.png";
import dermaImg from "../assets/derma-img.png";

const projects = [
  {
    Name: "Dermacare",
    image: dermaImg,
    link: "",
    videoUrl: dermacare,
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
