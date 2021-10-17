const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  // project title
  {
    type: "input",
    name: "project-title",
    message: "What is your project-title?",
  },
  // description
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  // installation instructions
  {
    type: "input",
    name: "installation",
    message: "How to install your project?",
  },
  // usage information
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
  },
  // contribution guidelines
  {
    type: "input",
    name: "contribution",
    message: "How do you want your team-members to contribute to this project?",
  },
  // test instructions
  {
    type: "input",
    name: "testing",
    message: "How do you test your project?",
  },
  // license
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license for your project",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "Common-Development-and Distribution",
      "None",
    ],
  },
  // github username
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username",
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Would you like to include your email?",
  },
];

function init() {
  inquirer.prompt(questions);
}

init();
