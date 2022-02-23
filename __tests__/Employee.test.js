const Employee = require("../lib/Employee");

it("Can create a new Employee class", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

it("Can set name of employee class", () => {
  const name = "Aang";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

it("Can set id of employee class", () => {
  const testId = 100;
  const e = new Employee("Aang", testId);
  expect(e.id).toBe(testId);
});

// it can set employee email
// expect e.email to be testEmail

it("Can get name from getName()", () => {
  const name = "Aang";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

// it can get Id from getId() method
// expect e.getId() to be testEmail

// it can get Id from getEmail() method
// expect e.getEmail() to be testId

it('return "employee" when getRole() is used', () => {
  const expOut = "Employee";
  const e = new Employee("Aang", 1, "test@test.com");
  expect(e.getRole()).toBe(expOut);
});
