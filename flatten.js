const flatten = function(arr) {
  let returnVal = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        returnVal.push(innerElement);
      }
    } else {
      returnVal.push(element);
    }
  }
  return returnVal;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));