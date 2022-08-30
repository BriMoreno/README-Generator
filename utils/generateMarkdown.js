// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
licenseBadge = [];

function renderLicenseBadge(license) { 
  if (license === 'MIT License') {
   licenseBadge = '[![license: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://choosealicense.com/licenses/mit/)';
   
} else if (license === 'GNU GPLv3') {
   licenseBadge = '[![license: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-yellow)](https://choosealicense.com/licenses/gpl-3.0/)';

} else if (license === 'Apache') {
   licenseBadge = '[![license: Apache](https://img.shields.io/badge/license-Apache-orange)](https://www.apache.org/licenses/)';

} else if (license === 'OpenBSD') {
   licenseBadge ='[![license: OpenBSD]https://img.shields.io/badge/license-OpenBSD-red)](https://www.openbsd.org/policy.html)';

}else {
  licenseBadge = 'https://img.shields.io/badge/license-N%2FA-lightgrey';

}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
licenseDes = '';
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    licenseDes = 'MIT License Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
   
  } else if (license === 'GNU GPLv3') {
  
  } else if (license === 'Apache') {
    licenseDes = "The Apache Software Foundation uses various licenses to distribute software and documentation, and to accept regular contributions from individuals and corporations and larger grants of existing software products.These licenses help us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. In all cases, contributors retain full rights to use their original contributions for any other purpose outside of Apache while providing the ASF and its projects the right to distribute and build upon their work within Apache.";
  
  } else if (license === 'OpenBSD') {

    licenseDes = 'Copyright law is complex, OpenBSD policy is simple — OpenBSD strives to provide code that can be freely used, copied, modified, and distributed by anyone and for any purpose. This maintains the spirit of the original Berkeley Software Distribution. The preferred wording of a license to be applied to new code can be found in the license template. OpenBSD can exist as it does today because of the example set by the Computer Systems Research Group at Berkeley and the battles which they and others fought to create a Unix source distribution un-encumbered by proprietary code and commercial licensing.The ability of a freely redistributable "Berkeley" Unix to move forward on a competitive basis with other operating systems depends on the willingness of the various development groups to exchange code amongst themselves and with other projects. Understanding the legal issues surrounding copyright is fundamental to the ability to exchange and re-distribute code, while honoring the spirit of the copyright and concept of attribution is fundamental to promoting the cooperation of the people involved.'
  
  }else {
    licenseDes = '';
    console.log("nothing to return");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(qResponses) {
  return `
  # License
  ${renderLicenseBadge.licenseBadge}

# ${qResponses.title}

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
  ${qResponses.description}

  # Installation
  ${qResponses.installation}

  # Usage
  ${qResponses.usage}

  # Contributing
  ${qResponses.github}
  ${qResponses.email}

  # Tests
  ${qResponses.tests}

  # Technology
  ${qResponses.technology}

  # License Description
  ${renderLicenseSection.licenseDes}

  # Questions
  ${qResponses.github}
  ${qResponses.email}
`;
}

module.exports = generateMarkdown;
