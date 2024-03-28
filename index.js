#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess the number between 1-5: ",
    },
]);
console.log(answer);
if (answer.userguessednumber === randomNumber) {
    console.log("congratulations! you guessed the right number");
}
else {
    console.log("Oops! you guessed wrong number");
}
