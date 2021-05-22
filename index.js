// // Add your functions here

/// my own map-like methods

function map(array, fun){
  return array.map(fun)
}


function reduce(array, fun, startingPoint=0){
  if (!startingPoint){
    return array.reduce(fun);
  }
  return array.reduce(fun, startingPoint);
}