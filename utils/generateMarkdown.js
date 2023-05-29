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
  ![licence badge](${data.licence.icon}?style=flat-square)
  ## Description
  <a name="description"></a>
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)

  ## Installation
  <a name="installation"></a>
  ${data.install}
  ## Usage
  <a name="usage"></a>
  ${data.usage}
  ## Roadmap
  <a name="roadmap"></a>
  ${data.roadmap}
  ## Credits
  <a name="credit"></a>
  ${data.credit}
  ## Contributing
  <a name="contribute"></a>
  ${data.contribute}
  ## Tests
  <a name="test"></a>
  ${data.test}
  ## Questions
  <a name="question"></a>
    GitHub: https://github.com/${data.github}    
    Email: ${data.email}    
    ${data.question}



  ## License
  <a name="licence"></a>
  ${data.licence.info}
  `;

}

    // let index = licence.findIndex(e => e.value === data.licence);
    // if (index !== -1) {
    //     console.log('licenceName: ' + licence[index].name);
    //     licenceName = licence[index].name;
    // }

//module.exports = generateMarkdown; // this is CommonJS not ES6
//export function generateMarkdown() // ESmodules

//fs.writeFile('generated--README.md', generateMarkdown);
