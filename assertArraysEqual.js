const eqArrays = require('./eqArrays')


const assertArrayEqual = function(actual, expected) {
  const inspect =  require('util').inspect;
  if (!eqArrays(actual,expected)) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  }
  return '';
};


module.exports = assertArrayEqual;