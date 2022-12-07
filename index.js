const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * 3);

  return CHOICES[choiceIndex];
}

