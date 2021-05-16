// Add your functions here

function map(sourceArray, funct) {

    let arr = [];

    sourceArray.forEach(item => {
        arr.push(funct(item));
    });

    return arr;
}

function reduce (sourceArray, funct, startingValue) {
    let init;
    let acc;

    if (startingValue){
        init = startingValue;
        acc = 0;
    } 
    
    else {
        init = sourceArray[0];
        acc = 1;
    }
    //could not write with .forEach since we need to skip the first item.
    for ( ; acc < sourceArray.length; acc++) { init = funct(sourceArray[acc], init)}
    
    return init;
}