
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 220, y: 580, width: 40, height: 40, color: "lime" };

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

gameLoop();
