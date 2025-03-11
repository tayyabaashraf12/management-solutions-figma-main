import React from "react";
import Badge1 from "./Badge1/Badge1";
import Badge2 from "./Badge2/Badge2";
import OrganizationBadgeGroup1Text from "./OrganizationBadgeGroup1Text/OrganizationBadgeGroup1Text";

const OrganizationBadgeGroup1 = () => {
  return (
    <div className="w-[306px] h-[42px] rounded-[28px] flex items-center justify-between p-1 bg-[#F9FAFB3B] ">
      <Badge1 />
      <OrganizationBadgeGroup1Text />
      <Badge2 />
    </div>
  );
};
export default OrganizationBadgeGroup1;
