// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    console.log(`Employee school is: ${this.school}`);
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
const intern = new Intern("tim", 4, "timothy@tim.com", "timuversity");
intern.getSchool();
module.exports = Intern;
