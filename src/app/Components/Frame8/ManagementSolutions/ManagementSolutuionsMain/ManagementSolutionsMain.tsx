import Image from "next/image";
import React from "react";
import Barcodeamico1 from "../../../../SVG/Barcode-amico 1.svg";
import EditingBodyTextBro from "../../../../SVG/Editing body text-bro 1.svg";
import ManagementContainer from "./ManagementContainer/ManagementContainer";

const ManagementSolutuionsMain = () => {
  return (
    <div className="w-[906px] h-[940px] absolute top-[42px] left-[42px] rounded-[45px] bg-[#F15B6C] bg-opacity-58 ">
      <Image
        src={Barcodeamico1}
        alt="Barcode-Amico1"
        className="w-[500px] h-[500px] top-[2px]  absolute "
      />
      <ManagementContainer />
      <Image
        src={EditingBodyTextBro}
        alt="Editing Body Text Bro"
        className="w-[500px] h-[500px] top-[451px] left-[430px]  absolute"
      />
    </div>
  );
};

export default ManagementSolutuionsMain;
