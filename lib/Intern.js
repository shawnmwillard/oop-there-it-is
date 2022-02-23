const Employee= require('./Employee')
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email,)
        this.school = school
      }
    
      getSchool() {
          return this.school;
      }

      getRole() {
          return "Intern";
      }
    }

    module.exports = Intern
// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'
