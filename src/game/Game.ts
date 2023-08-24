import { Food } from "../food/Food";
import { GameInputHandler } from "../game-input-handler/GameInputHandler";
import { Snake } from "../snake/Snake";
import { CanvasContext } from "../types";

export class Game {
  food: Food;
  keys: string[] = [];
  gameInputHandler: GameInputHandler;
  snake: Snake;
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
    this.snake = new Snake(width / 2, height / 2, this, 3, 3);
  }

  draw() {
    this.food.draw(this.ctx);
    this.snake.draw(this.ctx);
  }

  update() {
    // this.food.update();
    this.snake.update();
  }
}
