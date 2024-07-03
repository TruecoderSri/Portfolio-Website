import resume from "../assets/Resume'24.pdf";
import PropTypes from "prop-types";
import { useState } from "react";

function Navbar({
  homeRef,
  experienceRef,
  projectsRef,
  socialsRef,
  contactRef,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close the menu on scroll on mobile screens
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 md:w-auto relative">
      <div className="max-w-screen-xl flex items-center justify-end mx-auto p-4">
        {/* Resume button for small screens */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 md:hidden py-2 px-4 text-blue-600 rounded-md border-2 hover:bg-blue-800"
        >
          Resume
        </a>

        {/* Menu button for mobile screens */}
        <div className="ml-auto md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu items for larger screens */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:relative absolute top-full right-0 md:top-auto md:right-auto">
            <li>
              <button
                type="button"
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                onClick={() => scrollToRef(homeRef)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => scrollToRef(experienceRef)}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => scrollToRef(projectsRef)}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => scrollToRef(socialsRef)}
              >
                Socials
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => scrollToRef(contactRef)}
              >
                Contact
              </button>
            </li>
            <li className="hidden md:block">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="-mt-4 py-2 px-4 text-blue-600 rounded-md border-2 hover:text-white hover:brightness-120 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-600"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  homeRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  socialsRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default Navbar;
