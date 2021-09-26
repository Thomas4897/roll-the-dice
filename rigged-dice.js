const prompt = require("prompt-sync")();

const question = Number(prompt("Enter number of sides your dice has: "));

let riggedSide = Number(prompt("What side do you want to rig: "));

const random = Math.random();
const numSides = random * (question + 1);
let round = Math.ceil(numSides);

console.log(round);

if (round === riggedSide + 1) {
	round = riggedSide;
}

console.log("Your roll was", round);
