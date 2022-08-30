const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let result = true;
  arr1.forEach((element1, index) => {
    const element2 = arr2[index];
    if (element1 !== element2) {
      result = false;
    }
  });

  return result;
};

module.exports = eqArrays;
