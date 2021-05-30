const flip = (d, a) => {
  // check if variables are present
  if (d != null && a != null) {
    // gravity will push the heaviest elements furthest to the right or left
    if (d == 'R') return a.sort((a, b) => a - b);
    if (d == 'L') return a.sort((a, b) => b - a);
  }
  return;
};

console.log(flip('R', [3, 2, 1, 2]));
