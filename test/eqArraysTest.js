const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //should pass
//assertEqual(eqArrays([1, 2], [1, 2, 3]), true); //should fail
//assertEqual(eqArrays([1, 2, 3], [1, 23]), true);  //should fail

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns false for [1, 2, 3], [1, 23]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 23]), false);
  });
  it("returns true for [], []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
});