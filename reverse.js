
const arg = process.argv;

const argsArray = arg.slice(2);

const reverseArg = function(strArray) {
  let returnValue = '';
  for (let i = 0; i < strArray.length; i++) {
    returnValue += reverse(strArray[i]) + '\n';
  }
  return returnValue;
};

const reverse = function(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i);
  }
  return reverseStr;
};
//console.log(reverse('Happy'));

console.log(reverseArg(argsArray));