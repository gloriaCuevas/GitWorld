function getComputerChoice (){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors");
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock");
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock");
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper");
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper");
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose!Rock beats scissors");
      }
   
  }
  function game(){
    for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Choose your weapon!").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));}
    console.log("Game Over");
  }

  game();
   
  