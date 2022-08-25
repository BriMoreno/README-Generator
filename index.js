// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

console.log("This is a README file Generator!")
console.log("Answer these questions to generate your custom README file.")
// TODO: Create an array of questions for user input
const questions = [{
        //title of project
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Please enter a title');
                return false;
            }
        }
    },
        { //what is the project for
            type: 'input',
            name: 'purpose',
            message: 'What is the purpose of your project?',
            validate: project_purpose => {
                if (project_purpose) {
                    return true;
                }else {
                    console.log("Please enter your project's purpose.");
                    return false;
                }
            }
        },

       {// how does it complete that purpose?
            type: 'input',
            name: 'means',
            message: 'How does your project fulfill that purpose?',
            validate: project_means => {
                if (project_means) {
                    return true;
                }else {
                    console.log("Please enter how your project fulfills it's task.")
                    return false;
                }
            }
       },

       {//media?
        type: 'input',
        name: 'media'
        message: ''

        }
        //links? works cited?
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
