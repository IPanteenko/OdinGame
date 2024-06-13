// rock = 0
// paper = 1
// scissors = 2




function getComputerChoice() {
    return Math.floor(Math.random()*3); 
}

 
function getHumanChoice() {
    let humanInput = prompt("What do you choose? Rock, Paper or Scissors?")
    
    if(humanInput.toLowerCase() === "rock") {
        return 0;
    } else if (humanInput.toLowerCase() === "paper") {
        return 1;
    } else if (humanInput.toLowerCase() === "scissors") {
        return 2; 
    }
}


// function playRound(humanChoice, computerChoice) {
  
// if (humanChoice===0&&computerChoice===1) {
//     console.log("Paper beats Rock! You lose!");

// } else if (humanChoice===0&&computerChoice===2) {
//     console.log("Rock beats scissors! You win!");
// } else if (humanChoice===1&&computerChoice===0) {
//     console.log("Paper beats Rock! You win!");
// } else if (humanChoice===1&&computerChoice===2) {
//     console.log("Scissors beat paper! You lose!");
// } else if (humanChoice===2&&computerChoice===0) {
//     console.log("Rock beats scissors! You lose!");
// } else if (humanChoice===2&&computerChoice===1) {
//     console.log("Scissors beat paper! You win!");
// } else {
//     console.log("Draw! Try again")
// }
// }




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice= getComputerChoice();

        if (humanChoice===0&&computerChoice===1) {
            computerScore+=1;
            humanScore-=1;
            console.log(`Paper beats Rock! You lose!Your score is: ${humanScore}`);   
        } else if (humanChoice===0&&computerChoice===2) {
            computerScore-=1;
            humanScore +=1;
            console.log(`Rock beats scissors! You win!Your score is: ${humanScore}`);
        } else if (humanChoice===1&&computerChoice===0) {
            computerScore-=1;
            humanScore+=1;
            console.log(`Paper beats Rock! You win!Your score is: ${humanScore}`);
        } else if (humanChoice===1&&computerChoice===2) {
            computerScore+=1;
            humanScore-=1;
            console.log(`Scissors beat paper! You lose!Your score is: ${humanScore}`);
        } else if (humanChoice===2&&computerChoice===0) {
            computerScore+=1;
            humanScore-=1;
            console.log(`Rock beats scissors! You lose!Your score is: ${humanScore}`);
        } else if (humanChoice===2&&computerChoice===1) {
            computerScore-=1;
            humanScore+=1;
            console.log(`Scissors beat paper! You win!Your score is: ${humanScore}`);
        } else {
            console.log("Draw! Try again")
        }
    }
}

playGame();

