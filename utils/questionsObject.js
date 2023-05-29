import {licence} from './licenceObject.js'; //named import

// array of questions for user
export const questions = [

    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
        prefix: 'TITLE: ',
        validate: (answer) => {
            if(!answer) {
                return "Please, answer the question!";
            }
            return true;
        },
        filter: (answer) => {
            if(answer) {
                answer = answer.trim();
                answer = answer.toLowerCase().split(' ')
                .map(function(answer) {; 
                    return answer.replace(answer[0], answer[0].toUpperCase());
                });
                return answer.join(' '); 
            }
        }
    },
    {
        type: 'input',
        message: 'Write a brief project summary.',
        name: 'description',
        prefix: 'DESCRIPTION: ',
        filter: (answer) => answer.trim(),
        validate: (answer) => {
            if(!answer) {
                return "Please, answer the question!";
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Choose your license from the menu.',
        name: 'licence',
        prefix: 'LICENCE: ',
        default: 'MIT',
        choices: licence,
        loop: false,
        pageSize: 14,
     },
    {
        type: 'editor',
        message: 'What are the steps required to install your project?',
        name: 'install',
        prefix: 'INSTALLATION: ',
        waitUserInput: true,
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        prefix: 'QUESTIONS: ',
        filter: (answer) => answer.trim()
    }
 
];