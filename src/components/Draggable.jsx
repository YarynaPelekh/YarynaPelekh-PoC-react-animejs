import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Draggable.module.css";
import { ItemTypes } from "./Item";

export const Draggable = ({ children, item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <div
        className={styles.item}
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          // fontSize: 25,
          // fontWeight: "bold",
          cursor: "move",
        }}
      >
        {children}
      </div>
    </div>
  );
};
