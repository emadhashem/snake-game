import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { Part } from "./part/Part";

export class SnakePart extends Particle implements Part {
  prevPart: Part | null = null;
  nextPart: Part | null = null;

  constructor(x: number, y: number, game: Game) {
    super(x, y, game);
  }
  w: number = 15;
  h: number = 15;

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
  }

  update() {
    if (this.prevPart) {
      this.x = this.prevPart.x;
      this.y = this.prevPart.y;
      if (this.game.snake.direction === 2) {
        this.y += 15;
      }
      if (this.game.snake.direction === 4) {
        this.y -= 15;
      }
      if (this.game.snake.direction === 1) {
        this.x += 15;
      }
      if (this.game.snake.direction === 3) {
        this.x -= 15;
      }
    }
  }
}
