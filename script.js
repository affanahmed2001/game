let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usrScore = document.querySelector("#user-score");
const cmpScore = document.querySelector("#comp-score");

function playGame(userChoice) {
    // console.log("User Choice = ", userChoice);
    const compChoice = getCompChoice();
    // console.log("Computer Choice = ", compChoice);
    if (compChoice === userChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        Winner(userWin, userChoice, compChoice);
    }
}

function draw() {
    // console.log("Game Drwa. Play Again");
    msg.innerText = "Game Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

function getCompChoice() {
    let array = ["rock", "paper", "scissors"];
    let randIndx = Math.floor(Math.random() * 3);
    return array[randIndx];
}

function Winner(userWin, userChoice, compChoice) {
    if (userWin) {
        // console.log("user win");
        msg.innerText = `User Win your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        usrScore.innerText = userScore;

    } else {
        // console.log("computer win");
        msg.innerText = `Computer Win computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        cmpScore.innerText = compScore;
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});