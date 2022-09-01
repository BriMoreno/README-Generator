// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return 'MIT License Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
    
   
  } else if (license === 'GNU GPLv3') {
    return "The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too. When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things. To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others."
   
  
  } else if (license === 'Apache') {
    return "The Apache Software Foundation uses various licenses to distribute software and documentation, and to accept regular contributions from individuals and corporations and larger grants of existing software products.These licenses help us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. In all cases, contributors retain full rights to use their original contributions for any other purpose outside of Apache while providing the ASF and its projects the right to distribute and build upon their work within Apache.";
   
  
  } else if (license === 'OpenBSD') {
  return 'Copyright law is complex, OpenBSD policy is simple — OpenBSD strives to provide code that can be freely used, copied, modified, and distributed by anyone and for any purpose. This maintains the spirit of the original Berkeley Software Distribution. The preferred wording of a license to be applied to new code can be found in the license template. OpenBSD can exist as it does today because of the example set by the Computer Systems Research Group at Berkeley and the battles which they and others fought to create a Unix source distribution un-encumbered by proprietary code and commercial licensing.The ability of a freely redistributable "Berkeley" Unix to move forward on a competitive basis with other operating systems depends on the willingness of the various development groups to exchange code amongst themselves and with other projects. Understanding the legal issues surrounding copyright is fundamental to the ability to exchange and re-distribute code, while honoring the spirit of the copyright and concept of attribution is fundamental to promoting the cooperation of the people involved.'
 
  
  }else {
    return "";
 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # License
  ${data.licenseBadge}

# ${data.title}

  # Table of Contents
  *[Description](#-Description)
  *[Installation](#-Installation)
  *[Usage](#-Usage)
  *[License](#-License)
  *[Contributing](#-Contributing)
  *[Tests](#-Tests)
  *[Technology](#-Technology)
  *[Questions](#-Questions)
  *[License Description](#-License Description)
 
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
  ${renderLicenseSection.license}

  # Questions
  If there are any questions you can contact me at:
  * GitHub: ${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
