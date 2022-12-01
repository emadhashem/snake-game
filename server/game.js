const { GRID_SIZE } = require('./constants')

module.exports = {
    createGameState,
    gameLoop
}


function createGameState() {
    return {

        player: {
            pos: {
                x: 3,
                y: 10,
            },
            vel: {
                x: 1,
                y: 0,
            },
            snake: [
                { x: 1, y: 10 },
                { x: 2, y: 10 },
                { x: 3, y: 10 },
            ]
        },
        food: {
            x: 7,
            y: 7
        },
        gridSize: GRID_SIZE
    }
}

function gameLoop(state) {
    if (!state) return
    const playerOne = state.player
    playerOne.pos.x += playerOne.vel.x
    playerOne.pos.y += playerOne.vel.y
    
    if (playerOne.pos.x < 0 || playerOne.pos.x > GRID_SIZE || playerOne.pos.y < 0 || playerOne.pos.y > GRID_SIZE) {
        return 2;
    }
    if (playerOne.pos.x === state.food.x && playerOne.pos.y === state.food.y) {
        playerOne.snake.push({ ...playerOne.pos })
        playerOne.pos.x += playerOne.vel.x
        playerOne.pos.y += playerOne.vel.y
        randomFood(state)
    }
    if (playerOne.vel.x || playerOne.vel.y) {
        for (let cell of playerOne.snake) {
            if (cell.x === playerOne.pos.x && cell.y === playerOne.pos.y) {
                return 2;
            }
        }
    }
    playerOne.snake.push({ ...playerOne.pos })
    playerOne.snake.unshift()

    return false
}

function randomFood(state) {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
    for(let cell of state.snake) {
        if(food.x === cell.x && food.y === food.y) {
            return randomFood(state);
        }
    }
    state.food = food;
    
  }