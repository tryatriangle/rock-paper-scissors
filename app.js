
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
let numberOfRounds = userScore + computerScore;

//functions

//selects comp choice from array, uses math.floor and math.random objects to randomly choose between 0, 1 or 2 by rounding math.random result down. Then assigns 0, 1 or 2 to rock, paper or scissors.
function getComputerChoice(){

  let choices = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];

}

//makes output of buttons readable to humans
function convertToWord(letter){
  if (letter === "button-rock") return "Rock";
  if (letter === "button-paper") return "Paper";
  return "Scissors";
}

/*
win function without using ES6

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + computerChoice + ". Good job!";
}
*/

/*
win, lose and draw functions. 

Using ES6 to make the combining of variables with strings more readable (it removes the need for + and "" to be used. You wrap things that aren't strings in dollar sign $ and curly braces {} )
*/
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  //variables to append to result string to make it clear who chose what
  let smallUserWord = "user".fontsize(3).sup();
  let smallCompWord = "Hal".fontsize(3).sub();
  //ES6 use below
  result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} beats ${computerChoice}${smallCompWord} - well done!`;
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  let smallUserWord = "user".fontsize(3).sup();
  let smallCompWord = "Hal".fontsize(3).sub();

  result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} loses to ${computerChoice}${smallCompWord} - oh no!`;
}
function draw(userChoice, computerChoice){
  let smallUserWord = "user".fontsize(3).sup();
  let smallCompWord = "Hal".fontsize(3).sub();

  result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} and ${computerChoice}${smallCompWord} - it's a draw`;
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

//function to give results if 5 rounds have been played, then reset scores

function totals (){

  numberOfRounds = userScore + computerScore;

  if (numberOfRounds == 5){
    if (userScore > computerScore) {
      result_p.innerHTML = (userScore + " vs " + computerScore + ", you win");
    }

    else {
      result_p.innerHTML = (userScore + " vs " + computerScore + ", Hal wins");
    }
  }

  function clearScores(){

    if (numberOfRounds == 5){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  }}
  setTimeout (clearScores,5000);
}

rock_div.addEventListener('click', totals);
paper_div.addEventListener('click', totals);
scissors_div.addEventListener('click',totals);

