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
            name: 'description',
            message: "Write a short description of the project",
            default() {
                return 'Not applicable';
            },
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
            name: 'description',
            message: "Write a short description of the project",
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