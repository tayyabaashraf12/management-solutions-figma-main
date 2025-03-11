import React from "react";
import PaginationGroup from "./PaginationGroup/PaginationGroup";
import SystemInventoryRow from "./SystemInventoryRow/SystemInventoryRow";
import FilterNew from "./FilterNew/FilterNew";
import Search from "./Search/Search";
import InventoryHeader from "./InventoryHeader/InventoryHeader";
import HardwareText from "./HardwareText";

const SystemInventoryHardware = () => {
  return (
    <div className="w-[975px] border-2 border-green-400 absolute h-[960px] top-[32px] left-[385px] rounded-[24px] bg-[#FFFFFF]">
      <InventoryHeader />
      <HardwareText />
      <Search />
      <FilterNew />
      <SystemInventoryRow />
      <PaginationGroup />
    </div>
  );
};
export default SystemInventoryHardware;
