import React from "react";
import GoogleSignInText from "./GoogleSignInText/GoogleSignInText";
import SocialIcon from "./SocialIcon/SocialIcon";

const Google = () => {
  return (
    <div className="flex">
      <SocialIcon />
      <GoogleSignInText />
    </div>
  );
};

export default Google;
