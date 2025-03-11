import React from "react";
import Badge2Arrow from "../../../../../../SVG/Badge2Arrow.svg";
import Image from "next/image";

const Badge2 = () => {
  return (
    <div className="w-[32px] h-[32px] rounded-[23px] text-lg  py-[2px]   flex gap-1">
      <Image src={Badge2Arrow} alt="Badge2Arrow" className=" " />
    </div>
  );
};
export default Badge2;
