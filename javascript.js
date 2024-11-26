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

// console.log(getHumanChoice());