let dot = document.getElementById('dot');
let scoreDisplay = document.getElementById('score');
let score = 0;

function moveDot() {
    let x = Math.random() * (window.innerWidth - 50);
    let y = Math.random() * (window.innerHeight - 50);
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
}

dot.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = 'Score: ' + score;
    moveDot();
});

moveDot();