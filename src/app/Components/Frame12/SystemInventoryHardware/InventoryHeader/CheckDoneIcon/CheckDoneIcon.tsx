import Image from "next/image";
import React from "react";
import CheckDone from "../../../../../SVG/check-done.svg";

const CheckDoneIcon = () => {
  return <Image src={CheckDone} alt="CheckDone" className="w-20px h-[20px]" />;
};
export default CheckDoneIcon;
