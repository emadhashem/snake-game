import { Food } from "../food/Food";
import { GameInputHandler } from "../game-input-handler/GameInputHandler";
import { CanvasContext } from "../types";

export class Game {
  food: Food;
  keys: string[] = [];
  gameInputHandler: GameInputHandler;
  constructor(
    public width: number,
    public height: number,
    public ctx: CanvasContext
  ) {
    this.food = new Food(
      Math.random() * this.width,
      Math.random() * this.height,
      this,
      5
    );
    this.gameInputHandler = new GameInputHandler(this);
  }

  draw() {
    this.food.draw(this.ctx);
  }

  update() {
    // this.food.update();
  }
}
