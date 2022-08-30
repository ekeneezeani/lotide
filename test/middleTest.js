
const middle = require('../middle');
const assert = require('chai').assert;

describe('Middle Test', () => {
  it("returns [] for 1", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });

  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[ 2, 3]);
  });

})