let food = {x:0, y:0};

export function update() {

}

export function draw(gameBoard) {
    const foodElement= document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
}