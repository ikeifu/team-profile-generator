// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    console.log(`Employee office number is: ${this.officeNumber}`);
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
const manager = new Manager("potroast", 4, "Piggy@pig.com", 6);
manager.getOfficeNumber();
module.exports = Manager;
