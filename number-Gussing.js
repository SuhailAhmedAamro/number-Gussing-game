#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(chalk.bgBlack.yellow.bold.inverse("Welcome To MindNum a Simple number guessing game!"));
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Boom! You've guessed the right number. Congratulations!"));
}
else {
    console.log(chalk.red("Oops! You've guessed the wrong number. Better luck next time!"));
}
