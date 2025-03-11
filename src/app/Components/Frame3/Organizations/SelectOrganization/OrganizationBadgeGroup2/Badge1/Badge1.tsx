import Image from "next/image";
import React from "react";
import Badge1Order from "../../../../../../SVG/Badge1Order.svg";

const Badge1 = () => {
  return (
    <div className="w-[32px] h-[32px] rounded-[23px]  p-[2px] text-[#000000] flex gap-1]">
      <Image src={Badge1Order} alt="Badg1" className="Badge1Order" />
    </div>
  );
};
export default Badge1;
