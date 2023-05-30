import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import * as path from 'path';
import {generateMarkdown} from './utils/generateMarkdown.js'; //named import
import {questions} from './utils/questionsObject.js'; //named import

// function to write README file
function writeToFile(data) {  
    let markup = generateMarkdown(data);
    fs.writeFile('generated--README.md', markup,
       (err) =>
         err ? console.error(chalk.red.bold(err)) : console.log(chalk.green.bold('\nSuccessfully written to generated--README.md'))
        )
}

// function to initialize program
    const init = () => {
        console.log(chalk.cyan.bold('\nWelcome to the README generator\n'));
        console.log('Please answer the following questions...');

    inquirer
        .prompt(questions)
        .then(data => 
          writeToFile(data)
        )
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