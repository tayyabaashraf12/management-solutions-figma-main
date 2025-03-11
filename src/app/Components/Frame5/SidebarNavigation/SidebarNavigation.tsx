import React from "react";
import Navbar from "./Navbar/Navbar";

const SidebarNavigation = () => {
  return (
    <div className="w-[280px] h-[960px] flex justify-between absolute top-[32px] left-[80px] rounded-[24px] bg-[#59BF78]">
      <Navbar />
    </div>
  );
};
export default SidebarNavigation;
