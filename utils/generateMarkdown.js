// function to generate markdown for README
export function generateMarkdown (data) {
//console.log('data.length: ' + Object.keys(data).length);

return `# ${data.title}
![licence badge](${data.licence.icon}?style=flat-square)
## Description
<a name="description"></a>
${data.description}

${Object.keys(data).length > 4 ? `
## Table of Contents
- [Description](#description)
${data.install ? `
- [Installation](#installation)
` : ``}
${data.usage ? `
- [Usage](#usage)
` : ``}
${data.roadmap ? `
- [Roadmap](#roadmap)
` : ``}
${data.credit ? `
- [Credits](#credit)
` : ``}
${data.contribute ? `
- [Contributing](#contribute)
` : ``}
${data.test ? `
- [Tests](#test)
` : ``}
${data.github || data.email || data.question ? `
- [Questions](#question)
` : ``}
- [License](#license)
` : ``}

${data.install ? `
## Installation
<a name="installation"></a>
${data.install}
` : ``}
${data.usage ? `
## Usage
<a name="usage"></a>
${data.usage}
` : ``}
${data.roadmap ? `
## Roadmap
<a name="roadmap"></a>
${data.roadmap}
` : ``}
${data.credit ? `
## Credits
<a name="credit"></a>
${data.credit}
` : ``}
${data.contribute ? `
## Contributing
<a name="contribute"></a>
${data.contribute}
` : ``}
${data.test ? `
## Tests
<a name="test"></a>
${data.test}
` : ``}

${data.github || data.email || data.question ? `
## Questions
<a name="question"></a>
${data.github ? `
- GitHub: https://github.com/${data.github}   
` : ``}
${data.email ? `
- Email: ${data.email}   
` : ``}
${data.question ? `
${data.question}
` : ``}
` : ``}

## License
<a name="licence"></a>
${data.licence.info}
`;
}

// module.exports = generateMarkdown; // this is CommonJS not ES6
// export function generateMarkdown() // ESmodules