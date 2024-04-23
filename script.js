function getRandomInt () {
  const minCeiled = Math.ceil(1)
  const maxFloored = Math.floor(4)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getComputerChoice () {
  const currentInt = getRandomInt()
  if (currentInt === 1) {
    return 'rock'
  } else if (currentInt === 2) {
    return 'paper'
  } else if (currentInt === 3) {
    return 'scissors'
  }
}

function test (player) {
  const states = ['rock', 'paper', 'scissors']
  const winCase = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper']]
  console.log(winCase)
}

function playRound (playerSelection, computerSelection) {
  const states = ['rock', 'paper', 'scissors']
  const winCase = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper']]
  const player = playerSelection.toLowerCase()
  const computer = computerSelection
  if (!(player in states)) {
    return 'Invalid selection. Please choose rock, paper, or scissors!'
  } else if (player === computer) {
    return 'It\'s a tie!'
  } else if ([player, computer] in winCase) {
    return 'You win!'
  } else {
    return 'You lose¯\\_(ツ)_/¯'
  }
}
