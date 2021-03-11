import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js"

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");


function main(currentTime) {   // se coloca el movimiento de la serpiente en tiempo real.
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
}

function draw() {
    gameBoard.innerHTML = "" // para que dibuje sobre el mismo segmento.
    drawSnake(gameBoard);
}