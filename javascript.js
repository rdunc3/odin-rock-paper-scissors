function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) //Returns a 0, 1, or 2
    if (choice == 0) return "Rock";
    else if (choice == 1)return "Paper";
    return "Scissors"
}

console.log(getComputerChoice());