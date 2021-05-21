function map(src, callback) {
    const r = [];

    for (let i = 0; i < src.length; i++) {
      const theElement = src[i];
      r.push(callback(theElement));
    }

    return r;
  }


  function reduce(src, callback, startingValue) {
    let start;
    if (startingValue) {
      start = startingValue;
      for (let i = 0; i < src.length; i++) {
        start = callback(src[i], start);
      }
      return start;
    } else {
      start = src[0];
      for (let i = 1; i < src.length; i++) {
        start = callback(src[i], start);
      }
      return start;
    }
  }
  