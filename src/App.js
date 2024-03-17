import { useState, useRef } from "react";
import "./App.css";
import styles from "./App.module.css";

import AnimationWithTimeLine from "./components/AnimationWithTimeLine";
import { TimeLineControls } from "./components/TimeLineControls";
import { AnimationContext } from "./components/AnimationContext";
import { LeftPanel } from "./components/LeftPanel";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AdFormat from "./components/AdFormat";
import { RightPanel } from "./components/RightPanel";
import { TextFit } from "./components/TextFit";
import { CropImage } from "./components/CropImage";
import { SvgWithContainer } from "./components/SvgWithContainer";

function App() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(false);
  const adFormatRef = useRef(null);

  const value = { playing, progress, setPlaying, setProgress };

  return (
    <div className="App">
      <div className={styles.page}>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.section}>
            <LeftPanel />
            <AdFormat ref={adFormatRef} />
            <RightPanel adFormatRef={adFormatRef} />
          </div>
          <div className={styles.section}>
            <AnimationContext.Provider value={value}>
              <AnimationWithTimeLine />
              <TimeLineControls />
            </AnimationContext.Provider>
          </div>
        </DndProvider>
        <TextFit />
        <CropImage />
        <SvgWithContainer />
      </div>
    </div>
  );
}

export default App;
