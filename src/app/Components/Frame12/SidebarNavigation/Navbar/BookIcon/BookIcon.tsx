import Image from "next/image";
import React from "react";
import BookIcon2 from "../../../../../SVG/BookIcon2.svg";

const BookIcon = () => {
  return (
    <Image
      src={BookIcon2}
      alt="BookIcon2"
      className="w-[48px] h-[48px] rounded-[6px]
    p-[10px] gap-[8px] bg-[#FFFFFF] relative left-4"
    />
  );
};

export default BookIcon;
