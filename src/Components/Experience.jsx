import workExp from "../data/workExperience";
import "../App.css";

function Experience() {
  return (
    <div className="experience flex flex-col ">
      <h1 className=" heading md:text-left text-center text-4xl px-10 py-4 md:text-6xl font-league-spartan text-white shadow-content mx-8 my-4 rounded-xl bg-cyan-900 m-8">
        Work Experience
      </h1>
      <div className="companies flex flex-col md:flex-row justity-space-between gap-6 px-10 py-4">
        {workExp.map((exp, index) => (
          <div
            key={index}
            className="content-box flex-1 px-4 py-2 w-full min-h-auto bg-slate-700 rounded-lg overflow-hidden relative hover:mx-1 hover:border-2 border-white hover:brightness-110"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <div className="row-1 flex flex-col md:flex-row">
              <div className="details flex-1 flex flex-col px-4 py-4">
                <h2 className="text-lg md:text-4xl md:border-4 rounded-md md:w-fit md:px-4 md:py-2 md:bg-cyan-800 text-slate-100 my-2 ml-4 font-extrabold relative">
                  {exp.Company}
                  <img
                    src={exp.image}
                    alt="logo"
                    className="h-8 w-16 absolute right-0 -top-2 bg-white mt-2 md:hidden"
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
                <h4 className="text-lg text-left md:text-2xl ml-4 text-white font-bold">
                  {exp.role}
                </h4>
              </div>
              <img
                src={exp.image}
                alt="logo"
                className="h-12 w-24 hidden md:block my-4 mt-8 bg-stone-50"
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
