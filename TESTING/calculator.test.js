const Calculator = require("../calculator");

const calc = new Calculator(10, 5);

test("calculator object exists", () => {
  expect(calc).toBeDefined();
});

test("Addition function", () => {
  expect(calc.add()).toEqual(15);
});

test("Subtraction function", () => {
  expect(calc.subtract()).toEqual(5);
});

test("Multiplication function", () => {
  expect(calc.multiply()).toEqual(50);
});

test("Division function", () => {
  expect(calc.divide()).toEqual(2);
});
