// helper function that builds the object
const buildCharObject = str => {
  const charObj = {};
  for (let char of str.replace(/[\W_,.]/g).toLowerCase()) {
    // if the object has already a key value pair
    // equal to the value being looped over,
    // increase the value by 1 because its truthy, otherwise  its 0 and its falsy so it adds
    // the letter being looped over as key and 1 as its value
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}


//  main function
const anagram = (stra, strb) => {
  // build the object that holds data
  const aObject = buildCharObject(stra);
  const bObject = buildCharObject(strb);
  // compare number of keys in the two objects
  // (anagrams must have the same number of letters)
  if (Object.keys(aObject).length !== Object.keys(bObject).length) {
    return false;
  }
  // compare if they have the same letters and the same amount of them
  for (let char in aObject) {
    if (aObject[char] !== bObject[char]) {
      return false;
    }
  }
  //if both of the checks succeed its an anagram
  return true;
}

console.log(anagram('friend', 'fier'));