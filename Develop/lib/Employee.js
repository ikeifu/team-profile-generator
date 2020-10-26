// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(`Employee name is: ${this.name}`);
    return this.name;
  }
  getId() {
    console.log(`Employee ID number is: ${this.id}`);
    return this.id;
  }
  getEmail() {
    console.log(`Employee email is: ${this.email}`);
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// test employee
const employee = new Employee("Bob", 3, "miguel@hot.com");
// employee.getName();
// employee.getId();
// employee.getEmail();
// employee.getRole();
// console.log(employee.constructor);
module.exports = Employee;
