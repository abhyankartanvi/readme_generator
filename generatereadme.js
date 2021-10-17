// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

function generateReadMe(info) {
  return `
##Project-Title: ${info.project - title}

##Licensing:
https://img.shields.io/badge/license-${info.licensing}-blue

## Description:
  ${info.description}

## Installation:
  ${info.installation}

## Usage:
  ${info.usage}

## License:
${info.licensing}

## Contribution:
${info.contribution}

## Testing:
${info.testing}

## Questions:
  - Github: [${info.github}](https://github.com/${info.github})
  - Email: ${info.email} `;
}

module.exports = generateReadMe;
