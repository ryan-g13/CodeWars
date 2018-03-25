function find_average(array) {
  const avg = array => array.reduce((a, b) => a + b, 0) / array.length;
  return avg(array);
}