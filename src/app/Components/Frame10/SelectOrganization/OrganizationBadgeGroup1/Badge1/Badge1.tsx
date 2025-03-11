import Image from "next/image";
import React from "react";
import Badge1Book from "../../../../../SVG/Badge1Book.svg";

const Badge1 = () => {
  return (
    <div className="w-[32px] h-[32px] rounded-[23px]  p-[2px] text-[#000000] flex gap-1]">
      <Image src={Badge1Book} alt="Badg1" className="" />
    </div>
  );
};
export default Badge1;
