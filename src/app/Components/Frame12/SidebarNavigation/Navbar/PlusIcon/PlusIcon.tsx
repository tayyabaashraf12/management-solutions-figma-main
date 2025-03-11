import Image from "next/image";
import React from "react";
import PlusIcon2 from "../../../../../SVG/PlusIcon.svg";

const PlusIcon = () => {
  return (
    <Image
      src={PlusIcon2}
      alt="NavbarOrderIcon"
      className="w-[20px] h-[20px]  relative left-7"
    />
  );
};

export default PlusIcon;
