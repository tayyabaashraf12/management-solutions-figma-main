import React from "react";
import Image from "next/image";
import Socialicon from "../../../../SVG/Social icon.svg";

const SocialIcon = () => {
  return (
    <div className="w-[20px] h-[20px]  absolute top-[281px] left-[137px]   flex items-center justify-center">
      <Image src={Socialicon} alt="Google Icon" />
    </div>
  );
};

export default SocialIcon;
