let rockDiv = document.getElementById("button-rock");
let paperDiv = document.getElementById("button-paper");
let scissorsDiv = document.getElementById("button-scissors")

function computerPlay() {

    let computerChoice = ["rock", "paper", "scissors"];
  
    let randomNumber = Math.floor(Math.random() * 3);
  
    return computerChoice [randomNumber];
 
  }

let computerAnswer = computerPlay();

console.log(computerAnswer);



function playerSelection() {

}
