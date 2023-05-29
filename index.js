import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
//import path  from 'path ';
import * as path from 'path';
import {generateMarkdown} from './utils/generateMarkdown.js'; //named import
import {questions} from './utils/questionsObject.js'; //named import
const ui = new inquirer.ui.BottomBar();



// function to write README file
// function writeToFile(markup) {
function writeToFile(data) {  
    let markup = generateMarkdown(data);
    fs.writeFile('generated--README.md', markup,
       (err) =>
         err ? console.error(err) : console.log('Successfully written to generated--README.md')
        )
}

// function to initialize program
//function init() {
    const init = async () => {
        console.log(chalk.white.bgBlue.bold('Welcome to the README generator...'));
        ui.log.write('...here we go...');

    inquirer
        .prompt(questions)
        .then(data => 
        //await(() =>
            writeToFile(data)
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
