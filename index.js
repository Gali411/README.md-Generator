// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description:'
    },
    {
        type: 'input',
        name: 'install',
        message:'Enter installation instuctions:'
    },
    {
        type: 'input',
        name: 'usage',
        message:'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a lisence',
        choices: ['None', 'MIT', 'BSD', 'GPL', 'Apache']
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    let name = "./readme/" + fileName;

    fs.writeFile(name, data, (error) =>
        error ? console.error(error) : console.log(data)
      );
};

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then(answers => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md',readmeContent);
  });

}

// Function call to initialize app
init();
