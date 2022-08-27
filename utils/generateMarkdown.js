// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { if (license !== "N/A") {
  return (
    ''
  )
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  ## License
  [![license](https://img.shields.io/badge/license-${data.license}-success.svg)] (https://shields.io/category/license)

# ${data.title}

  ## Table of Contents
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
