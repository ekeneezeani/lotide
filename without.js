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

// const assertArraysEqual = function(arr1, arr2) {
//   return assertEqual(eqArrays(arr1,arr2), true);
// };


const without = function(source,itemsToRemove) {
  const newArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    //console.log(itemsToRemove[i]);
    for (let j = 0; j < source.length; j++) {
      if (source[j] === itemsToRemove[i]) {
        newArray.splice(j,1);
        //console.log(j);
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];

console.log(without(words, ["lighthouse"]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1]));

// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
