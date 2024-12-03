// function AboutMe() {
//   return (
//     <div className="px-10 py-4 bg-zinc-800 m-8 shadow-content rounded-2xl hover:brightness-110">
//       <h1 className="md:text-left text-4xl p-2 md:text-6xl font-league-spartan text-gray-200 m-4 border-b-2 border-gray-400 ">
//         About Me
//       </h1>
//       <div className="content">
//         <p className="p-4 text-lg  leading-loose md:text-2xl text-gray-200  font-cursive-standard italic">
//           {/* Greetings Everyone ! As a third-year undergrad in Computer Science
//           Engineering, I have developed a solid foundation in programming
//           languages like C++ and gained practical experience in frontend
//           development. Through my internships, I've had pleasurable experiences
//           in building modern and reliable client projects. Being a self
//           motivated individual with a growth-oriented mindset I possess a strong
//           work ethic, sincere in my efforts and committed to continuous learning
//           and improvement. You can now explore this website and feel free to
//           leave any comments or feedback, it really means a world to me ! Thank
//           you. */}
//           As a final-year Computer Science student, I've developed strong
//           programming skills by solving over <b>1,200</b> algorithmic problems
//           on platforms like Leetcode and GFG. During my React Developer
//           internship, I built the frontend for a software management portal that
//           serves <b>1,000+</b> daily visitors. Morevoer, developed a full-stack
//           member portal for my university’s ACM society, currently serving{" "}
//           <b>200+</b> active members. Through my project <b>Quizzy</b>, an
//           accessible and interactive quiz platform, I developed features to
//           assist people with disabilities. Driven by a growth-oriented mindset,
//           I am eager to take on roles that challenge me, push me out of my
//           comfort zone, and foster continuous learning.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

function AboutMe() {
  return (
    <section className="px-10 py-4 bg-zinc-800 m-8 shadow-content rounded-2xl hover:brightness-110">
      <h1 className="md:text-left text-4xl p-2 md:text-6xl font-league-spartan text-gray-200 m-4 border-b-2 border-gray-400">
        About Me
      </h1>
      <div className="content">
        <p className="p-4 text-lg leading-loose md:text-2xl text-gray-200 font-cursive-standard italic">
          As a final-year Computer Science student, I've developed strong
          programming skills by solving over{" "}
          <b className="text-teal-400">1,200</b> algorithmic problems on
          platforms like Leetcode and GFG. During my React Developer internship,
          I built the frontend for a software management portal that serves{" "}
          <b className="text-teal-400">1,000+</b> daily visitors. Moreover, I
          developed a full-stack member portal for my university’s ACM society,
          currently serving <b className="text-teal-400">200+</b> active
          members. Through my project <b className="text-teal-400">Quizzy</b>,
          an accessible and interactive quiz platform, I got to work on features
          to assist people with disabilities. Driven by a growth-oriented
          mindset, I am eager to take on roles that challenge me, push me out of
          my comfort zone, and foster continuous learning. Feel free to explore
          the site, and if something catches your eye (or doesn't), drop a
          comment in the below form, your suggestions matter ✨!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
