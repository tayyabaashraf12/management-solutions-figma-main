"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowRight from "../../SVG/ForwardArrow3.svg";
import BackArrow from "../../SVG/BackArrow-3.svg";

interface NavigationButtonProps {
  nextSlug: string;
  backSlug: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  nextSlug,
  backSlug,
}) => {
  return (
    <div className="w-[120px] h-[35px] absolute top-[900px] z-10 mx-[650px] rounded-[28px] flex justify-between items-center pt-[4px] pr-[4px] pb-[4px] pl-[20px] bg-opacity-value bg-[#2c2c2c] text-[#FFFFFF]">
      {/* Backward Routing Link*/}
      <Link href={`/screens/${backSlug}`} passHref>
        <Image
          src={BackArrow}
          alt="BackArrow"
          className="relative h-5 w-5 cursor-pointer"
        />
      </Link>

      {/* Forward routing Link */}
      <Link href={`/screens/${nextSlug}`} passHref>
        <Image
          src={ArrowRight}
          alt="ArrowNext"
          className="relative mr-[14px] h-5 w-5 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default NavigationButton;
