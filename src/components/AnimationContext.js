import { createContext } from "react";

export const AnimationContext = createContext({
  playing: false,
  progress: 0,
  setPlaying: () => {},
  setProgress: () => {},
});
