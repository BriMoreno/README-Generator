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

    } else if (value === 'OpenBSD') {
        return "[![license: OpenBSD](https://img.shields.io/badge/license-OpenBSD-red)](https://www.openbsd.org/)";

    } else {
        return "";
    }
}

function renderLicenseSection(value) {
    if (value === 'MIT License') {
      return 'MIT License Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
      
     
    } else if (value === 'GNU GPLv3') {
      return "The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too. When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things. To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others."
     
    
    } else if (value === 'Apache') {
      return "The Apache Software Foundation uses various licenses to distribute software and documentation, and to accept regular contributions from individuals and corporations and larger grants of existing software products.These licenses help us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. In all cases, contributors retain full rights to use their original contributions for any other purpose outside of Apache while providing the ASF and its projects the right to distribute and build upon their work within Apache.";
     
    
    } else if (value === 'OpenBSD') {
    return 'Copyright law is complex, OpenBSD policy is simple — OpenBSD strives to provide code that can be freely used, copied, modified, and distributed by anyone and for any purpose. This maintains the spirit of the original Berkeley Software Distribution. The preferred wording of a license to be applied to new code can be found in the license template. OpenBSD can exist as it does today because of the example set by the Computer Systems Research Group at Berkeley and the battles which they and others fought to create a Unix source distribution un-encumbered by proprietary code and commercial licensing.The ability of a freely redistributable "Berkeley" Unix to move forward on a competitive basis with other operating systems depends on the willingness of the various development groups to exchange code amongst themselves and with other projects. Understanding the legal issues surrounding copyright is fundamental to the ability to exchange and re-distribute code, while honoring the spirit of the copyright and concept of attribution is fundamental to promoting the cooperation of the people involved.'
   
    
    }else {
      return "";
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
        data.renderLicenseSection = renderLicenseSection(data.licenseSection);
        writeToRM("./output/README.md", data);
        console.log("README file is in the 'output' folder");
    });
}
// Function call to initialize app
init();
