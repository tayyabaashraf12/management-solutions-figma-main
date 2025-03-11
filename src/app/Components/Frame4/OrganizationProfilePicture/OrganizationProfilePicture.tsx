import Image from "next/image";
import React from "react";
import OrganizationProfilePic from "../../../SVG/OrganizationProfilePicture.svg";

const OrganizationProfilePicture = () => {
  return (
    <div className="w-[72px] h-[72px] top-[370px] left-[682px] relative ">
      <Image src={OrganizationProfilePic} alt="OrganizationProfilePic" />
    </div>
  );
};
export default OrganizationProfilePicture;
