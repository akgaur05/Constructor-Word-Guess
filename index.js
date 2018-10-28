// npm_modules required
const inquirer = require("inquirer");
const chalk = require("chalk");
const ui = new inquirer.ui.BottomBar();

// exports from external files
const Word = require("./word.js");

// global variables defined
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let correctLtr = [];
let guessCount;
let wordString;
let wordObj;
let wordBank = ["algorithm", "binary", "bug", "callback", "database", "function", "loop", "library", "programmer", "servers", "variable", "website"];

// intro message
ui.log.write(chalk.hex("#deaded").bold("*** Let's Play Word Guess ***"));

// who's playing?
let playerName;
const newPlayer = function() {
    inquirer.prompt([
        {
            name: "name",
            message: chalk.bold("What's your name?"),
            type: "input",
            validate: function validateGuess(guess) {
                return guess !== "" && /[a-z]/i.test(guess) && guess.length > 2;
            }
        }
    ]).then((a) => {
        let b = a.name.toLowerCase();
        playerName = b.replace(b[0], b[0].toUpperCase());;
        newGame();
    });
};

// do you want to play hangman?
const newGame = function() {
    inquirer.prompt([
        {
            name: "start",
            message: "Start a New Game?",
            type: "confirm",
        }
    ]).then((a) => {
        if (a.start === true) {
            wordString = wordBank[Math.floor(Math.random() * wordBank.length)];
            wordObj = new Word(wordString);
            hangman();
        }
        else {
            ui.log.write(`==>  Ok. See you next time, ${chalk.cyan(playerName)}!`);
        }
        guessCount = 8;
        correctLtr = [];
    });
};

// game play
const hangman = function() {
    inquirer.prompt([
        {
            name: "guess",
            message: wordObj.show()
            + (`\n\nPlease Guess a Letter, ${chalk.cyan(playerName)}!`)
            + chalk.dim(`\n[RETURN] for randomly generated letter`)
            + `\n${chalk.cyan("Guess:")} `,
            type: "input",
            default: alphabet.charAt(Math.floor(Math.random() * 26)),
            validate: function validateGuess(guess) {
                guess.toLowerCase();
                return guess !== "" && guess.length === 1 && /[a-z]/i.test(guess);
            }
        }
    ]).then((a) => {
        let gotOne = false;
        wordObj.guess(a.guess);
        wordObj.array.forEach(e => {
            if (e.letter === a.guess) {
                gotOne = true;
                correctLtr.push(e.letter);
            }
        });
        if (gotOne === true) {
            ui.log.write(chalk.hex("#deaded").bold(`\nThat is absolutely ${chalk.hex("#eddead").bold("RIGHT")}!\n`));
        } else {
            guessCount--;
            ui.log.write(chalk.redBright.bold(`\nWRONG! `) + chalk.dim(`${guessCount} Chances Left\n`));
        }
        if (guessCount > 0) {
            if (correctLtr.length === wordString.length) {
                ui.log.write(chalk.black.bgHex("#eddead").bold(` Great game, ${playerName}! YOU WON! \n`));
                newGame();
            } else {
                hangman();
            }
        } else {
            ui.log.write(chalk.black.bgHex("#eddead").bold(` Oh, no! You're out of guesses, ${playerName}. \n`));
            newGame();
        }
    });
};

newPlayer();