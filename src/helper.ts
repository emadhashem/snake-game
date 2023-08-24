import { Part } from "./snake-part/part/Part";

export const makeRect = (part: Part) => {
  return {
    x1: part.x,
    x2: part.x + part.w,
    y1: part.y,
    y2: part.y + part.h,
  };
};
