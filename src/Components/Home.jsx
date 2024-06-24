import Intro from "./Intro";
import ProfileImage from "./ProfileImage";
import "../App.css";
function Home() {
  return (
    <div className="home-section flex flex-col items-center lg:items-start justify-center lg:flex-row md:h-[100%] lg:h-[100vh] w-full">
      <div className="flex-1 mt-4 justify-center md:flex-none md:w-3/5 md:mt-40">
        <Intro />
      </div>
      <div className="profileimage flex-1 md:flex-none md:w-2/5">
        <ProfileImage />
      </div>
    </div>
  );
}

export default Home;
