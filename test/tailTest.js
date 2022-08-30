// const assertEqual = require('../assertEqual')

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

const tail = require("../tail");
const assert = require("chai").assert;

describe("tail function test", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"] ', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [3,4,5] for [2,3,4,5]', () => {
    assert.deepEqual(tail([2,3,4,5]), [3,4,5]);
  });
});
