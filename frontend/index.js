const  BG_COLOUR = '#231f20'
const SANKE_COLOUR = '#c2c2c2'
const FOOD_COLOUR = '#e66916'
const gameScreen = document.getElementById('gameScreen');
const socket = io('http://localhost:3000')


socket.on('init' , handleGameState)


// let ctx, canvas;



// function keyDown(event) {
//     console.log(event.keyCode)
// }

// init();


// function paintGame(state) {
//     ctx.fillStyle = BG_COLOUR
//     ctx.fillRect(0 , 0 , canvas.width , canvas.height);
//     const food = state.food
//     const gridSize = state.gridSize
//     const size = canvas.width / gridSize // 600 / 20 = 30

//     ctx.fillStyle = FOOD_COLOUR
//     ctx.fillRect(food.x * size , food.y * size , size , size);

//     paintPlayer(state.player , size , SANKE_COLOUR)
// }

// function paintPlayer(playerState , size , colour) {
//     const snake = playerState.snake
//     ctx.fillStyle = colour
//     for(let cell of snake) {
//         ctx.fillRect(cell.x * size , cell.y * size , size , size);
//     }
// }
// function init() {
//     canvas = document.getElementById('canvas')
//     ctx = canvas.getContext('2d');
//     canvas.width = canvas.height = 600;
//     ctx.fillStyle = BG_COLOUR;
//     ctx.fillRect(0 , 0 , canvas.width , canvas.height);
//     document.addEventListener('keydown' , keyDown)
// }

function handleGameState(gameState) {
  // gameState = JSON.parse(gameState)
  // requestAnimationFrame(() => paintGame(gameState))
  console.log(gameState)
}