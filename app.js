
//buttons
let rock_div = document.getElementById("button-rock");
let paper_div = document.getElementById("button-paper");
let scissors_div = document.getElementById("button-scissors");

//score and result
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result")
let userScore = 0;
let computerScore = 0;

//functions

function game(userChoice){
  console.log("poop fuck fart" + userChoice);
}



function main(){

  rock_div.addEventListener("click", function() {
    game("button-rock");
  })

  paper_div.addEventListener("click", function() {
    game("button-paper");
  })

  scissors_div.addEventListener("click", function() {
    game("button-scissors");
  })

}

main();

function computerPlay() {

    let computerChoice = ["rock", "paper", "scissors"];
  
    let randomNumber = Math.floor(Math.random() * 3);
  
    return computerChoice [randomNumber];
 
  }

let computerAnswer = computerPlay();

console.log(computerAnswer);

