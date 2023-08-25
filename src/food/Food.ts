import { Game } from "../game/Game";
import { Particle } from "../particle/Particle";
import { Part } from "../snake-part/part/Part";
import { CanvasContext } from "../types";

export class Food extends Particle implements Part {
  foodImg: HTMLImageElement;
  constructor(
    x: number,
    y: number,
    game: Game,
    public w: number,
    public h: number
  ) {
    super(x, y, game);
    this.foodImg = new Image();
    this.foodImg.src = "../../imgs/snake-food.png";
  }
  prevPart: Part | null = null;
  nextPart: Part | null = null;

  draw(ctx: CanvasContext) {
    ctx.drawImage(this.foodImg, this.x, this.y, 18, 18);
  }

  update() {
    this.x = Math.random() * this.game.width;
    this.y = Math.random() * this.game.height;
  }
}
