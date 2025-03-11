import React from "react";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";

const Footer = () => {
  return (
    <div className="w-[81px] h-[144px] pr-[16px] pb-[24px] pl-[16px] flex flex-col gap-[24px] ">
      <Navigation />
      <Profile />
    </div>
  );
};

export default Footer;
