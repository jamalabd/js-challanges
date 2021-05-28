var gimme = function (inputArray) {
  // create copy of array to mutate
  let arrayCopy = inputArray.toString();
  console.log(arrayCopy);
  console.log(inputArray);
  // check if the array
  if (inputArray != null) {
    // find the median number using the copy
    // first put them in order
    inputArray.sort((a, b) => a - b);
    // use the middele number, witch will always be 1 to find the index of the original array
    let index = inputArray[1] + '';
    console.log(arrayCopy.split(',').slice(0));
    return arrayCopy.split(',').indexOf(index);
  }
};

console.log(gimme([2, 1, 3]));
