import {licence} from './licenceObject.js'; //named import

// array of questions for user
export const questions = [

    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
        prefix: 'TITLE: '
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
        message: 'Write a brief project summary.',
        name: 'description',
        prefix: 'DESCRIPTION: '
    },
    {
        type: 'editor',
        message: 'Write a summary about yourself?',
        name: 'summary',
        waitUserInput: false,
    },
    {
        type: 'list',
        message: 'License',
        name: 'licence',
        prefix: 'LICENCE: ',
        default: 'MIT',
        choices: licence,
        loop: true,
        //pageSize: 14,
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
