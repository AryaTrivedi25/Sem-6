const readline = require('readline');
const GuessingGame = require('./guessingGame');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const game = new GuessingGame();

console.log("Welcome to the Guessing Game!");
console.log(`You have ${game.maxTries} tries to guess the correct number between 1 and 100.`);

function askGuess() {
    rl.question('Enter your guess: ', (input) => {
        const guess = parseInt(input, 10);
        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } 
        else {
            const result = game.makeGuess(guess);
            console.log(result);

            if (game.isGameOver()) {
                console.log("Max tries reached. The correct number was " + game.randomNumber + ".");    
                rl.close();
                return;
            }
        }
        askGuess();
    });
}

askGuess();