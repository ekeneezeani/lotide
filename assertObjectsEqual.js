const eqArrays = function (arr1, arr2) {
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

const eqObjects = function (object1, object2) {
  const numOfKeys1 = Object.keys(object1);
  const numOfKeys2 = Object.keys(object2);

  if (numOfKeys1.length !== numOfKeys2.length) {
    return false;
  }

  let label = false;
  for (const item in object1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      label = eqArrays(object1[item], object2[item]);

      if (!label) return false;
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // console.log(eqObjects(actual,expected))
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion failes: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "2", b: "1" };
const ba = { b: "1", a: "2" };

assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);
assertObjectsEqual(ab,ba);