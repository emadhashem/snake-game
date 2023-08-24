import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { Part } from "./part/Part";

export class SnakePart extends Particle implements Part {
  prevPart: Part | null = null;
  nextPart: Part | null = null;

  constructor(x: number, y: number, game: Game) {
    super(x, y, game);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(this.x, this.y, 15, 15);
    ctx.closePath();
  }

  update() {
    if (this.prevPart) {
      this.x = this.prevPart.x;
      this.y = this.prevPart.y;
    }
  }
}
