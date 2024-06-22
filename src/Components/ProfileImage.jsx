import { useEffect, useState } from "react";
import profimg from "../assets/my-image.png";
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
        className={`w-auto scale-75  brightness-125 -translate-y-12 md:-translate-y-24 ${
          loaded ? "animate-slide-up" : ""
        } `}
      />
    </div>
  );
};

export default ProfileImage;
