const prompt = require("prompt-sync")();

const question = prompt("Enter number of sides your dice has: ");

const riggedSide = prompt("What side do you want to rig: ");

const random = Math.random();
const timesTen = random * (question + 1);
const round = Math.floor(timesTen);

let roll = Math.ceil(Math.random() * (side + 1));

if (roll === question + 1) {
	roll = riggedSide;
}

console.log("Your roll was", roll);
