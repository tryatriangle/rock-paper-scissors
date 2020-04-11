
//buttons
let rock_div = document.getElementById("button-rock");
let paper_div = document.getElementById("button-paper");
let scissors_div = document.getElementById("button-scissors");

//score and result
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p")
let userScore = 0;
let computerScore = 0;

//functions

//selects comp choice from array, uses math.floor and math.random objects to randomly choose between 0, 1 or 2 by rounding math.random result down. Then assigns 0, 1 or 2 to rock, paper or scissors.
function getComputerChoice() {

  let choices = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];

}

//win, lose and draw functions
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " beats " + computerChoice + ". Good job!";
}
function lose(){
  console.log("LOSE!");
}
function draw(){
  console.log("DRAW!");
}

//compares user choice and computer choice using switch and decides winner
function game(userChoice){

  let computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "button-rockscissors":
    case "button-paperrock":
    case "button-scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "button-rockpaper":
    case "button-paperscissors":
    case "button-scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "button-rockrock":
    case "button-paperpaper":
    case "button-scissorsscissors":
      draw(userChoice, computerChoice);
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



