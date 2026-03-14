function getComputerChoice() {
    const COMPUTER_OPTIONS = ['Rock', 'Paper', 'Scissors'];

    let index = Math.floor(Math.random() * 3);  // Math.floor(Math.random() * (max - min + 1) + min)
    let option = COMPUTER_OPTIONS[index];

    return option;
}

function getHumanChoice() {
    const HUMAN_OPTIONS = ['r', 'p', 's', 'rock', 'paper', 'scissors'];
    
    let choiceInput = prompt('Enter your choice ("R" for Rock, "P" for Paper, "S" for Scissors)').toLowerCase();
    while (!HUMAN_OPTIONS.includes(choiceInput)) {
        choiceInput = prompt('Enter a valid choice ("R" for Rock, "P" for Paper, "S" for Scissors)').toLowerCase();
    }
    let choice = choiceInput[0]
    let option = (choice === 'r') ? 'Rock'
               : (choice === 'p') ? 'Paper'
               :  'Scissors';

    return option;
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log('It\'s a tie!')
    } else if (computerChoice === 'Rock') {
        if (humanChoice === 'Paper') {
            console.log('You win! Paper beats Rock')
            humanScore++
        } else {
            console.log('You lose! Rock beats Scissors')
            computerScore++
        }
    } else if (computerChoice === 'Paper') {
        if (humanChoice === 'Rock') {
            console.log('You lose! Paper beats Rock')
            computerScore++
        } else {
            console.log('You win! Scissors beat Paper')
            humanScore++
        }
    } else if (computerChoice === 'Scissors') {
        if (humanChoice === 'Paper') {
            console.log('You lose! Scissors beat Paper')
            computerScore++
        } else {
            console.log('You win! Rock beats Scissors')
            humanScore++
        }
    }
}