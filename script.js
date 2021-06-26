let wins = 0;
let ties = 0;
let losses = 0;

const options = ["R", "P", "S"];

let playGame = function() {
  let userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();

  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  } else {
    losses++;
    window.alert("You lost!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  let playAgain = window.confirm("Play again?");

  if (playAgain) {
    playGame();
  }
};

playGame();
