// Variables
let humanScore = 0, computerScore = 0;

// playGame();
// playRound(humanSelection, computerSelection);
// console.log(humanScore, computerScore);

// Functions

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice != "rock"){
        if (computerChoice == "paper"){
            results.innerHTML = "You lose the round!"
            computerScore++;
        }
        else {
            results.innerHTML = "You win the round!"
            humanScore++;
        }
    }
    else if (humanChoice == "paper" && computerChoice != "paper"){
        if (computerChoice == "scissors"){
            results.innerHTML = "You lose the round!"
            computerScore++;
        }
        else {
            results.innerHTML = "You win the round!"
            humanScore++;
        }
    }
    else if (humanChoice == "scissors" && computerChoice != "scissors"){
        if (computerChoice == "rock"){
            results.innerHTML = "You lose the round!"
            computerScore++;
        }
        else {
            results.innerHTML = "You win the round!"
            humanScore++;
        }
    }
    else results.innerHTML = "Round ends in a tie."
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) //Returns a 0, 1, or 2
    if (choice == 0) return "rock";
    else if (choice == 1)return "paper";
    return "scissors"
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Input rock, paper, or scissors");
    return choice.toLowerCase();
}

// console.log(getHumanChoice())

// Events
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5){
            let computerChoice = getComputerChoice();
            playRound(button.id, computerChoice);
            // console.log("You: " + humanScore + ", Computer: " + computerScore);

            results.innerHTML += "<br> Computer chose " + computerChoice;
            results.innerHTML += "<br> You: " + humanScore + ", Computer: " + computerScore;

            if (humanScore == 5) {
                results.innerHTML += "<br>You win the game! BOOM";
            } 
            else if (computerScore == 5) {
                results.innerHTML += "<br>You lose the game! DOOM";
            }
        }
    });
});

