const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * 3);

  return CHOICES[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  switch (true) {
    case playerChoice === 'rock' && computerSelection === 'scissors':
    case playerChoice === 'paper' && computerSelection === 'rock':
    case playerChoice === 'scissors' && computerSelection === 'paper':
      return `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    case playerChoice === computerSelection:
      return `Tie! You both chose ${computerSelection}`;
      break;
    default:
      return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}