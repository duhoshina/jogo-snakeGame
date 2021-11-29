let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right";

// def. background
function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// def. snake
function createSnake() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame() {
    createBG();
    createSnake();

    // def valores de inicio nas coordenadas x e y
    let snakeX = snake[0].x;
    let snakeY = snake[0].y

    // os movimentos sao feitos em planos cartesianos, logo:
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop();

    let newHead = {
        x:  snakeX,
        y: snakeY,
    }

    snake.unshift(newHead);
}

// resetar o jogo a cada 100milisegundos.
let game = setInterval(startGame, 100);