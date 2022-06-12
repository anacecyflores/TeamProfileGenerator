const fs = require("fs");
const inquirer = require("inquirer");
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//type paths
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// Array of questions for user input:
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Github",
      message: "Please provide your Github Username.",
    },

    