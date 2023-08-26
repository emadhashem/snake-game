import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { Part } from "./part/Part";

export class SnakePart extends Particle implements Part {
  prevPart: SnakePart | null = null;
  nextPart: SnakePart | null = null;

  partImg = new Image();

  constructor(x: number, y: number, game: Game) {
    super(x, y, game);
    this.partImg.src = "../../imgs/snake-part.png";
  }
  w: number = 15;
  h: number = 15;

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.partImg, this.x, this.y, this.w, this.h);
  }

  update() {
    if (this.prevPart) {
      this.x = this.prevPart.x;
      this.y = this.prevPart.y;
      if (this.game.snake.direction === 2) {
        this.y += 10;
      }
      if (this.game.snake.direction === 4) {
        this.y -= 10;
      }
      if (this.game.snake.direction === 1) {
        this.x += 11;
      }
      if (this.game.snake.direction === 3) {
        this.x -= 11;
      }
    }
  }
}
