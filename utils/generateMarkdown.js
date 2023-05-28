// function to generate markdown for README
// function generateMarkdown(data) {
const generateMarkdown = (data) =>
  //return 
  `# ${data.title}
  [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSBoudrias%2FInquirer.js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FSBoudrias%2FInquirer.js?ref=badge_shield)
  ## Description
  ${data.description}
  ## Installation
  ## Usage
  ## API
  ## Roadmap
  ## Credits
  ## License


`;
//}

module.exports = generateMarkdown;

fs.writeFile('generated--README.md', generateMarkdown);
