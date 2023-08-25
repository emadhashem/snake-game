import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";

export class GameOver extends Particle {
  constructor(x: number, y: number, game: Game, public text: string) {
    super(x, y, game);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.font = "48px serif";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.x, this.y);
  }
}
