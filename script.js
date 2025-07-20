const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const score = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

choices.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    if (winner === 'player') {
        playerScore++;
        result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 'computer') {
        computerScore++;
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        result.textContent = `It's a Draw! You both chose ${playerChoice}`;
    }

    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}
