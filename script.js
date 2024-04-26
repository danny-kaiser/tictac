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

const choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function playRound (player, computer = getComputerChoice()) {
  const choice1 = choices.indexOf(player)
  const choice2 = choices.indexOf(computer)
  player = player.toLowerCase()
  if (!(choices.includes(player))) {
    return 'Invalid selection. Please choose rock, paper, or scissors!'
  }
  if (choice1 === choice2) {
    return `Computer played ${computer}. It's a tie! You: ${playerScore} Computer: ${computerScore}`
  }
  if (choice1 === choices.length - 1 && choice2 === 0) {
    computerScore += 1
    return `Computer played ${computer}. You lose! You: ${playerScore} Computer: ${computerScore}`
  }
  if (choice2 === choices.length - 1 && choice1 === 0) {
    playerScore += 1
    return `Computer played ${computer}. You win! You: ${playerScore} Computer: ${computerScore}`
  }
  if (choice1 > choice2) {
    playerScore += 1
    return `Computer played ${computer}. You win! You: ${playerScore} Computer: ${computerScore}`
  } else {
    computerScore += 1
    return `Computer played ${computer}. You lose! You: ${playerScore} Computer: ${computerScore}`
  }
}
/*
function playRound (playerSelection, computerSelection = getComputerChoice()) {
  const states = ['rock', 'paper', 'scissors']
  const winCase = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper']]
  const player = playerSelection.toLowerCase()
  const computer = computerSelection
  console.log([player, computer])
  console.log(
    winCase.some(
      subarr => subarr.every(
        (arrElem, ind) => arrElem === [player, computer]
      )
    )
  )
}
  if (!(states.includes(player))) {
    return 'Invalid selection. Please choose rock, paper, or scissors!'
  } else if (player === computer) {
    return 'It\'s a tie!'
  } else if (winCase.some(
    subarr => subarr.every(
      (arrElem, ind) => arrElem === [player, computer]
    )
  )) {
    return 'You win!'
  } else {
    return 'You lose¯\\_(ツ)_/¯'
  }
} */
