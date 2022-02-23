const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
      super(name, id, email)
      this.github = github
    }
  
    getGitHub() {
      return this.github;
    }
    getRole() {
      return "Engineer";
    } // Overriden to return 'Engineer'
  }
  module.exports = Engineer;
  // This class is an Engineer parent class with the following properties and methods:
  
  // name
  
  // id
  
  // email
  
  // getName()
  
  // getId()
  
  // getEmail()
  
  // getRole() // Returns 'Employee'
  
  // In addition to Employee's properties and methods, Engineer will also have:
  
  // github // GitHub username
  
  // getGithub()
  
  // getRole() // Overridden to return 'Engineer'
  