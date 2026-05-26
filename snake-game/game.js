const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const gameOverElement = document.getElementById('gameOver');

canvas.width = 400;
canvas.height = 400;

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [];
let food = { x: 0, y: 0 };
let dx = 0;
let dy = 0;
let score = 0;
let gameRunning = false;
let gameLoop;

function initGame() {
    snake = [
        { x: 10, y: 10 }
    ];
    dx = 1;
    dy = 0;
    score = 0;
    scoreElement.textContent = score;
    gameRunning = true;
    gameOverElement.style.display = 'none';
    spawnFood();
    
    if (gameLoop) {
        clearInterval(gameLoop);
    }
    gameLoop = setInterval(updateGame, 150);
}

function spawnFood() {
    let validPosition = false;
    
    while (!validPosition) {
        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);
        
        validPosition = !snake.some(segment => segment.x === food.x && segment.y === food.y);
    }
}

function updateGame() {
    if (!gameRunning) return;
    
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
        return;
    }
    
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        endGame();
        return;
    }
    
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        spawnFood();
    } else {
        snake.pop();
    }
    
    draw();
}

function draw() {
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }
    
    snake.forEach((segment, index) => {
        const gradient = ctx.createRadialGradient(
            segment.x * gridSize + gridSize / 2,
            segment.y * gridSize + gridSize / 2,
            0,
            segment.x * gridSize + gridSize / 2,
            segment.y * gridSize + gridSize / 2,
            gridSize / 2
        );
        
        if (index === 0) {
            gradient.addColorStop(0, '#2ecc71');
            gradient.addColorStop(1, '#27ae60');
        } else {
            gradient.addColorStop(0, '#3498db');
            gradient.addColorStop(1, '#2980b9');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(
            segment.x * gridSize + 2,
            segment.y * gridSize + 2,
            gridSize - 4,
            gridSize - 4,
            5
        );
        ctx.fill();
        
        if (index === 0) {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(
                segment.x * gridSize + gridSize / 3,
                segment.y * gridSize + gridSize / 3,
                3,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(
                segment.x * gridSize + 2 * gridSize / 3,
                segment.y * gridSize + gridSize / 3,
                3,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
    });
    
    const foodGradient = ctx.createRadialGradient(
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2,
        0,
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2,
        gridSize / 2
    );
    foodGradient.addColorStop(0, '#e74c3c');
    foodGradient.addColorStop(1, '#c0392b');
    
    ctx.fillStyle = foodGradient;
    ctx.beginPath();
    ctx.arc(
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2,
        gridSize / 2 - 3,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function endGame() {
    gameRunning = false;
    clearInterval(gameLoop);
    finalScoreElement.textContent = score;
    gameOverElement.style.display = 'block';
}

function handleKeyPress(event) {
    if (!gameRunning) return;
    
    const key = event.key.toLowerCase();
    
    switch (key) {
        case 'arrowup':
        case 'w':
            if (dy === 0) {
                dx = 0;
                dy = -1;
            }
            break;
        case 'arrowdown':
        case 's':
            if (dy === 0) {
                dx = 0;
                dy = 1;
            }
            break;
        case 'arrowleft':
        case 'a':
            if (dx === 0) {
                dx = -1;
                dy = 0;
            }
            break;
        case 'arrowright':
        case 'd':
            if (dx === 0) {
                dx = 1;
                dy = 0;
            }
            break;
    }
    
    if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'].includes(key)) {
        event.preventDefault();
    }
}

startBtn.addEventListener('click', () => {
    if (!gameRunning) {
        initGame();
    }
});

restartBtn.addEventListener('click', () => {
    initGame();
});

document.addEventListener('keydown', handleKeyPress);

draw();