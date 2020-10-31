const sum = require("./sum");

test("should add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
