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
      return [1, `You win! ${playerSelection} beats ${computerSelection}`];
      break;
    case playerChoice === computerSelection:
      return [0, `Tie! You both chose ${computerSelection}`];
      break;
    default:
      return [-1, `You lose! ${computerSelection} beats ${playerSelection}`];
  }
}

function game() {
  let score = { player: 0, computer: 0, tie: 0 };

  const playerSelection = prompt('Enter "rock", "paper", or "scissors"');
  const result = playRound(playerSelection, getComputerChoice());

  scoreGame(result, score);

  console.log(declareWinner(score));
}

function scoreGame(result, score) {
  console.log(result[1]);

  switch (result[0]) {
    case 1:
      score.player += 1;
      break;
    case 0:
      score.tie += 1;
      break;
    case -1:
      score.computer += 1;
  }

  console.log(score);
}

function declareWinner(score) {
  if (score.player > score.comuputer) {
    return "Congatulations! You're the winner";
  } else if (score.computer > score.player) {
    return 'Sorry, you lost!';
  } else {
    return 'It was a tie!';
  }
}

game();
