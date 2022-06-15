//Require inquirer and fs
const inquirer = require('inquirer')
const fs = require('fs')

//Require Manager, Intern, and Engineer classes
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


//TODO: create a CLI that can accept user input, which will take user the user input and display as a HTML file.
//TODO: When email address is clicked, default email program will open and the "TO" field will populate
//TODO: When the Github username is clicked on the github profile is opened in a new tab
//TODO: Prompt the user for Manager name, Employee ID, email address, and Office Number
//TODO: After those prompts then you have option to add an engineer or intern to to complete the team
//TODO: When Engineer is selected user is prompted to enter engingeer's name, ID, email and Github username then taken back to menu
//TODO: When intern is selected user is name, ID, email and SChool then taken back to the menu
//TODO: WHen clicked on finished the application will complete and generate an HTML with cards that represent the team. 


//TODO:Create HTML template to be used, the output will filter to the dist folder
const generateHTML = () => {
  return `<!DOCTYPE html>
<html>
<title>Team Profile Generator</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>


  <h2 class="w3-center w3-pink w3-center">Team Profile Generator</h2>
  `
}

const generateManager = (manager) => {
  return `
<div class="w3-container w3-center">
  <div class="w3-card-4 w3-centered" style="width:100%;">
    <header class="w3-container w3-blue w3-center">
      <h1>${manager.name}</h1>
    </header>

    <div class="w3-container w3-center">
      <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p>ID: ${manager.id}</p>
      <p>Role: ${manager.role}<p>
      <p>Office Number: ${manager.officeNumber}
    </div>

    <footer class="w3-container w3-blue w3-center">
      <h5>Boss Man</h5>
    </footer>
    </div>
  </div>
  <hr>`
}

const generateEngineer = (engineer) => {
  return `
  <div class="w3-container w3-center">
    <div class="w3-card-4 w3-center" style="width:100%;">
      <header class="w3-container w3-green">
        <h1>${engineer.name}</h1>
      </header>

    <div class="w3-container w3-center">
      <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p>ID: ${engineer.id}</p>
      <p>Role: ${engineer.role}<p>
      <p>GitHub: <a href="https://github.com/${engineer.github}" target='_blank'>${engineer.github}</a></p>
    </div>

    <footer class="w3-container w3-green">
      <h5>Great teachers!</h5>
    </footer>
    </div>
  </div>
  <hr>`
}

const generateIntern = (intern) => {
  return `
  <div class="w3-container w3-center">
    <div class="w3-card-4 w3-center" style="width:100%;">
      <header class="w3-container w3-red">
        <h1>${intern.name}</h1>
      </header>

    <div class="w3-container w3-center">
      <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p>ID: ${intern.id}</p>
      <p>Role: ${intern.role}<p>
      <p>School: ${intern.school}</p>
    </div>

    <footer class="w3-container w3-red">
      <h5>Great to have you on board!</h5>
    </footer>
  </div>
</div>
<hr>`
}

const generatebottomHTML = () => {
  return `
  </body>
  </html>`
}


const managers = []
const interns = []
const engineers = []

//TODO: Create the questions list

const newQuestion = () => {
  return inquirer.prompt({
    type: "list",
    name: 'role',
    message: "New Employee's role?",
    choices: ['Manager', 'Engineer', 'Intern', 'Finish']
  })
    .then((data) => {
      const answer = data
      if (answer.role === 'Manager') {
        managerQuestions()
      } else if (answer.role === 'Engineer') {
        engineerQuestions()
      } else if (answer.role === 'Intern') {
        internQuestions()
      } else if (answer.role === 'Finish') {
        module.exports = managers
        module.exports = engineers
        module.exports = interns
        clearHTML()
        topHTML()
        managerGenerator()
        engingeerGenerator()
        internGenerator()
        bottomHTML()
        return answer
      }
    })
}
newQuestion()

const managerQuestions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the Managers name:',
    },

    {
      type: 'input',
      name: 'id',
      message: 'Id Number',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Manager Email',
    },
    {
      type: 'input',
      name: "officeNumber",
      message: 'Office Number',
    },
    {
      type: 'confirm',
      name: 'newMember',
      message: 'Would you like to add an additional member to this team?',
    },
  ])
    .then((data) => {
      const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber,
      )
      managers.push(newManager)
      console.log(data)
      newQuestion()
    })
}


const engineerQuestions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the Enigneers name?',
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineers ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineers email?',
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is the Engineers Github username? (Case Sensitive)',
    },
  ])
    .then((data) => {
      const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github,
      )
      engineers.push(newEngineer)
      console.log(data)
      newQuestion()
    })
}

internQuestions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the interns name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school is the intern from?'
    }
  ])
    .then((data) => {
      const newIntern = new Intern(
        data.name,
        data.id,
        data.email,
        data.school,
      )
      interns.push(newIntern)
      console.log(data)
      newQuestion()
    })
}

const clearHTML = () => {
  fs.unlinkSync('./index.html')
}

// Html Markdown generation
const topHTML = () => {
  fs.appendFileSync('index.html', generateHTML())
}

const managerGenerator = () => {
  managers.forEach(manager => {
    fs.appendFileSync('index.html', generateManager(manager))
  })
}

const engingeerGenerator = () => {
  engineers.forEach(engineer => {
    fs.appendFileSync('index.html', generateEngineer(engineer))
  })
}

const internGenerator = () => {
  interns.forEach(intern => {
    fs.appendFileSync('index.html', generateIntern(intern))
  })
}

const bottomHTML = () => {
  fs.appendFileSync('index.html', generatebottomHTML())
}