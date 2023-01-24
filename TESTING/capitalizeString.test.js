const capitalizeString = require("../capitalizeString");

test("capitalizeString function exists", () => {
  expect(capitalizeString).toBeDefined();
});

test("Capitalize a string", () => {
  expect(capitalizeString("rachel")).toEqual("Rachel");
});
