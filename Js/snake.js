import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 4;
const snakeBody = [{x:10, y:11}, {x:11, y:11}, {x:12, y:11}] // tamaño de la serpiente.

export function update() {
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => { // dibuja el movimineto de la serpiente.
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y; //especifica que comience a dibujar desde la linea(en este caso la 10, 11 y 12)
        snakeElement.style.gridColumnStart = segment.x; //especifica que empiece a dibujar desde la columna(en este caso la 11).
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}