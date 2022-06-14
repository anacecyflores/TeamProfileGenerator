const Manager = require("../lib/manager");

//test inheritance/create manager object
test("manager object", () => {
  const manager = new Manager("manager01", "01", "manager@test.com", "01");
  expect(manager.name).toBe("manager01");
  expect(manager.id).toBe("01");
  expect(manager.email).toBe("manager@test.com");
  expect(manager.officeNumber).toBe("01");
});

//test officeNumber grab
test("manager officeNumber", () => {
  const manager = new Manager("manager01", "01", "manager@test.com", "01");
  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("01"));
});

//check role for 'manager'
test("getRole() function returns manager", () => {
  const role = "Manager";
  const manager = new Manager("manager01", "01", "manager01@test.com", "01");
  expect(manager.getRole()).toBe(role);
});
