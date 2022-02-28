const generateHTML = require("./src/generateHTML");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

const addEmployee = () => {
  console.log("Adding Employee!");

  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Choose your role.",
      choices: ['Engineer', 'Intern'],
    },
    {
      type: "input",
      name: "name",
      message: "Enter the name of the employee.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter the employee's name.");
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter Employee ID.",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log ("Enter Empoyee ID.")
                return false;
            } else {
                return true;
            }
        }
    },
    {
       type: 'input',
       name: 'email',
       message: "Enter employee email.",
       validate: email => {
           valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
           if (valid) {
               return true;
           } else {
            console.log ('ENTER AN EMAIL, SILLY!')
            return false;
           }
       }
    },
    {
        type: 'input',
        name: 'role',
        message: "Enter employee role.",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log ("Enter employee role.")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter employee office number.",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log ("Enter employee office number.")
                return false;
            } else {
                return true;
            }
        }
    },
  ])
  .then(employeeData => {
      let { name, id, email, role, officeNumber, confirmAddEmployee } = employeeData;
      let employee;

      if (role === "Engineer") {
          employee = new Engineer (name, id, email, officeNumber);

          console.log(Engineer);

      } else if (role === "Intern") {
          employee = new (name, id, email);

          console.log(Intern);

      } else if (role === "Manager") {
          employee = new (name, id, email, officeNumber);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
          return addEmployee(teamArray);
      } else {
          return teamArray;
      }
  })
};

const writeFile = data => {
    fs.writeFile('./dist/index,html', data, err => {
        if (err) {
            console.log("An error occurred.");
            return;
        } else {
            console.log("Congrats! Your team profile has been created successfully! Open the index.html file to check it out!")
        }
    })
};

addEmployee()
    .then(teamArray => {
      return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
