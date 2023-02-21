import inquirer from 'inquirer';
// import fs from "fs/promises";

let { title, description, } = await inquirer
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
            type: 'list',
            name: 'contributors',
            message: "Who are the contributors to this project?",
            default() {
                return 'Not applicable';
            },
        },
    ])

`# Project Title
${title}


## Project Description
${description}


###### The smallest heading`

console.log(title, description);