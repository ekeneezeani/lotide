const assertEqual = function(actual, expected) {
  const inspect =  require('util').inspect;
  if (actual !== expected) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  }
};



module.exports = assertEqual;