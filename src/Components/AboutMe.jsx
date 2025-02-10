function AboutMe() {
  return (
    <div className="relative m-8">
      <div className="relative overflow-hidden rounded-2xl shadow-content hover:brightness-110">
        <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-cyan-400 to-fuchsia-500 animate-rotBGimg border-2 border-transparent" />

        <div className="absolute inset-1 z-10 bg-zinc-800 rounded-2xl" />

        <div className="relative z-20 p-6">
          <h1 className="md:text-left text-4xl p-2 md:text-6xl font-league-spartan text-gray-200 m-4 border-b-2 border-gray-400">
            About Me
          </h1>
          <div className="content">
            <p className="text-lg leading-loose md:text-2xl text-gray-200 font-cursive-standard italic">
              Greetings Everyone! As a final year undergrad in Computer Science
              Engineering, I have developed a solid foundation in programming
              languages like C++ and gained practical experience in frontend
              development. Through my internships, I've had fruitful experiences
              in building modern and reliable client projects. Being a
              self-motivated individual with a growth-oriented mindset, I
              possess a strong work ethic, sincere in my efforts, and committed
              to continuous learning and improvement. You can now explore this
              website and feel free to leave any comments or feedback, it really
              means a world to me! Thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
