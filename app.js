function computerPlay() {

    let choices = ["r", "p", "s"];
  
    let randomNumber = Math.floor(Math.random() * 3);
  
    return choices [randomNumber];
  }
  
 console.log(computerPlay());

 function displayUserChoice() { 
  var ele = document.getElementsByName("player-selection"); 
 }

 alert(displayUserChoice());