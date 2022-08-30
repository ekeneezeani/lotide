const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// const movies = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
  
//   "Akelarre":  { stars: 3 }
// };

// console.log(findKey(bestTVShowsByGenre, x => x === 'The Wire'));
// console.log(findKey(movies, x => x.stars === 2));

module.exports = findKey;