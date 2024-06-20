// rock = 0
// paper = 1
// scissors = 2

let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


function getComputerChoice() {
    return Math.floor(Math.random()*3); 
}

function handleRock() {
    playGame(0);
}

function handlePaper() {
    playGame(1);
}

function handleScissors() {
    playGame(2);
}
 
rock.addEventListener('click', handleRock);
paper.addEventListener('click', handlePaper);
scissors.addEventListener('click', handleScissors);


function playGame(humanChoice) {
  
        let computerChoice= getComputerChoice();
        
        if (humanChoice===0&&computerChoice===1) {
            computerScore+=1;
            humanScore-=1;
            setRoundResult(`Paper beats Rock! You lose!Your score is: ${humanScore}, computer score is: ${computerScore}`);   
        } else if (humanChoice===0&&computerChoice===2) {
            humanScore +=1;
            setRoundResult(`Rock beats scissors! You win!Your score is: ${humanScore}, computer score is: ${computerScore}`);
        } else if (humanChoice===1&&computerChoice===0) {
            humanScore+=1;
            setRoundResult(`Paper beats Rock! You win!Your score is: ${humanScore}, computer score is: ${computerScore}`);
        } else if (humanChoice===1&&computerChoice===2) {
            computerScore+=1;
            setRoundResult(`Scissors beat paper! You lose!Your score is: ${humanScore}, computer score is: ${computerScore}`);
        } else if (humanChoice===2&&computerChoice===0) {
            computerScore+=1;
            setRoundResult(`Rock beats scissors! You lose!Your score is: ${humanScore}, computer score is: ${computerScore}`);
        } else if (humanChoice===2&&computerChoice===1) {
            humanScore+=1;
            setRoundResult(`Scissors beat paper! You win!Your score is: ${humanScore}, computer score is: ${computerScore}`);
        } else {
            setRoundResult("Draw! Try again")
        }

        if(humanScore >= 5) {
            setRoundResult(`You win! Your score is: ${humanScore}, computer score is: ${computerScore}`)
            humanScore = 0;
            computerScore = 0;
        }
        else if(computerScore >=5) {
            setRoundResult(`You lost! Your score is: ${humanScore}, computer score is: ${computerScore}`)
            humanScore = 0;
            computerScore = 0;
        } 
          
}

function setRoundResult(text){
    document.getElementById('text').textContent += text + `\n`;
}

   


