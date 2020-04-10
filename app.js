let rockDiv = document.getElementById("button-rock");
let paperDiv = document.getElementById("button-paper");
let scissorsDiv = document.getElementById("button-scissors");
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");


let userScore = 0;
let computerScore = 0;

function computerPlay() {

    let computerChoice = ["rock", "paper", "scissors"];
  
    let randomNumber = Math.floor(Math.random() * 3);
  
    return computerChoice [randomNumber];
 
  }

let computerAnswer = computerPlay();

console.log(computerAnswer);



function playerSelection() {

}
