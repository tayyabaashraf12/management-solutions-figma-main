import Image from "next/image";
import React from "react";

import RectanglesIcon from "../../../../../SVG/Frame1Rectangles.svg";

const Header = () => {
  return (
    <Image
      src={RectanglesIcon}
      alt="RectanglesIcon"
      className="w-[81px] h-[40px] px-[20px]"
    />
  );
};

export default Header;
