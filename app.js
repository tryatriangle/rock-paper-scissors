
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

//selects comp choice from array, uses math floor and random objects to randomly choose between 0, 1 or 2 by rounding math.random result down. Then assigns 0, 1 or 2 to rock, paper or scissors.
function getComputerChoice() {

  let choices = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];

}

//compares user choice and computer choice using switch and decides winner
function game(userChoice){

  let computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "button-rockscissors":
    case "button-paperrock":
    case "button-scissorspaper":
      console.log("USER WINS :)");
      break;
    case "button-rockpaper":
    case "button-paperscissors":
    case "button-scissorsrock":
      console.log("USER LOSES :(");
      break;
    case "button-rockrock":
    case "button-paperpaper":
    case "button-scissorsscissors":
      console.log("DRAW - TRY AGAIN!");
      break;
  }
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



