import Image from "next/image";
import React from "react";
import InventoryContainerImages from "../../../../../../SVG/InventoryIcon2.svg";

const InventoryContainer = () => {
  return (
    <div className="w-[628px] h-[123.5px] top-[451px] left-[139px]  ">
      <Image
        src={InventoryContainerImages}
        alt="Inventory Container"
        className=""
      />
    </div>
  );
};
export default InventoryContainer;
