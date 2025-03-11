import Image from "next/image";
import React from "react";
import CheckDoneIconNavigation from "../../../../../../../../SVG/CheckDoneIconNavigation.svg";

const Icon = () => {
  return (
    <Image
      src={CheckDoneIconNavigation}
      alt="BarchartSquareIcon"
      className="w-[16.7px] h-[16.7px] top-[1.67px] left-[1.67px] relative  "
    />
  );
};

export default Icon;
