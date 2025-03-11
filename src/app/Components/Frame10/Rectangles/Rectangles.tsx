import Image from "next/image";
import React from "react";
import RectanglesLogo from "../../../SVG/Frame1Rectangles.svg";

const Rectangles = () => {
  return (
    <Image
      src={RectanglesLogo}
      alt="Rectangles Logo"
      className=" relative w-[37.48px] h-[40px] top-[74px] left-[80px] "
    />
  );
};

export default Rectangles;
