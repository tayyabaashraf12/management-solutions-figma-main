import React from "react";
import Welcome from "./Welcome/Welcome";
import BadgeGroup from "./BadgeGroup/BadgeGroup";
import Google from "./Google/Google";
import ManagementSolutions from "./ManagementSolutions/ManagementSolutions";
import FrameLogosContainer from "./FrameLogosContainer/FrameLogosContainer";
import TextContainer from "./TextContainer/TextContainer";
import NavigationButton from "../NavigationButton/NavigationButton";

const Frame2 = () => {
  return (
    <div className="w-[1440px] h-[1024px] top-[7062px] flex bg-[#071410] left-[7597px]">
      <>
        <FrameLogosContainer />
        <Welcome />
        <BadgeGroup />
        <Google />
        <TextContainer />
        <NavigationButton nextSlug="frame3" backSlug="frame1" />
      </>
      <ManagementSolutions />
    </div>
  );
};

export default Frame2;

//here I am using top-[2px] property temporarily
