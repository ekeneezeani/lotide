// // equalArray Funtion Checks if 2 arrays are equal

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
// // assetEqual function takes two arguments to determine if they are thesame
// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅✅✅✅ ${actual} === ${expected}`);
//   }
// };


const letterPositions = function(str) {
  let result = {};
  for (const char of str) {
    let positions = [];
    for (let i = 0; i < str.length; i++) {
      if (char === str.charAt(i)) {
        positions.push(i);
      }
    }
    if (char !== ' ')
      result[char] = positions;
  }
  return result;
};
// const result = letterPositions('lighthouse in the house');

// //  console.log();

// assertEqual(eqArrays(result['l'], [0]),true);
// assertEqual(eqArrays(result['i'], [1, 11]),true);
// assertEqual(eqArrays(result['g'], [2]),true);
// assertEqual(eqArrays(result['h'], [3, 5, 15, 18]),true);
// assertEqual(eqArrays(result['t'], [4, 14]),true);
// assertEqual(eqArrays(result['o'], [6, 19]),true);
// assertEqual(eqArrays(result['u'], [7, 20]),true);
// assertEqual(eqArrays(result['s'], [8, 21]),true);
// assertEqual(eqArrays(result['e'], [9, 16, 22]),true);
// assertEqual(eqArrays(result['n'], [12]),true);

module.exports = letterPositions;




