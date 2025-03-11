import React from "react";
import CheckDoneIcon from "./CheckDoneIcon/CheckDoneIcon";
import NewText from "./InventoryHeaderText/NewText";
import RightIcon from "./RightIcon/RightIcon";

const InventoryHeader = () => {
  return (
    <div
      className="flex w-[248px] absolute
     h-[40px] top-[27px] left-[28px] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
    >
      <CheckDoneIcon />
      <NewText />
      <RightIcon />
    </div>
  );
};
export default InventoryHeader;
