// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'MIT License') {
    [![license: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://choosealicense.com/licenses/mit/)
   
} else if (license === 'GNU GPLv3') {
    https://img.shields.io/badge/license-GNU%20GPLv3-yellow
} else if (license === 'Apache') {
    https://img.shields.io/badge/license-Apache-orange
} else if (license === 'OpenBSD') {
  https://img.shields.io/badge/license-OpenBSD-red
}else {
  https://img.shields.io/badge/license-N%2FA-lightgrey

}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    https://choosealicense.com/licenses/mit/
  } else if (license === 'GNU GPLv3') {
    https://choosealicense.com/licenses/gpl-3.0/
  } else if (license === 'Apache') {
    https://www.apache.org/licenses/
  
  } else if (license === 'OpenBSD') {
    https://www.openbsd.org/policy.html
  
  }else {
    console.log("no link to include");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
  
  } else if (license === 'GNU GPLv3') {
  
  } else if (license === 'Apache') {
  
  } else if (license === 'OpenBSD') {
  
  }else {
    console.log("nothing to return");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  # License
  [![license](https://img.shields.io/badge/license-${data.license}-success.svg)] (https://shields.io/category/license)

# ${data.title}

  # Table of Contents
  -[Description](#-Description)
  -[Installation](#-Installation)
  -[Usage](#-Usage)
  -[License](#-License)
  -[Contributing](#-Contributing)
  -[Tests](#-Tests)
  -[Technology](#-Technology)
  -[Questions](#-Questions)
 
  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.github}
  ${data.email}

  # Tests
  ${data.tests}

  # Technology
  ${data.technology}

  # Questions
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
