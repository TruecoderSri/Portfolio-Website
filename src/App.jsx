import "./App.css";
import { useEffect, useRef, useState } from "react";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "../src/fonts/fonts.css";
import Projects from "./Components/Projects";
import Socials from "./Components/Socials";
import Contact from "./Components/Contact";

// function App() {
//   const homeRef = useRef(null);
//   const experienceRef = useRef(null);
//   const projectsRef = useRef(null);
//   const socialsRef = useRef(null);
//   const contactRef = useRef(null);

//   return (
//     <div className="container">
//       <Navbar
//         homeRef={homeRef}
//         experienceRef={experienceRef}
//         projectsRef={projectsRef}
//         socialsRef={socialsRef}
//         contactRef={contactRef}
//       />
//       <div ref={homeRef}>
//         <Home />
//       </div>
//       <div ref={experienceRef}>
//         <Experience />
//       </div>
//       <div ref={projectsRef}>
//         <Projects />
//       </div>
//       <div ref={socialsRef}>
//         <Socials />
//       </div>
//       <div ref={contactRef}>
//         <Contact />
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 100; // Adjust as needed

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const socialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if the current scroll position is beyond the threshold
      if (window.scrollY > scrollThreshold) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Navbar
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        socialsRef={socialsRef}
        contactRef={contactRef}
      />
      <div id="home">
        <Home />
      </div>
      <div
        ref={experienceRef}
        className={`section ${isBlurred ? "blur-out" : ""}`}
      >
        <Experience />
      </div>
      <div
        ref={projectsRef}
        className={`section ${isBlurred ? "blur-out" : ""}`}
      >
        <Projects />
      </div>
      <div
        ref={socialsRef}
        className={`section ${isBlurred ? "blur-out" : ""}`}
      >
        <Socials />
      </div>
      <div
        ref={contactRef}
        className={`section ${isBlurred ? "blur-out" : ""}`}
      >
        <Contact />
      </div>
    </div>
  );
}

export default App;
