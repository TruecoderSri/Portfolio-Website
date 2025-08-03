import workExp from "../data/workExperience";
import "../App.css";
import Heading from "./Heading";

function Experience() {
  return (
    <div className="experience flex flex-col">
      <Heading heading={"Work Experience"} />

      <div className="companies flex flex-wrap justify-center gap-6 px-6 py-4">
        {workExp.map((exp, index) => (
          <div
            key={index}
            className="content-box w-full lg:w-[32%] px-4 py-2 min-h-auto bg-cyan-950 rounded-lg overflow-hidden relative hover:mx-1 hover:border-2 border-white hover:brightness-110"
            style={{ transition: "transform 0.2s ease-in-out" }}
          >
            <div className="border-4 relative flex justify-between items-start bg-cyan-700 rounded-md px-4 py-2 mt-2 w-full">
              <div className="flex flex-col">
                <h2
                  className={`text-slate-100 font-extrabold ${
                    index === 0
                      ? "sm:text-sm md:text-3xl"
                      : "text-xl md:text-4xl"
                  }`}
                >
                  {exp.Company}
                </h2>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-800 text-sm md:text-lg font-bold hover:text-slate-950"
                >
                  {exp.link.replace(/^https?:\/\//, "")}
                </a>
              </div>

              <img
                src={exp.image}
                alt="logo"
                className="sm:h-8 w-16 md:h-16 md:w-24 bg-white rounded-md "
              />
            </div>

            <ul className="list-disc marker:text-sky-500 pl-5">
              {exp.desc.map((point, i) => (
                <li
                  key={i}
                  className="px-4 py-2 text-lg md:text-xl text-white from-neutral-100 font-sofia-Pro"
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
