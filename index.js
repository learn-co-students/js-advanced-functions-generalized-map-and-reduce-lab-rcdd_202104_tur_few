// Add your functions here

// map-like

function map(sourceArray, func) {
    let arr = [];
    
    let i = 0;
    while (i < sourceArray.length) {
        arr.push(func(sourceArray[i]));
        i++;
    }
    console.log(arr)
    return arr
}

// map([1,2,3], function(a) {
//     console.log(a * 2);
//     return a * 2;
// })

// reduce-like

function reduce(sourceArray, func, initialValue = 0) {
    let state;
    let result = 0;
    let accumulator = 0;
    let a = true;
    let i = 0;
    while (i < sourceArray.length) {

        if (func() === true || func() === false) {

            let b = true;
            state = func(sourceArray[i], b)
            console.log(state);
            i++;
        }

        else if (func() !== NaN && func() !== true && func() !== false) {

            accumulator = func(sourceArray[i], accumulator);
            state = accumulator;
            console.log(accumulator)
            i++;
        }
        // accumulator = func(sourceArray[i], accumulator);
        // state = accumulator;
        // console.log(accumulator)

        // i++;
    }

    if (state === true || state === false) {
        result = state;
        return !!result
    }

    else if (typeof state === "number") {
        result = accumulator + initialValue;
        console.log(result);
        return result;
    }
    // result = accumulator + initialValue;
    // console.log(result);
    // return result;

}

// reduce([1,2,3], function(e, memo) {
//     return e + memo
// }, 100);

reduce([1, 2, true, "string"], function(a, memo) { 
    return !!a && !!memo
})
