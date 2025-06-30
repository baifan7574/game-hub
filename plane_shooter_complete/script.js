
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playerImg = new Image();
playerImg.src = "assets/player.png";

const bulletImg = new Image();
bulletImg.src = "assets/bullet.png";

const enemyImg = new Image();
enemyImg.src = "assets/enemy.png";

let player = { x: 220, y: 560, width: 40, height: 40 };
let bullets = [];
let enemies = [];

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") player.x -= 20;
    if (e.key === "ArrowRight") player.x += 20;
    if (e.key === " ") {
        bullets.push({ x: player.x + 15, y: player.y });
    }
});

function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

function drawBullets() {
    bullets.forEach((b, index) => {
        b.y -= 5;
        ctx.drawImage(bulletImg, b.x, b.y, 10, 20);
        if (b.y < 0) bullets.splice(index, 1);
    });
}

function drawEnemies() {
    if (Math.random() < 0.03) {
        enemies.push({ x: Math.random() * 440, y: 0 });
    }
    enemies.forEach((e, index) => {
        e.y += 2;
        ctx.drawImage(enemyImg, e.x, e.y, 40, 40);
        if (e.y > 640) enemies.splice(index, 1);
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    drawEnemies();
    requestAnimationFrame(gameLoop);
}

gameLoop();
