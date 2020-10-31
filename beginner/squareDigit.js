function squareDigits(num) {
  let y,
    newArr,
    arr = num.toString().split("");

  newArr = arr.map(x => {
    y = parseInt(x, 10);
    return Math.pow(y, 2);
  });

  return parseInt(newArr.join(""));
}
