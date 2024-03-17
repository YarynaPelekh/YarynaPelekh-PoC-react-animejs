import React, { useState, useRef, useImperativeHandle } from "react";
import styles from "./AdFormat.module.css";

import { useDrop } from "react-dnd";
import { Item, ItemTypes } from "./Item";

const inlineStyles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100%",

    minWidth: "400px",
    maxWidth: "400px",
    minHeight: "150px",
    maxHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    backgroundColor: "beige",
    border: "1px solid darkgray",
  },

  hover: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: "1",
    opacity: "0.3",
    backgroundColor: "greenyellow",
  },
};

const AdFormat = React.forwardRef((props, ref) => {
  const divRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getYLocation: () => divRef.current?.getBoundingClientRect().top,
    current: divRef.current,
  }));

  const [objects, setObjects] = useState([]);

  const moveItem = (itemFrom, monitor) => {
    setObjects((objects) => {
      return [...objects, itemFrom.item];
    });
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: (itemFrom, monitor) => {
      moveItem(itemFrom, monitor);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={divRef}>
      <div
        // className={styles.container}
        style={inlineStyles.container}
        id="divToPDF"
        ref={drop}
      >
        {isOver && (
          <div
            // className={styles.hover}
            style={inlineStyles.hover}
          />
        )}
        {objects.map((object) => (
          <Item item={object} key={object} />
        ))}
      </div>
    </div>
  );
});

export default AdFormat;
