// Variables
let humanScore = 0, computerScore = 0;

playGame();
// playRound(humanSelection, computerSelection);
// console.log(humanScore, computerScore);

// Functions
function playGame(){
    for (let i = 1;i <= 5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Round " + i);
        playRound(humanSelection, computerSelection);
        console.log("You: " + humanScore + ", Computer: " + computerScore);
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice != "rock"){
        if (computerChoice == "paper"){
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }
    else if (humanChoice == "paper" && computerChoice != "paper"){
        if (computerChoice == "scissors"){
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }
    else if (humanChoice == "scissors" && computerChoice != "scissors"){
        if (computerChoice == "rock"){
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }
    else console.log("Tie!");
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