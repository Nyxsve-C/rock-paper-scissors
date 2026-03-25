const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

let computerScore = 0, humanScore = 0;

function getComputerChoice() {
    const COMPUTER_OPTIONS = ['Rock', 'Paper', 'Scissors'];

    const index = Math.floor(Math.random() * 3);  // Math.floor(Math.random() * (max - min + 1) + min)
    const option = COMPUTER_OPTIONS[index];

    return option;
}

function getHumanChoice() {
    const HUMAN_OPTIONS = ['r', 'p', 's', 'rock', 'paper', 'scissors'];
    
    let choiceInput = prompt('Enter your choice ("R" for Rock, "P" for Paper, "S" for Scissors)').toLowerCase();
    while (!HUMAN_OPTIONS.includes(choiceInput)) {
        choiceInput = prompt('Enter a valid choice ("R" for Rock, "P" for Paper, "S" for Scissors)').toLowerCase();
    }
    const choice = choiceInput[0]
    const option = (choice === 'r') ? 'Rock'
                 : (choice === 'p') ? 'Paper'
                 : 'Scissors';

    return option;
}

function playRound(computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        console.log(`It\'s a tie! (${computerSelection})`);
    } else if (computerSelection === 'Rock') {
        if (humanSelection === 'Paper') {
            console.log('You win! Paper beats Rock');
            humanScore++;
        } else {
            console.log('You lose! Rock beats Scissors');
            computerScore++;
        }
    } else if (computerSelection === 'Paper') {
        if (humanSelection === 'Rock') {
            console.log('You lose! Paper beats Rock');
            computerScore++;
        } else {
            console.log('You win! Scissors beat Paper');
            humanScore++;
        }
    } else if (computerSelection === 'Scissors') {
        if (humanSelection === 'Paper') {
            console.log('You lose! Scissors beat Paper');
            computerScore++;
        } else {
            console.log('You win! Rock beats Scissors');
            humanScore++;
        }
    }
}

function playGame() {

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
    console.log(`Computer - ${computerScore} | Human - ${humanScore}`)


    const winner = (computerScore > humanScore) ? 'Computer wins!'
                 : (computerScore < humanScore) ? 'You win!'
                 : 'It\'s a tie!'
    console.log(`Game over. ${winner}`)
}

playGame()