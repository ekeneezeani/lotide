const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('🛑🛑🛑🛑🛑🛑 ' +  actual + ' !== ' + expected);
  } else {
    console.log('✅✅✅✅✅✅ ' +  actual + ' === ' + expected);
  }
};

assertEqual('lighthouse', 'Bootcamp');
assertEqual(1,1);