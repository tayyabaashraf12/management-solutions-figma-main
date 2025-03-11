import Image from "next/image";
import React from "react";
import BackArrow1 from "../../../../../../SVG/BackArrow1.svg";

const Page1 = () => {
  return (
    <div
      className="w-[38px] h-[38px] rounded-[12px] p-[10px] flex 
    shadow-[0px_6.23px_28.48px_-1.78px_rgba(24,39,75,0.12),0px_3.56px_9.79px_-2.67px_rgba(24,39,75,0.12)] 
     gap-[10px] bg-[#FFFFFF]"
    >
      <Image src={BackArrow1} alt="BackArrow1" className="w-[18px] h-[18px]" />
    </div>
  );
};
export default Page1;
