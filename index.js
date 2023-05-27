import inquirer from 'inquirer';
import fs from 'fs';
//import path  from 'path ';
import * as path from 'path';
// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
const generateMarkdown = import("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Project name?',
        name: 'projectname',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your location?',
    //     name: 'location',
    // },
    // {
    //     type: 'editor',
    //     message: 'Write a summary about yourself?',
    //     name: 'summary',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your email address?',
    //     name: 'email',
    //     // validate: function (email) {
      
    //     //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
    //     //     if (valid) {
    //     //       console.log("Great job");
    //     //         return true;
    //     //     } else {
    //     //         console.log(".  Please enter a valid email")
    //     //         return false;
    //     //     }
    // },
    // {
    //     type: 'number',
    //     message: 'What is your phone number?',
    //     name: 'phone',
    //     //validate:
    // },
    // {
    //     type: 'input',
    //     message: 'What is your LinkedIn URL?',
    //     name: 'linkedin',
    //     default: 'https://www.'
    //     //validate:
    // },
    // {
    //     type: 'input',
    //     message: 'What is your GitHub URL?',
    //     name: 'github',
    //     default: 'https://www.'
    //    // validate:
    // },
    // {
    //     type: 'input',
    //     message: 'What is your website URL?',
    //     name: 'website ',
    //     default: 'https://www.'
    //     // validate:
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('log.txt',
        `${data.projectname}`,
         (err) =>
         err ? console.error(err) : console.log('Saved!')
        )
}

// function to initialize program
//function init() {
const init = () => {
//node index.js
inquirer.prompt([
     ...questions
])
.then(() =>
    writeToFile(data)
)
};

// function call to initialize program
init();
