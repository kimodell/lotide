const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['soup', 'for', 'you'] for ['no', 'soup', 'for', 'you']", () => {
    assert.deepEqual(tail(['no', 'soup', 'for', 'you']), ['soup', 'for', 'you']);
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns [] for ['one']", () => {
    assert.deepEqual(tail(['one']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

