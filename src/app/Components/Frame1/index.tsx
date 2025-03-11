import React, { useEffect, useState } from "react";
import FrameLogosContainer from "./FrameLogosContainer/FrameLogosContainer";
import TextContainer from "./TextContainer/TextContainer";
import Frame2 from "../Frame2";
import styles from "./Frame1.module.css"; // Import CSS module

const Frame1 = () => {
  const [showFrame2, setShowFrame2] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        setShowFrame2(true); // After animation, switch component
      }, 300); // Ensure this matches the fade-out duration
    }, 1000); // Delay before transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showFrame2 ? (
        <div className={`${styles.frame} ${fadeOut ? styles.fadeOut : ""}`}>
          <FrameLogosContainer />
          <TextContainer />
        </div>
      ) : (
        <div className={styles.fadeIn}>
          <Frame2 />
        </div>
      )}
    </>
  );
};

export default Frame1;
