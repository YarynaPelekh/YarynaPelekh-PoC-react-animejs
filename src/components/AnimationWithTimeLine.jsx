import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./AnimationWithTimeLine.module.css";
import anime from "animejs/lib/anime.es.js";
import { AnimationContext } from "./AnimationContext";

const AnimationWithTimeLine = () => {
  const { playing, setProgress, setPlaying } = useContext(AnimationContext);

  const animation = useRef(null);

  useEffect(() => {
    const controlsProgressEl = document.querySelector(".progress");
    animation.current = anime.timeline({
      autoplay: false,
      easing: "linear",
      // delay: 2000,
      duration: 2000,
      update: function (anim) {
        controlsProgressEl.value = animation.current.progress;
        setProgress(animation.current.progress);
      },
    });
    // Add children
    animation.current
      .add({
        targets: "#square",
        translateX: 200,
      })
      .add(
        {
          targets: "#circle",
          translateX: 300,
        }
        // "-=1000"
      )
      .add(
        {
          targets: "#triangle",
          translateX: 100,
        }
        // "-=5000"
      );
  }, [setProgress]);

  useEffect(() => {
    if (!playing) {
      animation.current.pause();
    } else {
      animation.current.play();
    }
  }, [playing]);

  return (
    <div className={styles.container} id="divToPDF">
      <div className={styles.square} id="square"></div>
      <div className={styles.circle} id="circle"></div>
      <div className={styles.triangle} id="triangle"></div>
    </div>
  );
};

export default AnimationWithTimeLine;
