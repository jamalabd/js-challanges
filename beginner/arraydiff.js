function array_diff(a, b) {
    if(a.length === 0 || b.length === 0) return a
    return a.concat(b).filter(item => !a.includes(item) || !b.includes(item));
  }
