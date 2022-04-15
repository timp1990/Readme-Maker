// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
    unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  };

  let badge = '';
  // Get license type
  switch (license) {
    case 'MIT':
      badge = badges.MIT;
      break;
    case 'ISC':
      badge = badges.ISC;
      break;
    case 'Mozilla':
      badge = badges.mozilla;
      break;
    case 'IBM':
      badge = badges.IBM;
      break;
    case 'Unlicense':
      badge = badges.unlicense;
      break;
    default:
      console.error('Error, choose one license');
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return '';
  }

  const links = {
    MIT: '(https://opensource.org/licenses/MIT)',
    ISC: '(https://opensource.org/licenses/ISC)',
    mozilla: '(https://www.mozilla.org/en-US/MPL/2.0/)',
    IBM: '(https://opensource.org/licenses/IPL-1.0)',
    unlicense: '(http://unlicense.org/)'
  };

  let link = '';
  // Get license type
  switch (license) {
    case 'MIT':
      link = links.MIT;
      break;
    case 'ISC':
      link = links.ISC;
      break;
    case 'Mozilla':
      link = links.mozilla;
      break;
    case 'IBM':
      link = links.IBM;
      break;
    case 'Unlicense':
      link = links.unlicense;
      break;
    default:
      console.error('Error, choose one license');
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  }
  licenseSection = `## License

The license for the software is ${license} the license.`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge = renderLicenseBadge(data.license[0]);
  let licenseLink = renderLicenseLink(data.license[0]);
  let licenseSection = renderLicenseSection(data.license[0]);

  let readmeText =

    `# ${data.title}

## Description

${data.description}

${licenseBadge}${licenseLink}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Step-by-step description of how to get the development environment running.
${data.installation}

## Usage

Instructions and examples for use. 
${data.usage}

${licenseSection}

## Contributing

If you would like to contribute,  please see the following Guidelines, and the Contibutor Covenant.
${data.contributionGuidelines} 
The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Tests for the system are : ${data.testInstructions}

## Questions

For any questions, please contact me via my GitHub account at: https://github.com/${data.gitHub}
or alternatively by email at: ${data.email}

`
  return readmeText;
}

module.exports = {
  generateMarkdown
};

