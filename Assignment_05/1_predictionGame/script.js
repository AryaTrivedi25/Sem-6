let secretNumber = Math.floor(Math.random() * 100) + 1;
let triesLeft = 5;
let guessedNumbers = new Set();

document.getElementById('guessButton').addEventListener('click', function() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const triesLeftDisplay = document.getElementById('triesLeft');

    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number!";
        return;
    }

    if (guessedNumbers.has(guess)) {
        message.textContent = "You've already guessed that number!";
        return;
    }

    guessedNumbers.add(guess);
    triesLeft--;

    if (guess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number ${secretNumber} correctly!`;
        guessInput.disabled = true;
        this.disabled = true;
    } else if (Math.abs(guess - secretNumber) <= 5) {
        message.textContent = "You were close.!!";

    } else if (guess < secretNumber) {
        message.textContent = "You predicted a low value!";
    } else {
        message.textContent = "You predicted a high value!";
    }

    triesLeftDisplay.textContent = `Tries left: ${triesLeft}`;

    if (triesLeft === 0 && guess !== secretNumber) {
        message.textContent = `Game over! The correct number was ${secretNumber}.`;
        guessInput.disabled = true;
        this.disabled = true;
    }

    guessInput.value = '';
});