const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('🛑🛑🛑🛑🛑🛑');
  } else {
    console.log('✅✅✅✅✅✅');
  }
};

assertEqual('lighthouse', 'Bootcamp');
assertEqual(1,1);