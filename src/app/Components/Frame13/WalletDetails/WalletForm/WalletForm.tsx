"use client";
import React from "react";
import FormNew from "./Form/FormNew";

const WalletForm: React.FC = () => {
  return (
    <div className="w-[920px] h-[550px] relative top-[5px] left-[28px] bg-white shadow-lg rounded-lg p-6">
      {/* <Form /> */}
      <FormNew />
    </div>
  );
};

export default WalletForm;
