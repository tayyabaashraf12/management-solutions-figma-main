import React from "react";
import Navigation from "./Navigation/Navigation";
import Account from "./Account/Account";
import NavFeatureCard from "./NavFeatureCard/NavFeatureCard";

const Footer = () => {
  return (
    <div className="w-[280px] h-[476px] pr-[16px] pb-[32px] pl-[16px] flex flex-col gap-[24px] ">
      <NavFeatureCard />
      <Navigation />
      <Account />
    </div>
  );
};

export default Footer;
