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