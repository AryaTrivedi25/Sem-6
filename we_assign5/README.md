# Guessing Game Project

This project implements a "Guessing Game" along with a Binary Search algorithm and a Substitution Cipher. Below are the details of each component and how to run the project.

## Table of Contents
- [Getting Started](#getting-started)
- [Game Instructions](#game-instructions)
- [Binary Search](#binary-search)
- [Substitution Cipher](#substitution-cipher)
- [License](#license)

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd guessing-game
npm install
```

### Running the Game

To run the Guessing Game, execute the following command:

```bash
node src/guessingGame.js
```

Follow the prompts in the console to play the game.

## Game Instructions

1. The game will generate a random number between 1 and 100.
2. You will have a limited number of tries to guess the number.
3. After each guess, you will receive feedback indicating whether your guess was too high, too low, or correct.
4. If you guess the number within the allowed tries, you win! Otherwise, you lose.

## Binary Search

The Binary Search algorithm is implemented in `src/binarySearch.js`. It exports a function `binarySearch` that takes a sorted array and a target value as parameters. It returns the index of the target if found, or -1 if not found.

### Usage

To use the binary search function:

```javascript
const { binarySearch } = require('./binarySearch');

const sortedArray = [1, 2, 3, 4, 5];
const target = 3;
const index = binarySearch(sortedArray, target);
console.log(index); // Output: 2
```

## Substitution Cipher

The Substitution Cipher is implemented in `src/substitutionCipher.js`. It exports two functions: `generateKey` and `encode`.

### Usage

To use the substitution cipher:

```javascript
const { generateKey, encode } = require('./substitutionCipher');

const key = generateKey();
const encodedMessage = encode("Hello World", key);
console.log(encodedMessage);
```

## License

This project is licensed under the MIT License.