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
  headImg: HTMLImageElement = new Image();

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
    this.headImg.src = "../../imgs/snake-up.png";
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // ctx.fillStyle = "white";
    // ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.drawImage(this.headImg, this.x, this.y, this.w, this.h);
  }

  update(): void {
    if (this.game.keys.includes(SnakeInput.up)) {
      this.y -= this.speedY;
      this.direction = 2;
      this.headImg.src = "../../imgs/snake-up.png";
    } else if (this.game.keys.includes(SnakeInput.down)) {
      this.y += this.speedY;
      this.direction = 4;
      this.headImg.src = "../../imgs/snake-down.png";
    } else if (this.game.keys.includes(SnakeInput.left)) {
      this.x -= this.speedX;
      this.direction = 1;
      this.headImg.src = "../../imgs/snake-left.png";
    } else if (this.game.keys.includes(SnakeInput.right)) {
      this.x += this.speedX;
      this.direction = 3;
      this.headImg.src = "../../imgs/snake-right.png";
    }

    if (this.x > this.game.width) this.x = 0;
    if (this.x < 0) this.x = this.game.width;

    if (this.y > this.game.height) this.y = 0;
    if (this.y < 0) this.y = this.game.height;
  }
}
