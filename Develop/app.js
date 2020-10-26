const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
  {
    type: "list",
    name: "position",
    message: "What's your position?",
    choices: ["Intern", "Engineer", "Manager"],
  },

  //   { type: "Input", message: "What's your name?", name: "name" },
  //   { type: "Number", message: "What's your ID number?", name: "id" },
  //   { type: "Input", message: "What's your email?", name: "email" },
];
const internquestions = [
  { type: "input", message: "What's your name?", name: "name" },
  { type: "number", message: "What's your ID number?", name: "id" },
  { type: "input", message: "What's your email?", name: "email" },
  { type: "input", message: "What school did you go to?", name: "school" },
];
const managerquestions = [
  { type: "input", message: "What's your name?", name: "name" },
  { type: "number", message: "What's your ID number?", name: "id" },
  { type: "input", message: "What's your email?", name: "email" },
  { type: "number", message: "What's your office number?", name: "office" },
];
const engineerquestions = [
  { type: "input", message: "What's your name?", name: "name" },
  { type: "number", message: "What's your ID number?", name: "id" },
  { type: "input", message: "What's your email?", name: "email" },
  { type: "input", message: "What's your github account?", name: "github" },
];
const moreEmployees = [
  {
    type: "confirm",
    name: "employees",
    message: "Would you like to add more employees?",
  },
];
async function init() {
  let morePeople = true;

  while (morePeople === true) {
    const response = await inquirer.prompt(questions);
    switch (response.position) {
      case "Intern":
        const intern = await inquirer.prompt(internquestions);
        const newIntern = new Intern(
          intern.name,
          intern.id,
          intern.email,
          intern.school
        );
        employees.push(newIntern);
        break;
      case "Engineer":
        const engineer = await inquirer.prompt(engineerquestions);
        const newEngineer = new Engineer(
          engineer.name,
          engineer.id,
          engineer.email,
          engineer.github
        );
        employees.push(newEngineer);

        break;
      case "Manager":
        const manager = await inquirer.prompt(managerquestions);
        const newManager = new Manager(
          manager.name,
          manager.id,
          manager.email,
          manager.office
        );
        employees.push(newManager);
        break;
    }
    const check = await inquirer.prompt(moreEmployees);
    morePeople = check.employees;
  }
  let html = render(employees);
  fs.writeFile("team.html", html, (err) => {
    if (err) {
      return console.log("you messed up!");
    }
  });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will

// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
init();
