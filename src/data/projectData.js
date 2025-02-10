// import shirtCustomizer from "/shirtCustomizer.mp4";
import dermacare from "/Dermacare.mp4";
import quizzy from "/Quizzy.mp4";
import weatherify from "/weatherify.mp4";
import ddp from "/ddp.mp4";

// import shirtImg from "../assets/shirt.png";
import quizzyImg from "../assets/quizzyImg.png";
import weatherImg from "../assets/weather.png";
import dijkstrasImg from "../assets/dijkstras.png";
import dermaImg from "../assets/derma-img.png";

const projects = [
  {
    Name: "Dermacare",
    image: dermaImg,
    description:
      "Dermacare is a web-based platform designed to analyze skin conditions based on user uploaded photos. The project provides a user-friendly tool for early detection and diagnosis of skin diseases, enhancing overall skin health awareness.",
    link: "",
    videoUrl: dermacare,
    sourceCode: "https://github.com/goyalh4164/Dermacare",
  },
  {
    Name: "Quizzy",
    image: quizzyImg,
    description:
      "Quizzy is a dynamic, interactive and an accessible platform that enables users to create, take, and manage quizzes. Users can sign up, log in, create their own quiz in any domain area and make it available for the world, take part in quizzes, and see their scores. The platform is built with a Node.js backend, a MongoDB database, and a React frontend styled with Tailwind CSS.",
    link: "https://truecodersri-quizzy.vercel.app",
    videoUrl: quizzy,

    sourceCode: "https://github.com/TruecoderSri/Quizzy",
  },
  // {
  //   Name: "Shirt Customizer 3D",
  //   image: shirtImg,
  //   link: "",
  //   videoUrl: shirtCustomizer,
  //   sourceCode: "https://github.com/TruecoderSri/3D-AI",
  // },
  {
    Name: "Weatherify",
    image: weatherImg,
    description:
      "This is a AI powered weather site with detailed analysis and summary of current weather of any city around the world along with graphs and various other parameters.",
    link: "",
    videoUrl: weatherify,
    sourceCode: "https://github.com/TruecoderSri/Weatherify",
  },
  {
    Name: "Delhi-Dijkstras-Path",
    image: dijkstrasImg,
    description:
      "In this project we use dijkstras algorithm to find the nearest distance between any 2 places in the city which're visualized as graph nodes.",
    link: "https://dijkstras-path.vercel.app",
    videoUrl: ddp,
    sourceCode: "https://github.com/TruecoderSri/delhi-dijkstras-path",
  },
];

export default projects;
