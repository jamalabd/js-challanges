function repeatStr(n, s) {
  // check if input is valid
  let array = '';
  if (n != null && s != null) {
    while (n > 0) {
      array += s;
      n--;
    }
  }
  return array;
}
console.log(repeatStr(5, 'the'));
