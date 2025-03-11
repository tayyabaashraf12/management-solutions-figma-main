import React from "react";
import Welcome from "./Welcome/Welcome";
import BadgeGroup from "./BadgeGroup/BadgeGroup";
import Google from "./Google/Google";
import ManagementSolutions from "./ManagementSolutions/ManagementSolutions";
import FrameLogosContainer from "./FrameLogosContainer/FrameLogosContainer";
import TextContainer from "./TextContainer/TextContainer";

const Frame8 = () => {
  return (
    <div className="w-[1440px] h-[1024px] flex top-[8344px] left-[7597px] bg-[#A21A36]">
      <div>
        <FrameLogosContainer />
        <Welcome />
        <BadgeGroup />
        <Google />
        <TextContainer />
      </div>
      <ManagementSolutions />
    </div>
  );
};

export default Frame8;

//here I am using top-[2px] property temporarily
