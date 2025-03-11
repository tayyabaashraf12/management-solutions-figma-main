"use client";
import React from "react";

import WalletForm from "./WalletForm/WalletForm";
import WalletForm2 from "./WalletForm2/WalletForm2";

const WalletDetails = () => {
  return (
    <div className="w-[975px] absolute h-[1000px] top-[32px] left-[385px] rounded-[24px] bg-[#FFFFFF]">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 relative left-10 top-4">
        Wallet Details
      </h2>
      <WalletForm />
      <WalletForm2 />
    </div>
  );
};

export default WalletDetails;
