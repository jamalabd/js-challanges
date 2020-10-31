const cloneArr = require("./cloneArr");

test("should clone arrays", () => {
  const arry = [1, 2, 3, 4, 5];
  expect(cloneArr(arry)).toEqual(arry);
});
