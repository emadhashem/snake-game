import { Game } from "../game/Game";
import { CanvasContext } from "../types";

export abstract class Particle {
  constructor(public x: number, public y: number, public game: Game) {}
  draw(ctx: CanvasContext) {}
  update() {}
}
