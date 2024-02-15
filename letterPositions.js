function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  const arraysAreEqual = eqArrays(arr1, arr2);
  if (arraysAreEqual) {
    console.log(`❤️❤️❤️Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😒😒😒Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let currentChar = sentence[i];

    if (currentChar !== ' ') {
      if (results[currentChar]) {
        results[currentChar].push(i);
      } else {
        results[currentChar] = [i];
      }
    }
  }
  return results;
};

const result = letterPositions("hello");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);

module.exports = letterPositions;