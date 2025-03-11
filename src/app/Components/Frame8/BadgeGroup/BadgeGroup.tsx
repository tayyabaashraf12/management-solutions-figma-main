import React from "react";
import Badge from "./Badge";

const BadgeGroup = () => {
  return (
    <div className="w-[305px] h-[42px] absolute top-[212px] left-[80px] rounded-[28px] flex justify-between items-center pt-[4px] pr-[4px] pb-[4px] pl-[20px] bg-[#F9FAFB3B]">
      <div className="font-[Roboto] font-normal text-[14px] leading-[20px] text-[#D0D5DD]">
        ReeseTuttle@li.com
      </div>
      <Badge />
    </div>
  );
};

export default BadgeGroup;
