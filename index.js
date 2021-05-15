// Add your functions here
function map (array, func) {
    let r = []
    for (let i = 0; i < array.length; i++ ) {
      r.push(func(array[i]));
    }
    return r
}

function reduce (array, func, start = 0) {
	let memo = start
    for (let i = 0; i < array.length; i++ ) {
        if(array[i] === false){
            memo = false
            continue
        } else if (array[i] === true){
            memo = true
            continue       
        }
      memo = func(array[i],memo);
    }
    return memo
}