const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`;
  } else {
    return `✅✅✅✅✅✅ ${actual} === ${expected}`;
  }
};

const eqArrays = function(arr1, arr2) {
  let label = false;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        label = true;
      } else {
        label = false;
        break;
      }
    }
  }
  return label;
};

const assertArraysEqual = function(arr1, arr2) {
  return assertEqual(eqArrays(arr1,arr2), true);
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
