import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");


function main(currentTime) {   // se coloca el movimiento de la serpiente en tiempo real.
    if (gameOver) {
        if (confirm('Game Over!, You lost!... Press OK to restart!')) {
            window.location = "./SnakeGame.html"
        }
        return 
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    update(); //actualización del tamaño de la serpiente.
    draw(); //dibujo de lo que sucede, como el movimiento.
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "" // para que dibuje sobre el mismo segmento.
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}