const YScore = document.getElementById("YScore");
const CScore = document.getElementById("CScore");
const RockBtn = document.getElementById("rock");
const PaperBtn = document.getElementById("paper");
const ScissorsBtn = document.getElementById("scissors");
const Kill = document.getElementById("kill");
const RPS = ["rock", "paper", "scissors"];
const play=document.getElementById("play");
const again=document.getElementById("again");
const won=document.getElementById("won");
const playAgain=document.getElementById("play-again");
let playerChoose = null;
let robotChoose;
let scoreP = 0;
let scoreC = 0;
YScore.innerHTML = 0;
CScore.innerHTML = 0;
// const rock = "rock";
// const paper = "paper";
// const scissors = "scissors";
// RockBtn.addEventListener("click", function () {
//     playerChoose = RockBtn.id;
// });
// PaperBtn.addEventListener("click", function () {
//     playerChoose = PaperBtn.id;
// })
// ScissorsBtn.addEventListener("click", function () {
//     playerChoose = ScissorsBtn.id;
// })
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        playerChoose = this.id;
        robotChoose = computerChoose();
        playerwin();
        computerwin();
        tie();
    });
});
function computerChoose() {
    robotChoose = RPS[Math.floor(Math.random() * RPS.length)];
    return robotChoose;
}
function playerwin() {
    if (playerChoose == "rock" && robotChoose == "scissors" || playerChoose == "scissors" && robotChoose == "paper" || playerChoose == "paper" && robotChoose == "rock") {
        scoreP++;
        YScore.innerHTML = scoreP;
        Kill.innerHTML = `player win, ${playerChoose} beats  ${robotChoose}`;
        if (scoreP == 3) {
            play.style.display="none";
            again.style.display="flex";
            won.innerHTML ="player has won the game!";
        }
    }
}
function computerwin() {
    if (playerChoose == "scissors" && robotChoose == "rock" || playerChoose == "paper" && robotChoose == "scissors" || playerChoose == "rock" && robotChoose == "paper") {
        scoreC++;
        CScore.innerHTML = scoreC;
        Kill.innerHTML = `computer win, ${robotChoose} beats  ${playerChoose}`;
        if (scoreC == 3) {
            play.style.display = "none";
            again.style.display = "flex";
            won.innerHTML ="Computer has won the game!";
        }
    }
}
function tie() {
    if (playerChoose == robotChoose) {
        Kill.innerHTML = `It's a tie! Both chose ${robotChoose}`;
    }
}
function PlayAgain(){
    scoreC=0;
    scoreP=0;
    CScore.innerHTML = scoreC;
    YScore.innerHTML = scoreP;
    play.style.display = "flex";
    again.style.display = "none";
    Kill.innerHTML ="";
}



// ########################################################################################################################

// function getRandomComputerResult() {
//     const options = ["Rock", "Paper", "Scissors"];
//     const randomIndex = Math.floor(Math.random() * options.length);
//     return options[randomIndex];
// }

// function hasPlayerWonTheRound(player, computer) {
//     return (
//         (player === "Rock" && computer === "Scissors") ||
//         (player === "Scissors" && computer === "Paper") ||
//         (player === "Paper" && computer === "Rock")
//     );
// }

// let playerScore = 0;
// let computerScore = 0;

// function getRoundResults(userOption) {
//     const computerResult = getRandomComputerResult();

//     if (hasPlayerWonTheRound(userOption, computerResult)) {
//         playerScore++;
//         return `Player wins! ${userOption} beats ${computerResult}`;
//     } else if (computerResult === userOption) {
//         return `It's a tie! Both chose ${userOption}`;
//     } else {
//         computerScore++;
//         return `Computer wins! ${computerResult} beats ${userOption}`;
//     }
// }

// const playerScoreSpanElement = document.getElementById("player-score");
// const computerScoreSpanElement = document.getElementById("computer-score");
// const roundResultsMsg = document.getElementById("results-msg");
// const winnerMsgElement = document.getElementById("winner-msg");
// const optionsContainer = document.querySelector(".options-container");
// const resetGameBtn = document.getElementById("reset-game-btn");

// function showResults(userOption) {
//     roundResultsMsg.innerText = getRoundResults(userOption);
//     computerScoreSpanElement.innerText = computerScore;
//     playerScoreSpanElement.innerText = playerScore;

//     if (playerScore === 3 || computerScore === 3) {
//         winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"
//             } has won the game!`;

//         resetGameBtn.style.display = "block";
//         optionsContainer.style.display = "none";
//     }

// };
// function resetGame() {
//     playerScore = 0;
//     computerScore = 0;
//     playerScoreSpanElement.innerText = playerScore;
//     computerScoreSpanElement.innerText = computerScore;
//     resetGameBtn.style.display = "none";
//     optionsContainer.style.display = "block";
//     winnerMsgElement.innerText = "";
//     roundResultsMsg.innerText = "";
// };

// resetGameBtn.addEventListener("click", resetGame);

// const rockBtn = document.getElementById("rock-btn");
// const paperBtn = document.getElementById("paper-btn");
// const scissorsBtn = document.getElementById("scissors-btn");

// rockBtn.addEventListener("click", function () {
//     showResults("Rock");
// });

// paperBtn.addEventListener("click", function () {
//     showResults("Paper");
// });

// scissorsBtn.addEventListener("click", function () {
//     showResults("Scissors");
// });