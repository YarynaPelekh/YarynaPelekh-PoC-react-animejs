import React from "react";
import styles from "./Item.module.css";

const inlineStyle = {
  fontSize: "18px",
  padding: "2px",
  margin: "auto",
  border: "1px solid darkgray",
};

export const ItemTypes = {
  ITEM: "Item",
};

export const Item = ({ item }) => {
  return (
    <div
      // className={styles.item}
      style={inlineStyle}
    >
      {item}
    </div>
  );
};
