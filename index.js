// Add your functions here

function map(obj, b) {
  let arr = [];
  for (let i=0; i <obj.length; i++){
  arr.push(b(obj[i]));
}
return arr;
}

function reduce(obj, b, acc){
  const keys = Object.keys(obj);
  let i = 1;
  if(acc){
    i=0;
  }else{
    acc = obj[keys[0]];
  }
  for (i; i<keys.length; i++ ){
    acc = b(acc, obj[keys[i]]);
  }
  return acc;
}

