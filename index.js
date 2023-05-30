import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
//import path  from 'path ';
import * as path from 'path';
import {generateMarkdown} from './utils/generateMarkdown.js'; //named import
import {questions} from './utils/questionsObject.js'; //named import
//const ui = new inquirer.ui.BottomBar();

// function to write README file
function writeToFile(data) {  
    let markup = generateMarkdown(data);
    fs.writeFile('generated--README.md', markup,
       (err) =>
         err ? console.error(err) : console.log(chalk.green.bold('\nSuccessfully written to generated--README.md'))
        )
}

// function to initialize program
//function init() {
    const init = async () => {
        // console.log(chalk.white.bgBlue.bold('Welcome to the README generator...'));
        console.log(chalk.cyan.bold('\nWelcome to the README generator\n'));
        console.log('Please answer the following questions...');
        //ui.log.write('...here we go...');

    inquirer
        .prompt(questions)
        .then(data => 
        //await(() =>
            writeToFile(data)
        )
        //.then(() => console.log('Successfully written to writeToFile()'))
        .catch((error) => {
            if (error.isTtyError) {
              console.log(chalk.red.bold('Unable to render prompt in the current environment'));
            } else {
              console.log(chalk.red.bold('Unknown error'));
            }
        });
        
     };
     
// function call to initialize program
init();