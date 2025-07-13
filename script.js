let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#newgame-btn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
  msg.innerText = "It's a Draw. Try again!";
  msg.style.backgroundColor = "#1e2a38";
  msg.className = "draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
    msg.style.backgroundColor = "green";
    msg.className = "win";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
    msg.style.backgroundColor = "red";
    msg.className = "lose";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  msg.innerText = "Scores reset. Play your move";
  msg.style.backgroundColor = "#1e2a38";
  msg.className = "";
});

newGameBtn.addEventListener("click", () => {
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#1e2a38";
  msg.className = "";
});
