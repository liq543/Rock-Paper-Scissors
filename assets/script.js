let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame() {
    let userChoice = document.getElementById('userChoice').value.toUpperCase();
    let choices = ['R', 'P', 'S'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
        tieScore++;
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'S' && computerChoice === 'P') ||
        (userChoice === 'P' && computerChoice === 'R')) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById('result').innerHTML = `User chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').innerHTML = `Score: ${userScore} (you) - ${computerScore} (computer) - ${tieScore} (ties)`;
}

function resetGame() {
    document.getElementById('userChoice').value = '';
}