// function to generate markdown for README
//const generateMarkdown = (data) => {
export function generateMarkdown (data) {
  // let index = licence.findIndex(e => e.value === data.licence);
  // if (index !== -1) {
  //     console.log('licenceName: ' + licence[index].name);
  //     licenceName = licence[index].name;
  //     console.log('licenceName: ' + licenceName);
  // 
  return `# ${data.title}
  ![licence badge](${data.licence}?style=flat-square)
  ## Description
  ${data.description}
  ## Table of Contents
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## API
  ${data.api}
  ## Roadmap
  ${data.roadmap}
  ## Credits
  ${data.credits}
  ## Contributing 
  ## Tests 
  ## Questions
  ## License
  ${data.licence}
  `;

}
// * Description 
// * Table of Contents 
// * Installation 
// * Usage 
// * License 
// * Contributing 
// * Tests 
// * Questions


    // let index = licence.findIndex(e => e.value === data.licence);
    // if (index !== -1) {
    //     console.log('licenceName: ' + licence[index].name);
    //     licenceName = licence[index].name;
    // }

//module.exports = generateMarkdown; // this is CommonJS not ES6
//export function generateMarkdown() // ESmodules

//fs.writeFile('generated--README.md', generateMarkdown);
