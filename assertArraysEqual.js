
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
const assertArrayEqual = function(actual, expected) {
  const inspect =  require('util').inspect;
  if (!eqArrays(actual,expected)) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  }
  return '';
};

