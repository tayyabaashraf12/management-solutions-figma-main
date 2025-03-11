import React from "react";
import Image from "next/image";
import Frame1Rectangles from "app/SVG/Frame1Rectangles.svg";

const FrameLogosContainer = () => {
  return (
    <div className="w-[65.59px] h-[70px] absolute flex gap-5 top-[461px] left-[687px]">
      <Image
        className=" w-[65.59px] h-[70px]  "
        src={Frame1Rectangles}
        alt="Sidebar1Rectangles"
      />
    </div>
  );
};

export default FrameLogosContainer;
