const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    /*console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');*/
    results.push(callback(item));
  }
  return results;
}

const testCases = [
  { words: ["ground", "control", "to", "major", "tom"], expected: ['g', 'c', 't', 'm', 't'] },
  { words: ["hello", "goodbye"], expected: ['h', 'g'] },
  { words: ["assertation", "please", "work"], expected: ['a', 'p', 'w'] },
  { words: ["no", "seriously"], expected: ['n', 's'] }
];

/*const results1 = map(words, word => word[0]);
console.log(results1);*/

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

testCases.forEach((test, index) => {
  const results = map(test.words, word => word[0]);
  assertArraysEqual(results, test.expected);
});

module.exports = map;
