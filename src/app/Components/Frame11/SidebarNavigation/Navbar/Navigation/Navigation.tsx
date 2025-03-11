import React from "react";
import NavItem1 from "./NavItem1/NavItem1";
import NavItem2 from "./NavItem2/NavItem2";
import NavItem3 from "./NavItem3/NavItem3";
import NavItem4 from "./NavItem4/NavItem4";
import NavItem5 from "./NavItem5/NavItem5";
import NavItem6 from "./NavItem6/NavItem6";
import NavItem7 from "./NavItem7/NavItem7";
import NavItem8 from "./NavItem8/NavItem8";

const Navigation = () => {
  return (
    <div className="w-[280px] h-[348px] px-[16px] flex flex-col gap-[4px]  ">
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
      <NavItem5 />
      <NavItem6 />
      <NavItem7 />
      <NavItem8 />
    </div>
  );
};

export default Navigation;
