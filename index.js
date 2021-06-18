// Add your functions here
function map(obj, cb) {
    const array = []
    for (const key in obj) {
        array.push(cb(obj[key]))
    }
    return array
  }

  function reduce(obj, cb, accumulator) {
    const keys = Object.keys(obj)
    let i = 1
  
    if (accumulator) {
      i = 0
    } else {
      accumulator = obj[keys[0]]
    }
  
    for (i; i < keys.length; i++) {
      accumulator = cb(accumulator, obj[keys[i]])
    }
    return accumulator
  }