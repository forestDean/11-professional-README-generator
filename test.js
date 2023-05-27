import inquirer from 'inquirer';
import fs from 'fs';
//import path  from 'path ';
import * as path from 'path';
// const generateMarkdown = require("./utils/generateMarkdown");
//const generateMarkdown = import("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Project name?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
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
function writeToFile(data) {
    console.log(data.projectname);
    console.log(data.location);
    // fs.appendFile('log.txt',
    //     `${data.projectname}`,
    //      (err) =>
    //      err ? console.error(err) : console.log('Saved!')
    //     )
}

// function to initialize program
//async function init() {
//const getData = await 
function init() {
inquirer.prompt(questions)
.then(data => 
//await(() =>
    // console.log(data.projectname);
    // console.log(data.location);
    writeToFile(data)
    //return data
);
};

// function call to initialize program
init();
