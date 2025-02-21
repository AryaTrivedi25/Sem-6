class GuessingGame {
    constructor(maxTries = 5) {
        this.maxTries = maxTries;
        this.tries = 0;
        this.randomNumber = this.generateRandomNumber();
        this.guesses = new Set();
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    }

    makeGuess(guess) {
        if (this.tries >= this.maxTries) {
            return "Game over! You've run out of tries.";
        }

        if (this.guesses.has(guess)) {
            return "You've already guessed that number!";
        }

        this.guesses.add(guess);
        this.tries++;

        if (guess === this.randomNumber) {
            return "Congratulations! You've guessed the correct number.";
        } else if (guess < this.randomNumber) {
            return "Too low! Try again.";
        } else {
            return "Too high! Try again.";
        }
    }

    isGameOver() {
        return this.tries >= this.maxTries || this.guesses.has(this.randomNumber);
    }
}

module.exports = GuessingGame;