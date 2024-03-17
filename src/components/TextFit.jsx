import React, { useEffect, useState } from "react";
import styles from "./TextFit.module.css";

const text =
  // " React lets you build user interfaces out of individual pieces called components. ";
  " React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.";
export const TextFit = () => {
  const [fontSize, setFontSize] = useState("20px");

  useEffect(() => {
    const containerHeight = document
      .getElementById("container")
      .getBoundingClientRect().height;
    const element = document.getElementById("text");
    const dimentions = element.getBoundingClientRect();
    console.log("element dimentions", dimentions);
    var style = window
      .getComputedStyle(element, null)
      .getPropertyValue("font-size");
    var fontSizeCurrent = parseFloat(style);
    console.log("element font-size ", fontSizeCurrent);
    if (containerHeight < dimentions.height) {
      //   element.style.fontSize = fontSize - 1 + "px";
      setFontSize(fontSizeCurrent - 1 + "px");
      console.log("decrease font size", fontSize);
    }
  }, [fontSize]);

  console.log("render, current font size", fontSize);
  return (
    <div className={styles.container} id="container">
      <div className={styles.textBox} id="text" style={{ fontSize: fontSize }}>
        {text}
      </div>
    </div>
  );
};
