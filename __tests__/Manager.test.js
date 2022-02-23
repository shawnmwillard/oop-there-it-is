class Manager {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    getName();
    getId();
    getEmail();
    officeNumber();
    getRole("Manager"); //Overriden to return 'Manager'
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

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
