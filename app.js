console.log('connected');
const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const p1scr = document.querySelector('#p1score');
const p2scr = document.querySelector('#p2score');
const maxScrSelector = document.querySelector('#max');
let maxScr = 5;
let scr1 = 0;
let scr2 = 0;
let gameOver = false;

maxScrSelector.addEventListener('change', function () {
    resetgame();
    maxScr = parseInt(this.value);
})

p1.addEventListener('click', function () {
    if (!gameOver) {
        scr1++;
        if (scr1 === maxScr) {
            gameOver = true;
            p1scr.classList.add('win');
            p2scr.classList.add('lose');
        }
        p1scr.innerText = `${scr1}`;
    }
})

p2.addEventListener('click', function () {
    if (!gameOver) {
        scr2++;
        if (scr2 === maxScr) {
            gameOver = true;
            p2scr.classList.add('win');
            p1scr.classList.add('lose');
        }
        p2scr.innerText = `${scr2}`;
    }
})

reset.addEventListener('click', resetgame)

function resetgame() {
    scr1 = 0;
    scr2 = 0;
    p1scr.innerText = `${scr1}`;
    p2scr.innerText = `${scr2}`;
    gameOver = false;
    p1scr.classList.remove('win', 'lose');
    p2scr.classList.remove('lose', 'win');
}

