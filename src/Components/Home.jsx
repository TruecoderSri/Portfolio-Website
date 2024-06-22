import Intro from "./Intro";
import ProfileImage from "./ProfileImage";

function Home() {
  return (
    <div className="home flex flex-col items-center sm:items-start justify-center lg:flex-row h-100% md:h-[100vh] ">
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
