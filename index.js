const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * 3);

  return CHOICES[choiceIndex];
}

function displayMessage(message) {
  const messageLocation = document.querySelector('#message  p');

  messageLocation.innerText = message;
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  switch (true) {
    case playerChoice === 'rock' && computerSelection === 'scissors':
    case playerChoice === 'paper' && computerSelection === 'rock':
    case playerChoice === 'scissors' && computerSelection === 'paper':
      displayMessage(`You win! ${playerSelection} beats ${computerSelection}`);
      return 'player';
    case playerChoice === computerSelection:
      displayMessage(`Tie! You both chose ${computerSelection}`);
      return 'tie';
    default:
      displayMessage(`You lose! ${computerSelection} beats ${playerSelection}`);
      return 'computer';
  }
}

function handleClick(e) {
  const choice = e.target.value;

  playRound(choice, getComputerChoice());
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.addEventListener('click', handleClick));

// function declareWinner(score) {
//   if (score.player > score.comuputer) return 'Congatulations! You win!';

//   if (score.computer > score.player) return 'Sorry, you lost!';

//   return 'It was a tie!';
// }

// function game() {
//   const score = { player: 0, computer: 0, tie: 0 };

//   const playerSelection = prompt('Enter "rock", "paper", or "scissors"');
//   const result = playRound(playerSelection, getComputerChoice());

//   score[result] += 1;

//   console.log(declareWinner(score));
// }
