// This file implements the Guessing Game functionality.

class GuessingGame {
    constructor() {
        this.targetNumber = null;
        this.tries = 0;
        this.maxTries = 10
        this.guessedNumbers = new Set();
    }

    startGame() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        this.tries = 0;
        this.guessedNumbers.clear();
    }

    makeGuess(guess) {
        if (this.guessedNumbers.has(guess)) {
            return "You already guessed that number!";
        }
        this.guessedNumbers.add(guess);
        this.tries++;

        if (guess === this.targetNumber) {
            return "Congratulations! You've guessed the number!";
        } else if (this.tries >= this.maxTries) {
            return `Game over! The number was ${this.targetNumber}.`;
        } else if (guess < this.targetNumber) {
            return "Too low! Try again.";
        } else {
            return "Too high! Try again.";
        }
    }

    getStatus() {
        if (this.tries >= this.maxTries) {
            return "lost";
        } else if (this.guessedNumbers.has(this.targetNumber)) {
            return "won";
        } else {
            return "ongoing";
        }
    }
}

export default GuessingGame;