import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { CanvasContext } from "../types";

export class Food extends Particle {
  constructor(x: number, y: number, game: Game, public r: number) {
    super(x, y, game);
  }

  draw(ctx: CanvasContext) {
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x = Math.random() * this.game.width;
    this.y = Math.random() * this.game.height;
  }
}
