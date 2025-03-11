import Image from "next/image";
import React from "react";
import LogOutIcon from "../../../../../../../../SVG/FooterButton2.svg";

const LogoutButton = () => {
  return (
    <Image
      src={LogOutIcon}
      alt="LogOutIcon"
      className="w-[36px] h-[36px] rounded-[8px]  absolute"
    />
  );
};

export default LogoutButton;
