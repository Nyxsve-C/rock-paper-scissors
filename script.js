const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const para = document.querySelector('p');

let computerScore = 0, humanScore = 0, result = '';

function getComputerChoice() {
    const COMPUTER_OPTIONS = ['Rock', 'Paper', 'Scissors'];
    
    const index = Math.floor(Math.random() * 3);  // Math.floor(Math.random() * (max - min + 1) + min)
    const option = COMPUTER_OPTIONS[index];
    
    return option;
}
        
function playRound(computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        result = `It\'s a tie! (${computerSelection})`;
    } else if (computerSelection === 'Rock') {
        if (humanSelection === 'Paper') {
            result = 'You win! Paper beats Rock';
            humanScore++;
        } else {
            result = 'You lose! Rock beats Scissors';
            computerScore++;
        }
    } else if (computerSelection === 'Paper') {
        if (humanSelection === 'Rock') {
            result = 'You lose! Paper beats Rock';
            computerScore++;
        } else {
            result = 'You win! Scissors beat Paper';
            humanScore++;
        }
    } else if (computerSelection === 'Scissors') {
        if (humanSelection === 'Paper') {
            result = 'You lose! Scissors beat Paper';
            computerScore++;
        } else {
            result = 'You win! Rock beats Scissors';
            humanScore++;
        }
    }
    div.textContent = `Scores: Computer - ${computerScore} | Human - ${humanScore}`;
    para.textContent = result;
    
    if (computerScore === 5 || humanScore === 5) {
        buttons.forEach(button => button.disabled = true);
        const winner = (computerScore > humanScore) ? 'COMPUTER WINS!' : 'YOU WIN!';
        para.textContent = 'GAME OVER. ' + winner;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const humanSelection = e.target.textContent;
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });
});
