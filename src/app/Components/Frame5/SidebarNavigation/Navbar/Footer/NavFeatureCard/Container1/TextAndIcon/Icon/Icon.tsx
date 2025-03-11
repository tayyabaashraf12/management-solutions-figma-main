import Image from "next/image";
import React from "react";
import ButtonCloseIcon from "../../../../../../../../../SVG/ButtonCloseX.svg";

const Icon = () => {
  return (
    <Image
      src={ButtonCloseIcon}
      alt="ButtonCloseIcon"
      className="w-[40px] h-[25px] rounded-lg bottom-1 left-2 relative "
    />
  );
};

export default Icon;
