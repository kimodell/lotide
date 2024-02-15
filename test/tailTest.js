const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');

/*const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2);

const words2 = ["no", "soup", "for", "you"] ;
const result2 = tail(words2);
assertEqual(result2.length, 3);

const words3 = ["one", "year"] ;
const result3 = tail(words3);
assertEqual(result3.length, 1);*/

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

