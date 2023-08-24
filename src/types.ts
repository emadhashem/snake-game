export type CanvasContext = CanvasRenderingContext2D;

export enum SnakeInput {
  up = "w",
  down = "s",
  left = "a",
  right = "d",
}

export type Rectangle = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
