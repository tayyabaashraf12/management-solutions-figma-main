import React from "react";
import OrderIcon from "./OrderIcon/OrderIcon";
import HeaderText from "./HeaderText/HeaderText";

const Header = () => {
  return (
    <div className="w-[280px] relative  top-20 h-[48px] px-[16px] flex items-center gap-[12px]">
      <OrderIcon />
      <HeaderText />
    </div>
  );
};

export default Header;
