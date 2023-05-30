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
        suffix: ' Saves on editor close.',
        waitUserInput: true,
    },
    {
        type: 'editor',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
        prefix: 'USAGE: ',
        waitUserInput: true,
    },
    {
        type: 'editor',
        message: 'List ideas for future development',
        name: 'roadmap',
        prefix: 'ROADMAP: ',
        waitUserInput: true,
    },
    {
        type: 'editor',
        message: 'List your collaborators, if any, with links to their GitHub profiles.\n   If you used any third-party assets that require attribution, list the creators with links.',
        name: 'credit',
        prefix: 'CREDITS: ',
        waitUserInput: true,
    },
    {
        type: 'editor',
        message: 'If you created an application or package and would like other developers to contribute it,\n   add guidelines for how to do so. ',
        name: 'contribute',
        prefix: 'CONTRIBUTING: ',
        waitUserInput: true,
    },
    {
        type: 'editor',
        message: 'Write tests for your application. Then provide examples on how to run them.',
        name: 'test',
        prefix: 'TESTS: ',
        waitUserInput: true,
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        prefix: 'QUESTIONS: ',
        filter: (answer) => answer.trim()
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        prefix: 'QUESTIONS: ',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
            return "You have to provide a valid email address!"
            }
            return true
        }
    },
    {
        type: 'editor',
        message: 'Write instructions on how to reach you with additional questions',
        name: 'questions',
        prefix: 'QUESTIONS: ',
        waitUserInput: true,
    }
];