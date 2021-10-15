// changes all but the last four intiger int '#'
function maskify(cc) {
  let newArr = cc.split('');
  let dumpArr = [];
  let finalArray;
  const repeat = (item, times) => {
    dumpArr.unshift(item.pop());
    times && --times && repeat(item, times);
  };
  repeat(newArr, 4);
  newArr.forEach((element, i) => (newArr[i] = '#'));
  finalArray = newArr.concat(dumpArr).join('');
  return finalArray;
}

maskify('4556364607935616');
