import inquirer from 'inquirer';
import fs from "fs/promises";

let { title, description, installation, usage, contributors, license, gitHub, email} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's the title of your project?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a short description of the project",
            default() {
                return 'Not applicable';
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: "What installation does your project/application require in order to work?",
            default() {
                return 'Not applicable';
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is your project used for?",
            default() {
                return 'Not applicable';
            },
        },
        {
            type: 'input',
            name: 'contributors',
            message: "Who are the contributors to this project?",
            default() {
                return 'Not applicable';
            },
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['MIT', 'Apache', 'GPLv2'],
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What's your GitHub username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
        },
    ])

let readMeText = `# ${title}


# Table of contents
- [Project title](#title)
- [Project description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- Questions
    - [GitHub](#gitHub)
    - [Email](#email)

## Project Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributors
${contributors}

## License
${generateLicense(license)}

## Questions
##### GitHub: https://github.com/${gitHub}
##### Email address: ${email}`


await fs.writeFile("projectREADME.md", readMeText);


function generateLicense(license) {

    if (license === 'MIT') {

        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else {

        if (license === 'Apache') {
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }

        else {
            return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
        }
    }
};

console.log('success');
