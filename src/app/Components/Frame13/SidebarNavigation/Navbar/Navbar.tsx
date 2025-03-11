import React from "react";
import Header from "./Header/Header";

import Footer from "./Footer/Footer";

const Navbar = () => {
  return (
    <div className="w-[280px] h-[452px]  pt-[32px] flex flex-col gap-[24px] ">
      <Header />
      <Footer />
    </div>
  );
};

export default Navbar;
