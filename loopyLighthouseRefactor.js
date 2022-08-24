const loopyLighthouse = function(range, multiples, words) {

  if ((range.length !== 2) || (multiples.length !== 2) || (words.length !== 2)) {
    console.log("Can't be done");
  } else {
    for (let i = range[0]; i <= range[1]; i++) {
    //   if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
    //     //console.log("Multiple of both " + i );
    //     console.log(words[0] + words[1]);
    //   } else if (i % multiples[1] === 0) {
    //     //console.log("it is a multiple of " + multiples[1] + " " + i);
    //     console.log(words[1]);
    //   } else if (i % multiples[0] === 0) {
    //     //console.log("it is a multiple of " + multiples[0] + " " + i);
    //     console.log(words[0]);
    //   } else {
    //     console.log(i);
    //   }
    }
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
// a > 2 ? 'a is greater than 2' 
  : a == 2 ? ' a equals 2' 
  : a < 2 ? 'a is less than 2'
  : a ;