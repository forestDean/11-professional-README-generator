//const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = import("./utils/generateMarkdown.js") // *THIS CAUSES CONSOLE TO NOT PAUSE*
//import generateMarkdown from './utils/generateMarkdown.js';


const testFunction = () => {
    console.log('Im the main function')
    generateMarkdown()
}

testFunction()