// Add your functions here
function map(src, cb) {
    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(cb(theElement))
    }
  
    return r;
  }
  function reduce(src, fnct, start){
    let arr = (!!start) ? start : src[0];
    let i = (!!start) ? 0 : 1 

    for (i; i < src.length; i++){
        arr = fnct(src[i], arr)
    }
    return arr;
} 
