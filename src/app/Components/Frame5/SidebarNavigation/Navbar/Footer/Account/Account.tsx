import React from "react";
import AvatarLableGroup from "./AvatarLableGroup/AvatarLableGroup";
import Button from "./Button/Button";

const Account = () => {
  return (
    <div className="w-[248px] h-[64px] flex border-t-[1px]  border-[#FFFFFF] pt-[24px] pr-[32px] pl-[8px] gap-[47px]">
      <AvatarLableGroup />
      <Button />
    </div>
  );
};

export default Account;
