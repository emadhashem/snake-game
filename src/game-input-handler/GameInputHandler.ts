import { Game } from "../game/Game";
import { SnakeInput } from "../types";

export class GameInputHandler {
  constructor(public game: Game) {
    this.configure();
  }

  private configure() {
    window.addEventListener("keydown", (ev: KeyboardEvent) => {
      if (this.validateInput(ev.key) && this.game.keys.indexOf(ev.key) === -1) {
        this.game.keys.push(ev.key);
      }
    });

    window.addEventListener("keyup", (ev: KeyboardEvent) => {
      if (this.validateInput(ev.key) && this.game.keys.indexOf(ev.key) !== -1) {
        this.game.keys.splice(this.game.keys.indexOf(ev.key), 1);
      }
    });
  }

  private validateInput(key: string) {
    return (
      key === SnakeInput.up ||
      key === SnakeInput.down ||
      key === SnakeInput.right ||
      key === SnakeInput.left
    );
  }
}
