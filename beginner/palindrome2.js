/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // take the input check to see if palindrom
  // how to we check the input?
  // turn it into an array
  let string = x.toString().split('');
  let backWardsString = [];

  for (let index = 0; index < string.length; index++) {
    backWardsString.unshift(string[index]);
  }
  for (let index = 0; index < string.length; index++) {}

  console.log(string);
  console.log(backWardsString);
  // check if equel

  // by defualt return true
  return true;
};

console.log(isPalindrome(1231));
