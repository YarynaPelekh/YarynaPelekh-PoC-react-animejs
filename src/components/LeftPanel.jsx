import React from "react";
import styles from "./LeftPanel.module.css";
import { Item } from "./Item";
import { Draggable } from "./Draggable";

const items = ["Rectangle", "Image", "Text"];

export const LeftPanel = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Left panel</p>
      <div className={styles.items}>
        {items.map((item) => (
          <Draggable item={item} key={item}>
            <Item item={item} />
          </Draggable>
        ))}
      </div>
    </div>
  );
};
