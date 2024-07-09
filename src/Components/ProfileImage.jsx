import { useEffect, useState } from "react";
import profimg from "../assets/profile_pic.png";
import "../assets/ProfileImage.css";
const ProfileImage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profimg;
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div className="Profile-container p-0 m-0 h-auto min-w-full flex justify-center md:justify-start">
      <img
        src={profimg}
        alt="prof-image"
        className={`w-auto mb-12 transition-all duration-500 ease-in-out transform ${
          loaded ? "animate-slide-up" : "translate-y-10 opacity-0"
        }  hover:brightness-110`}
      />
    </div>
  );
};

export default ProfileImage;
