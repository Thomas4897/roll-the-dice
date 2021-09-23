const prompt = require("prompt-sync")();

const question = prompt("Enter number of sides your dice has: ");

const random = Math.random();
const timesTen = random * (question + 1);
const round = Math.floor(timesTen);

console.log(round);
