const Employee = require("../lib/employee.js");

test("generate employee object", () => {
  const newEmp = new Employee("name", "Id #", "test@email.com");

  expect(typeof newEmp).toBe("object");
});

test("generate employee name", () => {
  const name = "name";
  const newEmp = new Employee(name);

  expect(newEmp.name).toBe(name);
});

test("generate employee id", () => {
  const id = "Id #";
  const newEmp = new Employee("name", "Id #", "test@email.com");

  expect(newEmp.id).toBe(id);
});

test("generate employee email", () => {
  const email = "test@email.com";
  const newEmp = new Employee("name", "Id #", "test@email.com");

  expect(newEmp.email).toBe(email);
});

test("generate role", () => {
  const role = "Employee";
  const newEmp = new Employee("name", "Id #", "test@email.com");

  expect(newEmp.getRole()).toBe(role);
});
