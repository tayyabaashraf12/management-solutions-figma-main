import React from "react";
import Header from "./Header/Header";

import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

const Navbar = () => {
  return (
    <div className="w-[280px] h-[452px] pt-[32px] flex flex-col gap-[24px] ">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
};

export default Navbar;
