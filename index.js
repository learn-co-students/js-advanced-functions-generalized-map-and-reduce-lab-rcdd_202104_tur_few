// Add your functions here
function map (srcArr, func) {
  let response = []
  for (let i = 0; i < srcArr.length; i++) {
      let element = srcArr[i]
      response.push(func(srcArr[i]));
    }

    return response;
  }

  function reduce (srcArr, func, startingPoint = 0) {
  	let resp = startingPoint;
      for (let i = 0; i < srcArr.length; i++ ) {
          if(srcArr[i] === false){
              resp = false;
              continue
          } else if (srcArr[i] === true){
              resp = true;
              continue
          }
        resp = func(srcArr[i],resp);
      }
      return resp;
  }
