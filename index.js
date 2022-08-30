// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown.js');
const { syncBuiltinESMExports } = require('module');
const writeFile = util.promisify(fs.writeFile);

console.log("This is a README file Generator!")
console.log("Answer these questions to generate your custom README file.")
// TODO: Create an array of questions for user input
const questions = [

    //title of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: user_input => {
            if (user_input) {
                return true;
            } else {
                console.log('Please enter a title');
                return false;
            }
        }
    },
    { //project description
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a description.");
                return false;
            }
        }
    },

    {// installation
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log("Please enter how your project is installed.")
                return false;
            }
        }
    },

    {//usage
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("Please enter how your project is used.")
                return false;
            }
        }

    },
    {//license
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT License', 'GNU GPLv3', 'Apache', 'OpenBSD', 'N/A'],
        validate: project_license => {
            if (project_license) {
                return true;
            } else {
                console.log("Please enter how your project is used.")
                return false;
            }
        }

    },
    {//Github
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: ',
        validate: git_UN => {
            if (git_UN) {
                return true;
            } else {
                console.log("Please enter a username");
                return false;
            }
        }
    },
    {//email
        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter a email");
                return false;
            }
        }
    },
    { //project technology
        type: 'input',
        name: 'technology',
        message: 'What technology did you use make your project?',
        validate: technology => {
            if (technology) {
                return true;
            } else {
                console.log("Please respond.");
                return false;
            }
        }
    },
    { //project tests
        type: 'input',
        name: 'tests',
        message: 'Who tested your project?',
        validate: tests => {
            if (tests) {
                return true;
            } else {
                console.log("Please enter a value");
                return false;
            }
        }
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        console.log("Creating your custom README file.");
        writeToFile("./output/README>md", data);
        console.log("README file is in the 'output' folder");
    });
}
// Function call to initialize app
init();
