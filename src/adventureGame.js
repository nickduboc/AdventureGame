/*
Adventure Game
Text-Based game using JS as a small project for learning JS.
*/
// Add readline sync
const readline = require("readline-sync");
// Display game Title
console.log("Welcome to the Adveture Game!");
// Add a welcome message
console.log("\nPrepare yourself for an epic journey!");
//Create player
let playerName = "";
//Create variables for player stats
let health = 100;
let gold = 20;
let location = "village";
let gameRunning = true;
let inventory = [];
//Ask name
playerName = readline.question("What is your name? ");
console.log("Hello, " + playerName);
console.log("You have " + gold + " gold");