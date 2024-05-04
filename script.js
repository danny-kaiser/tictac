const display = document.querySelector('.display')
const selection = document.querySelector('.selection')
const choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

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

function playRound (player, computer = getComputerChoice()) {
  const choice1 = choices.indexOf(player)
  const choice2 = choices.indexOf(computer)
  player = player.toLowerCase()
  if (!choices.includes(player)) {
    display.textContent = 'Invalid selection. Please choose rock, paper, or scissors!'
  } else if (choice1 === choice2) {
    display.textContent = `Computer played ${computer}. You: ${playerScore} Computer: ${computerScore}`
  } else if (choice1 === choices.length - 1 && choice2 === 0) {
    computerScore += 1
    display.textContent = `Computer played ${computer}. You: ${playerScore} Computer: ${computerScore}`
  } else if (choice2 === choices.length - 1 && choice1 === 0) {
    playerScore += 1
    display.textContent = `Computer played ${computer}. You: ${playerScore} Computer: ${computerScore}`
  } else if (choice1 > choice2) {
    playerScore += 1
    display.textContent = `Computer played ${computer}. You: ${playerScore} Computer: ${computerScore}`
  } else {
    computerScore += 1
    display.textContent = `Computer played ${computer}. You: ${playerScore} Computer: ${computerScore}`
  }
}

function checkWinner () {
  if (computerScore === 5) {
    display.textContent = `You: ${playerScore} Computer: ${computerScore}
    Computer Wins!`
    computerScore = 0
    playerScore = 0
  }
  if (playerScore === 5) {
    display.textContent = `You: ${playerScore} Computer: ${computerScore}
    You Win!`
    computerScore = 0
    playerScore = 0
  }
}

selection.addEventListener('click', (event) => {
  const target = event.target

  switch (target.className) {
    case 'rock':
      playRound('rock')
      checkWinner()
      break
    case 'paper':
      playRound('paper')
      checkWinner()
      break
    case 'scissors':
      playRound('scissors')
      checkWinner()
      break
  }
})
