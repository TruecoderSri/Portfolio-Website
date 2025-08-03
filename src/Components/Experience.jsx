// import workExp from "../data/workExperience";
// import "../App.css";
// import Heading from "./Heading";

// function Experience() {
//   return (
//     <div className="experience flex flex-col ">
//       <Heading heading={"Work Experience"} />
//       <div className="companies flex flex-col md:flex-row flex-wrap justify-between gap-6 px-10 py-4">
//         {workExp.map((exp, index) => (
//           <div
//             key={index}
//             className="content-box w-full md:w-[32%] px-4 py-2 min-h-auto bg-cyan-950 rounded-lg overflow-hidden relative hover:mx-1 hover:border-2 border-white hover:brightness-110"
//             style={{ transition: "transform 0.2s ease-in-out" }}
//           >
//             <div className="row-1 flex flex-col md:flex-row">
//               <div className="details flex-1 flex flex-col px-4 py-4">
//                 <h2
//                   className={`md:border-4 rounded-md md:w-fit md:bg-cyan-700 md:px-4 md:py-2 text-slate-100 mt-2 mr-2 font-extrabold relative ${
//                     index === 0 ? "text-sm md:text-3xl" : "text-xl md:text-4xl"
//                   }`}
//                 >
//                   {exp.Company}
//                   <img
//                     src={exp.image}
//                     alt="logo"
//                     className="h-8 w-16 absolute right-0 -top-2 bg-white mt-2 md:hidden rounded-md"
//                   />
//                 </h2>
//                 <a
//                   href={exp.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 mb-2 font-semibold text-lg ml-4 hover:text-stone-100"
//                 >
//                   {exp.link.replace(/^https?:\/\//, "")}
//                 </a>
//                 <h4 className="text-xl text-left md:text-3xl ml-4 text-slate-300 font-bold hover:text-stone-100">
//                   {exp.role}
//                 </h4>
//               </div>
//               <img
//                 src={exp.image}
//                 alt="logo"
//                 className="h-12 w-24 hidden md:block my-4 mt-8 bg-stone-50 rounded-md"
//               />
//             </div>
//             <ul className=" list-disc marker:text-sky-500 pl-5">
//               {exp.desc.map((point, i) => (
//                 <li
//                   className="px-4 py-2 text-lg md:text-xl text-white from-neutral-100 font-sofia-Pro"
//                   key={i}
//                 >
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Experience;

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
