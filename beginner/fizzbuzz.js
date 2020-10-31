const fizzbuzz = num => {
  for (let i = 1; i <= num; i++) {
    // check if number is a maultiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } // check if number is a maultiple of 3
    else if (i % 3 === 0) {
      console.log("fizz");
    } // check if number is a maultiple of 5
    else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      // console logs the rest of the numbers
      console.log(i);
    }
  }
};

console.log(fizzbuzz(5));

const fizbuz = num => {
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0
      ? console.log("fizzbuzz")
      : i % 3 === 0
      ? console.log("fizz")
      : i % 5 === 0
      ? console.log("buzz")
      : console.log(i);
  }
};

console.log(fizbuz(5));
