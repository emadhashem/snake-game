import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { Part } from "../snake-part/part/Part";
import { SnakeInput } from "../types";

export class Snake extends Particle implements Part {
  prevPart: Part | null = null;
  nextPart: Part | null = null;

  constructor(
    x: number,
    y: number,
    game: Game,
    public speedX: number,
    public speedY: number
  ) {
    super(x, y, game);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 15, 15);
  }

  update(): void {
    if (this.game.keys.includes(SnakeInput.up)) {
      this.y -= this.speedY;
    } else if (this.game.keys.includes(SnakeInput.down)) {
      this.y += this.speedY;
    } else if (this.game.keys.includes(SnakeInput.left)) {
      this.x -= this.speedX;
    } else if (this.game.keys.includes(SnakeInput.right)) {
      this.x += this.speedX;
    }
  }
}
