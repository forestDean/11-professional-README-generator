import inquirer from 'inquirer';
import fs from 'fs';
//import path  from 'path ';
import * as path from 'path';
import generateMarkdown from './utils/generateMarkdown.js'
//const generateMarkdown = require("./utils/generateMarkdown");
//const generateMarkdown = import("./utils/generateMarkdown.js") // *THIS CAUSES CONSOLE TO NOT PAUSE*

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        // filter: (title) => {
        //     title.toLowerCase().split(' ')
        //     // // .split(' ')
        //     //.map(word) => {
        //     .map(function(word) {
        //         //return (word.charAt(0).toUpperCase() + word.slice(1)); 
        //         return word.replace(word[0], word[0].toUpperCase());
        //         //return title.join(' ');  
        //     });
        //      return title.join(' '); 

        // }
    },
    {
        type: 'input',
        message: 'Write a brief description.',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Write a summary about yourself?',
        name: 'summary',
        waitUserInput: true,
    },
    {
        type: 'input',
        message: 'License',
        name: 'licence',
        default: 'MIT',
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
    console.log(data.title);
    console.log(data.description);
    console.log(data.summary);
    console.log(data.licence);
    //generateMarkdown(data);
    

     fs.writeFile('log.text', data.title,
    //fs.writeFile('generated--README.md', generateMarkdown,
       (err) =>
         err ? console.error(err) : console.log('Successfully written to generated--README.md')
        )

}

// function to initialize program
//async function init() {
//const getData = await 
//function init() {
const init = async () => {
    console.log('Welcome to the README generator...');
    //const data =

inquirer
    .prompt(questions)
    .then(data => 
    //await(() =>
        //fs.writeFile('generateMarkdown.js', generateMarkdown(data))
        writeToFile(data)
        //return data
    )
    .then(() => console.log('Successfully written to writeToFile()'))
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
    });
    
 };

// function call to initialize program
init();