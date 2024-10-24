import { useState, useEffect, lazy, Suspense } from "react";
import projects from "../data/projectData";
import "../App.css";
import Heading from "./Heading";
function Projects() {
  const [popup, setPopup] = useState({
    isOpen: false,
    video: "",
    link: "",
    sourceCode: "",
    name: null,
  });

  const [ReactPlayer, setReactPlayer] = useState(null);

  const openPopup = (video, link, sourceCode, name) => {
    setPopup({ isOpen: true, video, link, sourceCode, name });
  };

  const closePopup = () => {
    setPopup({
      isOpen: false,
      video: "",
      link: "",
      sourceCode: "",
      name: null,
    });
  };

  useEffect(() => {
    if (popup.video && popup.video.includes("mp4")) {
      loadReactPlayer();
    }
  }, [popup.video]);

  const loadReactPlayer = async () => {
    try {
      const { default: Player } = await import("react-player/lazy");
      setReactPlayer(() => Player);
    } catch (error) {
      console.error("Error loading ReactPlayer:", error);
    }
  };

  const LazyReactPlayer = lazy(() => import("react-player/lazy"));

  return (
    <div className="projects flex flex-col">
      <Heading heading={"Projects"} />
      <div className="wrapper border-none rounded-xl shadow-wrapper mx-6 my-4 bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex-1 px-4 py-4 gap-6 border-2 border-purple bg-stone-200 rounded-md relative hover:scale-105 hover:transition-transform ease-in-out duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.Name}
                  className="z-0 w-full h-auto rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                <div
                  className="absolute inset-0 flex items-center font-dm-serif tracking-wide justify-center font-bold text-3xl bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-md"
                  onClick={() =>
                    openPopup(
                      project.videoUrl,
                      project.link,
                      project.sourceCode,
                      project.Name
                    )
                  }
                >
                  <h2 className="text-2xl md:text-4xl font-Montserrat-sans text-white text-center">
                    {project.Name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popup.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 "
          onClick={closePopup}
        >
          <div
            className="bg-neutral-200 rounded-md p-8 m-2 md:m-0 relative md:w-[70vw] md:h-[90vh] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-2 text-gray-900 hover:text-gray-900"
              onClick={closePopup}
            >
              <svg
                className="h-10 w-10 text-gray-500 hover:text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="title">
              <h1 className="text-2xl md:text-4xl font-bold font-dm-serif text-center p-4 ">
                {popup.name}
              </h1>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              {ReactPlayer && (
                <div className="w-full h-auto mb-4 flex justify-center translate">
                  <LazyReactPlayer
                    url={popup.video}
                    controls
                    width="80%"
                    height="60%"
                  />
                </div>
              )}
            </Suspense>
            <div className="content flex md:flex-row justify-between">
              <a
                href={popup.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left px-8 m-2 py-0 font-Poppins text-blue-500 text-xl font-bold hover:text-blue-800 hover:underline md:text-3xl md:px-24 md:py-2"
              >
                Source Code
              </a>
              {popup.link && (
                <a
                  href={popup.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-left px-8 m-2 py-0 font-Poppins text-blue-500 text-xl font-bold hover:text-blue-800 hover:underline md:text-3xl md:px-24 md:py-2"
                >
                  Project Link
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
