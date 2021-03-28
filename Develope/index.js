// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs');
const generateTemplate = require("./src/page-template");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description.',
        name: 'description',
    },    
    {
        type: 'input',
        message: 'Install npm i',
        name: 'npmi',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'Usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license is this project under?',
        name: 'license',
        default: "MIT",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"]
    },
    {
        type: 'input',
        message: 'What contributions were made?',
        name: 'contributions',
    },
    {
        type: 'prompt',
        message: 'To run tests, enter the following command',
        name: 'npmTest',
        default: 'npm run test'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            {   console.log(response);
                writeToFile("?/?", response)}
            
        )
}

// Function call to initialize app
init();