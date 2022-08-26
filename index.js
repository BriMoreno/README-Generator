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
        } else {
            console.log('Please enter a title');
            return false;
        }
    }
},
{ //project description
    type: 'input',
    name: 'purpose',
    message: 'Describe your project?',
    validate: project_purpose => {
        if (project_purpose) {
            return true;
        } else {
            console.log("Please enter a description.");
            return false;
        }
    }
},

{// installation
    type: 'input',
    name: 'means',
    message: 'How is your project installed?',
    validate: projectI => {
        if (projectI) {
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
    validate: projectI => {
        if (projectI) {
            return true;
        } else {
            console.log("Please enter how your project is used.")
            return false;
        }
    }

},
{//licesns
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
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data(err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Preview your README file.");
        }

    })
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.createPrompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
