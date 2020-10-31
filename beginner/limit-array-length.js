function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}


array = [1, 1, 3, 3, 7, 2, 2, 2, 2];
limit = 3;

let newAr = deleteNth(array, limit);
newAr()