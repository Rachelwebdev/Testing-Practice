const stringLength = require("../string");

const runStringCode_1 = () => {
  throw new Error("Please Input your name");
};
const runStringCode_2 = () => {
  throw new Error("Your name is too long");
};

test("counts 'R' + 'a' + 'c' + 'h' + 'e' + 'l' to equal 6 ", () => {
  expect(stringLength("Rachel")).toEqual(6);

  expect(() => runStringCode_1()).toThrow(Error);
  expect(() => runStringCode_2()).toThrow(Error);
});
