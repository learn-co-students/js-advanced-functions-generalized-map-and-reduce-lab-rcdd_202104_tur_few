// Add your functions here
function map(src, func) {
  let arr = [];
  for (let i = 0; i < src.length; i++) {
    let elem = src[i];
    arr.push(func(elem));
  }
  return arr;
}
function reduce(src, func, start) {
  let result = !!start ? start : src[0];
  let i = !!start ? 0 : 1;

  for (; i < src.length; i++) {
    result = func(src[i], result);
  }
  return result;
}
