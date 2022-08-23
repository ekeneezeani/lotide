const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
