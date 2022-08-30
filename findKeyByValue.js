// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅✅✅✅ ${actual} === ${expected}`);
//   }
// };


const findKeyByValue = function(obj, str) {
  for (const item in obj) {
    if (obj[item] === str) {
      return item;
    }
  }
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama')
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
module.exports = findKeyByValue;