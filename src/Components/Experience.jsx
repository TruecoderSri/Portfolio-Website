import workExp from "../data/workExperience";
import "../App.css";

function Experience() {
  return (
    <div className="experience flex flex-col">
      <h1 className=" heading md:text-left text-center text-4xl px-10 py-4 md:text-6xl font-league-spartan text-white shadow-content mx-8 my-4 rounded-xl bg-cyan-900 m-8">
        Work Experience
      </h1>
      <div className="companies flex flex-col md:flex-row justity-space-between gap-6 px-10 py-4">
        {workExp.map((exp, index) => (
          <div
            key={index}
            className="content-box flex-1 px-4 py-2 w-full min-h-auto bg-slate-700 rounded-lg overflow-hidden relative hover:border-4 border-white hover:mx-1"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <div className="row-1 flex flex-col md:flex-row">
              <div className="details flex-1 flex flex-col px-4 py-4">
                <h2 className="text-lg md:text-4xl text-slate-100 my-2 font-extrabold relative">
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
                  className="text-blue-500 mb-2 font-semibold text-lg hover:text-stone-100"
                >
                  {exp.link}
                </a>
                <h4 className="text-lg text-left md:text-2xl text-white font-bold">
                  {exp.role}
                </h4>
              </div>
              <img
                src={exp.image}
                alt="logo"
                className="h-12 w-24 hidden md:block my-4 bg-stone-50"
              />
            </div>
            <ul>
              {exp.desc.map((point, i) => (
                <li
                  className="px-4 py-4 leading-6 text-lg md:text-xl text-white font-league-spartan text-justify"
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
