import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const SidebarNavigation = () => {
  return (
    <div className="w-[82px] h-[960px] flex flex-col justify-between absolute top-[32px] left-[80px] rounded-[24px] bg-[#071410]">
      <Navbar />
      <Footer />
    </div>
  );
};
export default SidebarNavigation;
