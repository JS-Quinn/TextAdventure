const inquirer = require('inquirer');
var playerHealth = 50;
var zombieHealth = 15;

function randomNum() {
    return (Math.floor(Math.random() * 5) + 1);
};

function runGame() {
    inquirer
    .prompt([
        {
            type: "list",
                message: "Try to stay alive! Choose a number between 1-5",
                choices: ["1", "2", "3", "4", "5"],
                name: "playerAttack"
        },
    ]).then(function(inquirerResponse) {
        var zombieAttack = randomNum();
        console.log("Zombie rolled " + zombieAttack);
        if (parseInt(inquirerResponse.playerAttack) === zombieAttack) {
            zombieHealth = zombieHealth - 5;
            console.log("You did 5 damage to the zombie");
            console.log("Zombie health is " + zombieHealth + "." + "Your health is " + playerHealth + ".");
            if (zombieHealth <= 0) {
                return console.log("You defeated the zombie!");
            }
            if (playerHealth <= 0) {
                return console.log("You died.");
            }
            runGame();
        } else {
            playerHealth = playerHealth - 5;
            console.log("The zombie did 5 damage!");
            console.log("Zombie health is " + zombieHealth + "." + "Your health is " + playerHealth + ".");
            if (zombieHealth <= 0) {
                return console.log("You defeated the zombie!");
            }
            if (playerHealth <= 0) {
                return console.log("You died.");
            }
            runGame();
        };
    })
};

runGame();