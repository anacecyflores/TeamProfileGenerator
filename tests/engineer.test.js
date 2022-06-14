const Engineer = require("../lib/engineer");

//test inheritance/create engineer object
test("engineer object", () => {
  const eng = new Engineer(
    "username",
    "01",
    "username01@test.com",
    "username01"
  );
  expect(eng.name).toBe("username");
  expect(eng.id).toBe("01");
  expect(eng.email).toBe("email@test.com");
  expect(eng.github).toBe("username01");
});

//test github grab
test("engineer github", () => {
  const eng = new Engineer(
    "username",
    "47",
    "username01@test.com",
    "username01"
  );
  expect(eng.getGitHub()).toEqual(expect.stringContaining("username01"));
});

//check role for 'engineer'
test("getRole() function returns Engineer", () => {
  const role = "Engineer";
  const eng = new Engineer(
    "username",
    "01",
    "username01@test.com",
    "username01"
  );
  expect(eng.getRole()).toBe(role);
});
