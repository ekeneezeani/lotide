// AssertEqual Function
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  
  for (const property in itemsToCount) {
    if ((itemsToCount[property] === true) && allItems.includes(property)) {
      console.log(property);
      let count = 0;
      for (const item of allItems) {
        if (item === property) {
          count += 1;
        }
      }
      // if (allItems.includes(property))
      result[property] = count;
      
    }
  }
  return result;
};
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;