const prompt = require("prompt-sync")();

const question = Number(prompt("Enter number of sides your dice has: "));

const random = Math.random();
const numSides = random * question + 1;
const round = Math.floor(numSides);

console.log(round);
