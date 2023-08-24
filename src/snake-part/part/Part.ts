import { CanvasContext } from "../../types";

export interface Part {
  prevPart: Part | null;
  nextPart: Part | null;
  x: number;
  y: number;
  draw(ctx: CanvasContext): void;
  update: () => void;
}
