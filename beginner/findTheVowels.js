const vowelCount = str => {
  let count, vowels = ['a', 'e', 'i', 'o', 'u'];
  count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount('me'));