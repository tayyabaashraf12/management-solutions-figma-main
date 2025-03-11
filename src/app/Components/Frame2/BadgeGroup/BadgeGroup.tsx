import React, { useState } from "react";
import Badge from "./Badge";

const BadgeGroup = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="w-[305px] h-[42px] absolute top-[212px] left-[80px] rounded-[28px] flex justify-between items-center pt-[4px] pr-[4px] pb-[4px] pl-[20px] bg-[#F9FAFB3B]">
      <input
        type="email"
        placeholder="ReeseTuttle@li.com"
        className="font-roboto font-normal text-[14px] leading-[20px]  text-[#D0D5DD]
        outline-none border-none bg-transparent w-full"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <Badge />
    </div>
  );
};

export default BadgeGroup;
