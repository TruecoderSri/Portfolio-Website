import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/email";
import "react-social-icons/instagram";
import "react-social-icons/leetcode";
import "../App.css";

import CustomSocialIcon from "./CustomSocialIcon";
function Socials() {
  return (
    <div className="heading-tile flex flex-col md:flex-row rounded-xl shadow-content bg-stone-800 m-8">
      <h1 className="text-5xl md:text-left text-center px-10 py-4 md:text-6xl font-league-spartan text-white flex-1">
        Socials
      </h1>
      <div className="icons flex-1 flex flex-row justify-center flex-wrap gap-8 px-4 py-2 md:px-10 md:py-4">
        <SocialIcon
          network="github"
          url="https://github.com/TruecoderSri"
          target="_blank"
          className="social-icon"
          bgColor="black"
        />
        <SocialIcon
          network="linkedin"
          url="https://linkedin.com/in/connectwithsrijan"
          className="social-icon"
          target="_blank"
          bgColor="black"
        />
        <SocialIcon
          network="email"
          url="mailto:srijan.03sri@gmail.com"
          target="_blank"
          bgColor="black"
          className="social-icon"
        />
        <SocialIcon
          network="leetcode"
          url="https://leetcode.com/CoderSri_02"
          target="_blank"
          bgColor="black"
          className="social-icon"
        />
        <CustomSocialIcon
          network="geeksforgeeks"
          url="https://www.geeksforgeeks.org/user/srijan03sri/"
          target="_blank"
          bgColor="black"
          className="social-icon"
        />
        <SocialIcon
          network="instagram"
          url="https://instagram.com/srijan_021"
          target="_blank"
          bgColor="black"
          className="social-icon"
        />
      </div>
    </div>
  );
}

export default Socials;
