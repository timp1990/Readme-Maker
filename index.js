// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your description, include motivation, the problem and what you learnt',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Enter your test instructions',
        name: 'testInstructions',
    },
    {
        type: 'input',
        message: 'Enter your GitHub account for questions',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Enter your email address for questions',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'What license do you want to use?',
        name: 'license',
        choices: ['MIT', 'ISC', 'Mozilla', 'IBM', 'Unlicense'],
    }];

// TODO: Create a function to write README file --------------------------------------------------------------------------------------------------------

function writeToFile(fileName, data) {

    let readmeMarkdown = generateMarkdown.generateMarkdown(data);

    fs.writeFile('README.md', readmeMarkdown, err => {
        if (err) {
            console.error(err)
            return
        } else {
            console.log('File Written!')
            return
        }
    })
}
//--------------------------------------------------------------------------------------------------------

// TODO: Create a function to initialize app
function init() {

    // Run inquirer 
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile('README.md', response)

        );
}

// Function call to initialize app
init();
