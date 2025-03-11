import Image from "next/image";
import React from "react";
import BarchartSquareIcon from "../../../../../../../../SVG/barchart-square2.svg";

const Icon = () => {
  return (
    <Image
      src={BarchartSquareIcon}
      alt="BarchartSquareIcon"
      className="w-[15px] h-[15px] top-[2.5px] left-[2.5px] relative "
    />
  );
};

export default Icon;
