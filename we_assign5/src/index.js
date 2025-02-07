import GuessingGame from "./GuessingGame.js";
import readline from "readline";

const game = new GuessingGame();

game.startGame();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    rl.question("Make your guess : ", (guess) => {
        const result = game.makeGuess(parseInt(guess, 10));
        console.log(result);
        
        if(game.getStatus() === "ongoing") {
            askGuess();
        }
        else {
            rl.close();
        }
    })
}

askGuess();