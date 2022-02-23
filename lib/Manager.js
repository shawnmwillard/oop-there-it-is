const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
      }
    
    officeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"; //Overriden to return 'Manager'
  }
}
module.exports = Manager;
// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
