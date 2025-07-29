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
playerName = readline.question("\nWhat is your name? ");
console.log("\nHello, " + playerName + "!");
console.log("\nYou have " + gold + " gold");
//Weapon
let weaponDamage = 0;
console.log("\nYour weapon damage is "+ weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");
//Monster Defense value - higher when late game
let monsterDef = 5;
console.log("\nMonster Defense is " + monsterDef);
console.log("Monsters can withstand some damage in combat!");
//Health Potion
let healingPotionValue = 30;
console.log("\nThe Healing Potion can restore up to " + healingPotionValue + " HP!");