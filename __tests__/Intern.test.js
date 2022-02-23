class Intern {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    getName();
    getId();
    getEmail();
    school;
    getSchool();
    getRole("Intern"); //Overriden to return 'Intern'
  }
}

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
