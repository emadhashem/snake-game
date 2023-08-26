import { Food } from "../food/Food";
import { GameInputHandler } from "../game-input-handler/GameInputHandler";
import { SnakePart } from "../snake-part/SnakePart";
import { Part } from "../snake-part/part/Part";
import { Snake } from "../snake/Snake";
import { CanvasContext, Rectangle } from "../types";
import { makeRect } from "../helper";
import { GameOver } from "../GameOver/GameOver";

export class Game {
  food: Food;
  keys: string[] = [];
  gameInputHandler: GameInputHandler;
  snake: Snake;
  score = 0;
  gameOver: GameOver | null = null;

  constructor(
    public width: number,
    public height: number,
    public ctx: CanvasContext
  ) {
    this.food = new Food(
      Math.random() * this.width,
      Math.random() * this.height,
      this,
      18,
      18
    );
    this.gameInputHandler = new GameInputHandler(this);
    this.snake = new Snake(width / 2, height / 2, this, 5, 5, 15, 15);
  }

  addNewPart() {
    if (this.snake.tail) {
      const newPart = new SnakePart(
        this.snake.tail.x + 15,
        this.snake.tail.y,
        this
      );
      newPart.prevPart = this.snake.tail;
      this.snake.tail.nextPart = newPart;
      this.snake.tail = this.snake.tail.nextPart;
      this.snake.tail.nextPart = null;
      this.snake.tail.prevPart!.partImg.src = "../../imgs/snake-part.png";
      
    } else {
      const newPart = new SnakePart(this.snake.x + 15, this.snake.y, this);
      this.snake.nextPart = this.snake.tail = newPart;
      newPart.prevPart = this.snake;
      this.snake.tail.prevPart = this.snake;
    }
  }

  checkIf2RectOverlap(rec1: Rectangle, rec2: Rectangle) {
    if (rec1.x2 <= rec2.x1 || rec2.x2 <= rec1.x1) return false;
    if (rec1.y2 <= rec2.y1 || rec2.y2 <= rec1.y1) return false;

    return true;
  }

  updateTailImg() {
    if (!this.snake.tail) return;
    if (this.snake.direction === 2 || this.snake.direction === 0) {
      this.snake.tail.partImg.src = "../../imgs/snake-tail-up.png";
    }
    if (this.snake.direction === 4) {
      this.snake.tail.partImg.src = "../../imgs/snake-tail-down.png";
    }
    if (this.snake.direction === 1) {
      this.snake.tail.partImg.src = "../../imgs/snake-tail-left.png";
    }
    if (this.snake.direction === 3) {
      this.snake.tail.partImg.src = "../../imgs/snake-tail-right.png";
    }
  }

  checkIfSnakePartsOverlap(part: Part | null): boolean {
    if (part && part.nextPart) {
      let curPart: Part | null = part.nextPart;
      while (curPart) {
        if (this.checkIf2RectOverlap(makeRect(this.snake), makeRect(curPart)))
          return true;
        curPart = curPart.nextPart;
      }
    }
    return false;
  }

  updateSnakeParts(part: Part | null) {
    if (part && part.prevPart) {
      part.update();
      this.updateSnakeParts(part.prevPart);
    }
  }

  drawSnakeParts(part: Part | null) {
    if (part) {
      part.draw(this.ctx);
      this.drawSnakeParts(part.nextPart);
    }
  }

  draw() {
    this.food.draw(this.ctx);
    this.snake.draw(this.ctx);
    this.drawSnakeParts(this.snake.nextPart);

    if (this.checkIfSnakePartsOverlap(this.snake.nextPart)) {
      this.gameOver = new GameOver(
        this.width / 2,
        this.height / 2,
        this,
        "Game over"
      );
      this.gameOver.draw(this.ctx);
    }
  }

  update() {
    this.snake.update();
    this.updateSnakeParts(this.snake.tail);
    this.updateTailImg();
    if (this.checkIf2RectOverlap(makeRect(this.snake), makeRect(this.food))) {
      this.score++;
      this.food.update();
      if (this.score % 1 === 0) {
        this.addNewPart();
      }
    }
  }
}
