import workExp from "../data/workExperience";
import "../App.css";
import Heading from "./Heading";

function Experience() {
  return (
    <div className="experience flex flex-col ">
      <Heading heading={"Work Experience"} />
      <div className="companies flex flex-col md:flex-row justity-space-between gap-6 px-10 py-4">
        {workExp.map((exp, index) => (
          <div
            key={index}
            className="content-box flex-1 px-4 py-2 w-full min-h-auto bg-slate-700 rounded-lg overflow-hidden relative hover:mx-1 hover:border-2 border-white hover:brightness-110"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <div className="row-1 flex flex-col md:flex-row">
              <div className="details flex-1 flex flex-col px-4 py-4">
                <h2 className="text-xl md:text-4xl md:border-4 rounded-md md:w-fit md:px-4 md:py-2 md:bg-cyan-800 text-slate-100 my-2 ml-4 font-extrabold relative">
                  {exp.Company}
                  <img
                    src={exp.image}
                    alt="logo"
                    className="h-8 w-16 absolute right-0 -top-2 bg-white mt-2 md:hidden rounded-md"
                  />
                </h2>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mb-2 font-semibold text-lg ml-4 hover:text-stone-100"
                >
                  {exp.link}
                </a>
                <h4 className="text-2xl text-left md:text-4xl ml-4 text-slate-300 font-bold">
                  {exp.role}
                </h4>
              </div>
              <img
                src={exp.image}
                alt="logo"
                className="h-12 w-24 hidden md:block my-4 mt-8 bg-stone-50 rounded-md"
              />
            </div>
            <ul className=" list-disc marker:text-sky-500 pl-5">
              {exp.desc.map((point, i) => (
                <li
                  className="px-4 py-2 text-lg md:text-xl text-white from-neutral-100 font-sofia-Pro"
                  key={i}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
