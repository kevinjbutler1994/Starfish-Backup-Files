const dot = document.querySelector(`.js-dot`);
const scoreBoard = document.querySelector(`.js-score`);
const showWinner = document.querySelector(`.level-winner`);

dot.addEventListener("click", handleClick);

let score = 0;

function handleClick() {
  score += 10;
  scoreBoard.innerText = score;
}

if (score >= 100) {
  console.log("You Win!");
}
