let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        document.getElementById('guessInput').disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
