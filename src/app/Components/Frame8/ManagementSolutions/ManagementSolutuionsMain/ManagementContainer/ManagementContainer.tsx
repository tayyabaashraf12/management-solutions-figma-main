import React from "react";
import ManagementContainerText1 from "./ManagementContainerText/ManagementContainerText1";
import ManagementContainerText2 from "./ManagementContainerText/ManagementContainerText2";
import InventoryContainer from "./InventoryContainer/InventoryContainer";

const ManagementContainer = () => {
  return (
    <div className="w-[628px] h-[276.5px]    absolute top-[332px] left-[139px]">
      <ManagementContainerText1 />
      <InventoryContainer />
      <ManagementContainerText2 />
    </div>
  );
};
export default ManagementContainer;
