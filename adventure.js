const inquirer = require('inquirer');

var playerHealth = 100;
var zombieHealth = 15;
var scavengerHealth = 15;
var dogHealth = 25;
var catHealth = 10;
var dragonHealth = 30;
var victories = 0;
var playerAttack;

var obstacles = {
    obstacle1: "A zombie appears from nowhere and attacks you. Do something!",
    obstacle2: "A scavenger has snuck up behind you. Think fast!",
    obstacle3: "A pack of dogs have you surrounded. What now?",
    obstacle4: "An annoying cat keeps rubbing against your leg. Where did it come from. How is it surviving in the apocalypse? Who cares? Get rid of it.",
    obstacle5: "A dragon swoops down from the skies above. Duck, cover, attack!"
}
var randomObstacle = function (obj) {
    var keys = Object.keys(obstacles)
    return obstacles[keys[ keys.length * Math.random() << 0]];
}
function randomNum() {
    return (Math.floor(Math.random() * 6) + 1);
};

function combatRoll() {
    inquirer
    .prompt([
        {
            type: "confirm",
            message: "Press Enter to roll for attack.",
            name: "confirm",
            default: true
        }
    ]).then(function(inquirerResponse) {
        if (inquirerResponse.confirm === true) {
            playerAttack = randomNum();
        } else {
            console.log("Hmm. Maybe you should think about it some more.")
            combatRoll();
        }
    })
};

console.log("Welcome to Adventure Game!");
console.log("You've recently found yourself alone in the Apocalypse. Can you survive?");
console.log("When in combat, choose a number. If you match the attacking dice roll, you block.");
console.log("If you guess higher than the dice roll, you deal damage.");
console.log("If you guess lower than the dice roll, you take damage.");
console.log("Good luck. You're going to need it.");

// START GAME INQUIRER //
inquirer
.prompt([
    {
        type: "confirm",
        message: "Are you sure you want to start? It's pretty dangerous out there.",
        name: "confirm",
        default: true
    },
]).then(function(inquirerResponse) {
    if (inquirerResponse.confirm === true) {
        runGame();
    } else {
        console.log("Good choice. There's enough canned goods in this shed to last you a good... week and a half? Happy camping.");
    }
});

// GAME FUNCTIONALITY //
function runGame() {
    var enemy = randomObstacle();
    inquirer
    .prompt([
        {
            type: "confirm",
            message: "Press Enter to roll for attack.",
            name: "confirm",
            default: true
        }
    ]).then(function(inquirerResponse) {
        if (inquirerResponse.confirm === true) {
            combatRoll();
        } else {
            return console.log("Game Over");
        }
    })
    if (enemy === obstacles.obstacle1) {
        var zombieAttack = randomNum();
        console.log("Zombie rolled " + zombieAttack);
        if (parseInt(playerAttack) > zombieAttack) {
            zombieHealth = zombieHealth - 5;
            console.log("You did 5 damage to the zombie");
            console.log("Zombie health is " + zombieHealth + "." + "Your health is " + playerHealth + ".");
            combatRoll();
        }
        
        if (parseInt(playerAttack) < zombieAttack) {
            playerHealth = playerHealth - 5;
            console.log("The zombie did 5 damage!");
            console.log("Zombie health is " + zombieHealth + "." + "Your health is " + playerHealth + ".");
            combatRoll();
        }
        
        if (parseInt(playerAttack) === zombieAttack) {
            console.log("You blocked the zombie's attack.");
            combatRoll();
        }
       
        if (zombieHealth <= 0) {
            return console.log("You defeated the zombie!");
            victories++;
            runGame();
        }
        if (playerHealth <= 0) {
            return console.log("Is that a bite mark on your arm? You may not be dead yet, but... Game Over.");
        }
    }
}