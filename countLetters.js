const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑🛑🛑🛑 ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅✅✅✅ ${actual} === ${expected}`);
  }
};

const countLetters = function(strInput) {
  const str = strInput.split(' ').join('');
  let letter = '';
  const result = {};
  for (const char of str) {
    letter = char;
    let count = 0;
    for (const element of str) {
      if (char === element) {
        count += 1;
      }
    }
    result[letter] = count;
  }
  return result;
};


const result = countLetters('LHL Is Good');
console.log(result);

assertEqual(result['L'], 2);
assertEqual(result['H'], 1);
assertEqual(result['I'], 1);
assertEqual(result['s'], 1);
assertEqual(result['G'], 1);
assertEqual(result['o'], 2);
assertEqual(result['d'], 1);