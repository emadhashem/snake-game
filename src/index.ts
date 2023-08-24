import { Game } from "./game/Game";

const canvas = document.getElementById("canvas1") as HTMLCanvasElement;

canvas.width = 600;
canvas.height = 500;

const ctx = canvas.getContext("2d")!;

const game = new Game(canvas.width, canvas.height, ctx);

function animate(timeStamp: number) {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw();
  game.update();
}

animate(0);
