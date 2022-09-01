// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log("This is a README file Generator!")
console.log("Answer these questions to generate your custom README file.")

//to get license badge to and link
function licenseBadge(value) {
    if (value === 'MIT License') {
        return "[![license: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://opensource.org/licenses/MIT)";

    } else if (value === 'GNU GPLv3') {
        return "[![license: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-yellow)](https://www.gnu.org/licenses/gpl-3.0.en.html)";

    } else if (value === 'Apache') {
        return "[![license: Apache](https://img.shields.io/badge/license-Apache-orange)](https://www.apache.org/licenses/)";

    } else {
        return "[![license: OpenBSD]https://img.shields.io/badge/license-OpenBSD-red)](https://www.openbsd.org/)";

    }
}

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


function writeToRM(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("Creating your custom README file.");

        data.licenseBadge = licenseBadge(data.license);

        writeToRM("./output/README.md", data);
        console.log("README file is in the 'output' folder");
    });
}
// Function call to initialize app
init();
