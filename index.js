const CHOICES = ['rock', 'paper', 'scissors'];
const score = { player: 0, tie: 0, computer: 0 };
const buttons = document.querySelectorAll('button');

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

function checkWinner() {
  if (score.player >= 5) {
    displayMessage("Congatulations! You're the winner");
    endGame();
  } else if (score.computer >= 5) {
    displayMessage('Sorry, you lost!');
    endGame();
  }
}

function updateScore(winner) {
  score[winner] += 1;

  const scoreObj = {
    player: document.querySelector('#player'),
    tie: document.querySelector('#tie'),
    computer: document.querySelector('#computer'),
  };

  scoreObj[winner].innerText = score[winner];
}

function handleClick(e) {
  const choice = e.target.value;

  const winner = playRound(choice, getComputerChoice());

  updateScore(winner);
  checkWinner();
}

function endGame() {
  buttons.forEach((button) => button.removeEventListener('click', handleClick));
}

buttons.forEach((button) => button.addEventListener('click', handleClick));
