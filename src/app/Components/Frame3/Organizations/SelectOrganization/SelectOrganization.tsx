import React from "react";
import SelectOrganizationText from "./SelectOrganizationText/SelectOrganizationText";
import OrganizationBadgeGroup1 from "./OrganizationBadgeGroup1/OrganizationBadgeGroup1";
import OrganizationBadgeGroup2 from "./OrganizationBadgeGroup2/OrganizationBadgeGroup2";

const SelectOrganization = () => {
  return (
    <div className="w-[306px] h-[134px] top-[498px] left-[565px] flex flex-col justify-center gap-4 ">
      <SelectOrganizationText />
      <OrganizationBadgeGroup1 />
      <OrganizationBadgeGroup2 />
    </div>
  );
};
export default SelectOrganization;
