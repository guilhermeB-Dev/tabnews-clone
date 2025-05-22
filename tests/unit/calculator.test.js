const calculator = require("../../models/calculator");

test("sum 2 + 2 return 4", () => {
  const result = calculator.somar(2, 2);
  expect(result).toBe(4);
});

test("sum 5 + 100 return 105", () => {
  const result = calculator.somar(5, 100);
  expect(result).toBe(105);
});

test("sum 'banana' + 100 return 'Error'", () => {
  const result = calculator.somar("banana", 100);
  expect(result).toBe("Error");
});
