import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import PlayButton from "./PlayButton/PlayButton";

const Container2 = () => {
  return (
    <div className="w-[216px] h-[136px] rounded-md border-2 relative top-1">
      <ProfileImage />
      <PlayButton />
    </div>
  );
};

export default Container2;
