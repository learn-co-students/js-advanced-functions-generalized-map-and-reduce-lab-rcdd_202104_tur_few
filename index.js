// Add your functions here
function map(source, cb) {
    let array = []
  
    for (let i = 0; i < source.length; i++) {
      let theElement = source[i]
      array.push(cb(theElement))
    }
  
    return array;
  }
  function reduce(source, functionn, start){
    let array = (!!start) ? start : source[0];
    let i = (!!start) ? 0 : 1 

    for (i; i < source.length; i++){
        array = functionn(source[i], array)
    }
    return array;
} 
