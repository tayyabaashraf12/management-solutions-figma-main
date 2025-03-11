import Image from "next/image";
import React from "react";
import RectanglesLogo from "../../../../SVG/Frame1Rectangles.svg";

const Rectangles = () => {
  return (
    <Image
      src={RectanglesLogo}
      alt="Rectangles Logo"
      className=" w-[37.48px] h-[40px] top-[393px] left-[699px]"
    />
  );
};

export default Rectangles;
