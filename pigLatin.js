const arg = process.argv;

const argsArray = arg.slice(2);

const pigLatinArr = function(strArray) {
  let returnValue = '';
  for (let i = 0; i < strArray.length; i++) {
    returnValue += pigLatin(strArray[i]) + ' ';
  }
  return returnValue;
};
const pigLatin = function(str) {
  let returnValue = str.slice(1) + str[0] + 'ay';

  return returnValue;
};
console.log(pigLatinArr(argsArray));