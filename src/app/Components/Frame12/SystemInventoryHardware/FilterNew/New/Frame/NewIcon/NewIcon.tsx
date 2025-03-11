import Image from "next/image";
import React from "react";
import NewPlusIcon from "../../../../../../../SVG/NewPlus.svg";

const NewIcon = () => {
  return (
    <Image src={NewPlusIcon} alt="NewPlusIcon" className="w-[19px] h-[19px]" />
  );
};
export default NewIcon;
