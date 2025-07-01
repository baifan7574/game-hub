const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playerImg = new Image();
playerImg.src = "images/player.png";

const enemyImg = new Image();
enemyImg.src = "images/enemy.png";

const bulletImg = new Image();
bulletImg.src = "images/bullet.png";

let player = { x: 220, y: 550, width: 40, height: 40 };
let bullets = [];
let enemies = [];
let score = 0;

function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

function drawBullets() {
    bullets.forEach((b, i) => {
        b.y -= 5;
        if (b.y < 0) bullets.splice(i, 1);
        ctx.drawImage(bulletImg, b.x, b.y, 10, 20);
    });
}

function drawEnemies() {
    enemies.forEach((e, i) => {
        e.y += 2;
        if (e.y > 640) enemies.splice(i, 1);
        ctx.drawImage(enemyImg, e.x, e.y, 40, 40);
    });
}

function detectCollisions() {
    bullets.forEach((b, bi) => {
        enemies.forEach((e, ei) => {
            if (b.x < e.x + 40 && b.x + 10 > e.x &&
                b.y < e.y + 40 && b.y + 20 > e.y) {
                bullets.splice(bi, 1);
                enemies.splice(ei, 1);
                score++;
            }
        });
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    drawEnemies();
    detectCollisions();
    requestAnimationFrame(update);
}

setInterval(() => {
    enemies.push({ x: Math.random() * 440, y: -40 });
}, 1000);

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") player.x -= 15;
    if (e.key === "ArrowRight") player.x += 15;
    if (e.key === " " || e.key === "Spacebar") {
        bullets.push({ x: player.x + 15, y: player.y });
    }
});

update();