import Image from "next/image";
import React from "react";
import NavbarOrderIcon from "../../../../../../SVG/NavOrderIcon.svg";

const OrderIcon = () => {
  return (
    <Image
      src={NavbarOrderIcon}
      alt="NavbarOrderIcon"
      className="w-[48px] h-[48px] rounded-[6px]
    p-[10px] gap-[8px] bg-[#FFFFFF]"
    />
  );
};

export default OrderIcon;
