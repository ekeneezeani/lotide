// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     return `🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`;
//   } else {
//     return `✅✅✅✅✅✅ ${actual} === ${expected}`;
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   let label = false;
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         label = true;
//       } else {
//         label = false;
//         break;
//       }
//     }
//   }
//   return label;
// };


const middle = function(arr) {
  const length = arr.length;
  const isEven = length % 2 === 0;
  const mid = Math.floor(length / 2);
  let returnValue = [];
  if (length <= 2) {
    return '[]';
  }

  if (isEven) {
    returnValue.push(arr[mid - 1]);
    returnValue.push(arr[mid]);
  } else {

    returnValue.push(arr[mid]);
  }
  return returnValue;
};
console.log(middle([1]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));