// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, githubUser) {
    super(name, id, email);

    this.github = githubUser;
  }
  getGithub() {
    console.log(`Employee Github User is: ${this.github}`);
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
const test = new Engineer("Bob", 2, "test@test.com", "cool");
test.getGithub();
console.log(test.constructor);
module.exports = Engineer;
