import React, { useContext } from "react";
import { AnimationContext } from "./AnimationContext";
import styles from "./TimeLineControls.module.css";

export const TimeLineControls = () => {
  const { playing, setPlaying, progress } = useContext(AnimationContext);
  return (
    <div className={styles.container}>
      <input
        className="progress"
        step=".002"
        type="range"
        min="0"
        max="100"
        value={progress || 0}
        onChange={() => {}}
      ></input>
      <button
        className={styles.button}
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};
