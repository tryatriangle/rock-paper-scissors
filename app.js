

function computerPlay() {

    let computerChoice = ["rock", "paper", "scissors"];
  
    let randomNumber = Math.floor(Math.random() * 3);
  
    return computerChoice [randomNumber];

    
  }

let computerAnswer = computerPlay();

console.log(computerAnswer);
