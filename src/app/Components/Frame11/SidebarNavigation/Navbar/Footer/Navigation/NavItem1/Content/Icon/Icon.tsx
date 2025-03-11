import Image from "next/image";
import React from "react";
import SettingsIcon from "../../../../../../../../../SVG/settings.svg";

const Icon = () => {
  return (
    <Image
      src={SettingsIcon}
      alt="SettingsIcon"
      className="w-[20px] h-[20px]"
    />
  );
};

export default Icon;
