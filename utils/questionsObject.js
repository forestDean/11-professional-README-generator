import {licence} from './licenceObject.js'; //named import

// array of questions for user
export const questions = [

    // {
    //     type: 'input',
    //     message: 'What is your project name?',
    //     name: 'title',
    //     prefix: 'TITLE: ',
    //     validate: (answer) => {
    //         if(!answer) {
    //             return "Please, answer the question!";
    //         }
    //         return true;
    //     },
    //     filter: (answer) => {
    //         if(answer) {
    //             answer = answer.trim();
    //             answer = answer.toLowerCase().split(' ')
    //             .map(function(answer) {; 
    //                 return answer.replace(answer[0], answer[0].toUpperCase());
    //             });
    //             return answer.join(' '); 
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     message: 'Write a brief project summary.',
    //     name: 'description',
    //     prefix: 'DESCRIPTION: ',
    //     filter: (answer) => answer.trim(),
    //     validate: (answer) => {
    //         if(!answer) {
    //             return "Please, answer the question!";
    //         }
    //         return true;
    //     }
    // },
    {
        type: 'list',
        message: 'Choose your license from the menu.',
        name: 'licence',
        prefix: 'LICENCE: ',
        default: 'MIT',
        choices: licence,
        loop: false,
        pageSize: 14,
        // filter: function( answer ) {
        //     //answer = "MIT extra " + answer.length;
        //     //answer = "MIT extra " + value[0];
        //     //answer = "output: " + answer.license;
        //     //answer = "output: " + answer.details;
        //     answer = answer.icon + licence.indexOf(answer.icon);
        //     answer = answer.icon;
        //     //console.log('here')

        //     //console.log(answer.license)
        //     //console.log('x: ' + answer);
        //     //return indexOf(answer);
        //     return answer;
        //},
     },
    // {
    //     type: 'editor',
    //     message: 'Write a summary about yourself?',
    //     name: 'summary',
    //     waitUserInput: true,
    // },
    // {
    //     type: 'input',
    //     message: 'What is your email address?',
    //     name: 'email',
    // validate: (answer) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //     if (!emailRegex.test(answer)) {
    //       return "You have to provide a valid email address!"
    //     }
    //     return true
    //   }
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
    //}

];
