import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { SnakePart } from "../snake-part/SnakePart";
import { Part } from "../snake-part/part/Part";
import { SnakeInput } from "../types";

export class Snake extends Particle implements Part {
  prevPart: Part | null = null;
  nextPart: Part | null = null;

  tail: SnakePart | null = null;
  direction = 0;

  constructor(
    x: number,
    y: number,
    game: Game,
    public speedX: number,
    public speedY: number,
    public w: number,
    public h: number
  ) {
    super(x, y, game);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(): void {
    if (this.game.keys.includes(SnakeInput.up)) {
      this.y -= this.speedY;
      this.direction = 2;
    } else if (this.game.keys.includes(SnakeInput.down)) {
      this.y += this.speedY;
      this.direction = 4;
    } else if (this.game.keys.includes(SnakeInput.left)) {
      this.x -= this.speedX;
      this.direction = 1;
    } else if (this.game.keys.includes(SnakeInput.right)) {
      this.x += this.speedX;
      this.direction = 3;
    }

    if (this.x > this.game.width) this.x = 0;
    if (this.x < 0) this.x = this.game.width;

    if (this.y > this.game.height) this.y = 0;
    if (this.y < 0) this.y = this.game.height;
  }
}
