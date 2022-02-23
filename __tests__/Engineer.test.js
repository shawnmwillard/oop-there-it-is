class Engineer {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    getName();
    getId();
    getEmail();
    github; //GitHub Username
    getGitHub();
    getRole("Engineer"); // Overriden to return 'Engineer
  }
}

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
