let theArray = [1,2,3];

function map(array,func){
    let newArr = [];

    for (let i=0;i < array.length;i++){
        newArr.push(func(array[i]))
    }
    return newArr;

}
    
map(theArray,function(number){
    return number * -1;

}
);
map(theArray,function(number){
   return number * 2;
})

function reduce(array, func, startingPoint = 0 ) {
    let updatedResult = startingPoint
    
    for (let i=0;i < array.length;i++){
        
        if(array[i] === false){
            updatedResult = false;
            continue;
        } else if (array[i] === true){
            updatedResult = true;
            continue;
        }
        updatedResult = func(array[i],updatedResult);
    }
  return updatedResult
}