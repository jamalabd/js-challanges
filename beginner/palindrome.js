const palindrome = (str) => {
  // All non alphanumaric characters
  var regax = /[\W_]/g;

  // turns the string to lower case and replaces all non alphanumrerc charicters with noththing
  // .replace() take two arguments what you want to replace and what you whant to replace it with
  str = str.toLowerCase().replace(regax, "");

  // turn str into arry with .split() then use array method revvers to revers the array
  // then use join() to make it a word again.
  // compair the two
  return str === str.split("").reverse().join("");
};

console.log(palindrome("bob"));
console.log(palindrome("fat34"));
