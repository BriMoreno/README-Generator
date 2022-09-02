
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # License
  ${data.licenseBadge}

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
  -[License Description](#-License-Description)
 
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
  These are the things I used to create my projects
  ${data.technology}

  # License Description
  ${data.LicenseSection}

  # Questions
  If there are any questions you can contact me at:
  * GitHub: ${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
