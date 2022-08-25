
const eqArrays = function(arr1, arr2) {
  //let label = false;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        //label = true;
        return false
      }
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  const inspect =  require('util').inspect;
  if (!eqArrays(actual,expected)) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  }
  return '';
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word.length);
const results2 = map(words, word => word[0]);
const results3 = map(words, word => word[word.length - 1]);

const test1 = [ 6, 7, 2, 5, 3 ];
const test2 = [ 'g', 'c', 't', 'm', 't'];
const test3 = [ 'd', 'l', 'o', 'r', 'm' ];
console.log(assertEqual(results1,test1));
console.log(assertEqual(results2,test2));
console.log(assertEqual(results3,test3));

//console.log(results1 + '\n' + results2 + '\n' + results3);