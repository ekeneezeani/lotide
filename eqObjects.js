const eqArrays = require('./eqArrays');


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

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const ab = { a: "2", b: "1" };
// const ba = { b: "1", a: "2" };

// console.log(eqObjects(cd, dc));
// console.log(eqObjects(cd, cd2));
// console.log(eqObjects(ab, ba));

module.exports = eqObjects;
