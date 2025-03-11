import React from "react";
import Image from "next/image";
import ArrowRight from "app/SVG/ArrowRight.svg";

const Badge = () => {
  return (
    <div className="w-[32px] h-[32px] border border-gray-300 rounded-[23px] px-[10px] py-[2px] gap-1 bg-[#071410]  flex justify-center items-center">
      <div className="w-3 h-3 flex justify-center items-center">
        <Image
          src={ArrowRight}
          alt="click next"
          className="w-[7px] h-[7px] top-[2.5px] left-[2.5px] "
        />
      </div>
    </div>
  );
};

export default Badge;
