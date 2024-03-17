import React from "react";
import styles from "./RightPanel.module.css";

export const RightPanel = ({ adFormatRef }) => {
  const exportDiv = () => {
    if (!adFormatRef.current) return;
    const divContent = adFormatRef.current.current.innerHTML;
    const blob = new Blob([divContent], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "adFormat.html";
    a.click();
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Right panel</p>
      <button className={styles.button} onClick={exportDiv}>
        Save
      </button>
   </div>
  );
};
