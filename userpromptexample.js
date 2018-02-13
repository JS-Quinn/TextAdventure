// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        },
        {
            type: "password",
            message: "Create a password.",
            mask: ".",
            name: "password"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        },
        {
            type: "list",
            message: "What is your favorite color?",
            choices: ["Red", "Blue", "Green,"],
            name: "color"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        },
        {
            type: "checkbox",
            message: "True or False?",
            choices: ["True", "False"],
            name: 'choice'
        }
    ]);
