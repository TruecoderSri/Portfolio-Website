import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "../App.css";

function Heading({ heading }) {
  const headingRef = useRef(null);
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTranslate(true);
        } else {
          setTranslate(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <h1
      ref={headingRef}
      className={`heading md:text-left text-center text-4xl px-10 py-4 md:text-6xl font-league-spartan text-white shadow-content mx-8 my-4 rounded-xl m-8  ${
        translate ? "animate" : ""
      }
      `}
    >
      {heading}
    </h1>
  );
}
Heading.propTypes = {
  heading: propTypes.string.isRequired,
};

export default Heading;
