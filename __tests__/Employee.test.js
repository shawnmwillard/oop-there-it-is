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

it ("Can set employee email", () => {
    const testEmail = "test@email.com";
    const e = new Employee(email);
    expect(e.email).toBe(testEmail);

});

it ("Can get name from getName()", () => {
  const name = "Aang";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

it ("Can get Id from getId()", () => {
    const Id = "testID";
    const e = new Employee(Id);
    expect(e.getId()).toBe(testEmail);
});

it ("can get Id from getEmail()", () => {
    const testId = "testID2";
    const e = new Employee(testId);
    expect(e.getEmail()).toBe(testId);
});


it('return "employee" when getRole() is used', () => {
  const expOut = "Employee";
  const e = new Employee("Aang", 1, "test@test.com");
  expect(e.getRole()).toBe(expOut);
});
