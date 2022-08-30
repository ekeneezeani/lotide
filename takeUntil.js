const takeUntil = function (array, callback) {
  // ...
  let result = [];
  for (const item of array) {
    //console.log(`${item} + 2 = ${callback(item)}`);
    //result.push(callback(item))
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// console.log(takeUntil(data1, (x) => x < 0));

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
module.exports = takeUntil;
