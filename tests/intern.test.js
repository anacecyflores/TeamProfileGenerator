const Intern = require("../lib/intern");

//test inheritance/create intern object
test("intern object", () => {
  const intern = new Intern(
    "intern01",
    "01",
    "intern01@test.com",
    "northwestern"
  );
  expect(intern.name).toBe("intern01");
  expect(intern.id).toBe("01");
  expect(intern.email).toBe("intern@test.com");
  expect(intern.school).toBe("northwestern");
});

//test school grab
test("intern school", () => {
  const intern = new Intern(
    "intern01",
    "01",
    "intern@test.com",
    "northwestern"
  );
  expect(intern.getSchool()).toEqual(expect.stringContaining("northwestern"));
});

//check role for 'intern'
test("getRole() function returns Intern", () => {
  const role = "Intern";
  const intern = new Intern(
    "intern01",
    "01",
    "intern01@test.com",
    "northwestern"
  );
  expect(intern.getRole()).toBe(role);
});
