// Add your functions here
function map (array, func) {
    let r = [];
    for (let i = 0; i < array.length; i++ ) {
      r.push(func(array[i]));
    }
    return r;
}

function reduce (array, func, startingPoint = 0) {
	let newValue = startingPoint;
    for (let i = 0; i < array.length; i++ ) {
        if(array[i] === false){
            newValue = false;
            continue
        } else if (array[i] === true){
            newValue = true;
            continue
        }
      newValue = func(array[i],newValue);
    }
    return newValue;
}
