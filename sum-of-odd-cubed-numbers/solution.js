function cubeOdd(arr) {
  if (arr.every(y => y % 2 === 0)) return 0;
  if (arr.every(x => x === parseInt(x))) {
    return arr.map(x => (x*x*x)).filter(x => x % 2 === 1 || x % 2 === -1).reduce((acc, cur) => acc + cur);
    } else return undefined;
  }