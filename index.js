// Add your functions here
const map = (sourceArray, func) => {
                let newArr = [];
                sourceArray.map((arr) => {
                                return newArr.push(func(arr));
                });
                return newArr;
};

const reduce = (sourceArray, func, startingValue) => {
                let r = (startingValue) ? startingValue : sourceArray[0];                       // Basically if startingValue return r = startingValue, else return r = souceArray[0];
                let i = (startingValue) ? 0 : 1;                                                // Basically if startingValue return i = 0, else return i = 1;
                for (; i < sourceArray.length; i++) r = func(sourceArray[i], r);
                return r;
};