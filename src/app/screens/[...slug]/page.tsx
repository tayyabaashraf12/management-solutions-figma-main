"use client";

import React, { ReactNode } from "react";
import { useParams } from "next/navigation";
import Frame1 from "app/Components/Frame1";
import Frame2 from "app/Components/Frame2";
import Frame3 from "app/Components/Frame3";
import Frame4 from "app/Components/Frame4";
import NavigationButton from "app/Components/NavigationButton/NavigationButton";
import Frame5 from "app/Components/Frame5";
import Frame6 from "app/Components/Frame6";
import Frame7 from "app/Components/Frame7";
import Frame8 from "app/Components/Frame8";
import Frame9 from "app/Components/Frame9";
import Frame10 from "app/Components/Frame10";
import Frame11 from "app/Components/Frame11";
import Frame12 from "app/Components/Frame12";
import Frame13 from "app/Components/Frame13";
import Frame14 from "app/Components/Frame14";

type FrameMappingType = Record<string, ReactNode>;

const frameMapping: FrameMappingType = {
  frame1: <Frame1 />,
  frame2: <Frame2 />,
  frame3: <Frame3 />,
  frame4: <Frame4 />,
  frame5: <Frame5 />,
  frame6: <Frame6 />,
  frame7: <Frame7 />,
  frame8: <Frame8 />,
  frame9: <Frame9 />,
  frame10: <Frame10 />,
  frame11: <Frame11 />,
  frame12: <Frame12 />,
  frame13: <Frame13 />,
  frame14: <Frame14 />,
};

const orderedFrames = Object.keys(frameMapping);

const ScreenPage = () => {
  const params = useParams();

  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug ?? "frame3";

  const currentIndex = orderedFrames.indexOf(slug);

  // Define forward navigation slug with Frame2 skipped
  const nextSlug =
    currentIndex < orderedFrames.length - 1
      ? orderedFrames[
          currentIndex + (orderedFrames[currentIndex + 1] === "frame2" ? 2 : 1)
        ]
      : orderedFrames[0];

  const backSlug =
    currentIndex > 0
      ? orderedFrames[currentIndex - 1]
      : orderedFrames[orderedFrames.length - 1];

  return (
    <>
      {frameMapping[slug] || <div>404 - Frame not found</div>}
      <NavigationButton nextSlug={nextSlug} backSlug={backSlug} />
    </>
  );
};

export default ScreenPage;
