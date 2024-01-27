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


function without(source, itemsToRemove) {
  let itemsRemoved = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      itemsRemoved.push(source[i]);
    }
  } console.log(itemsRemoved);
}


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(['cheese', 'eggs', 'toast'], ['eggs']);
without(['bears', 'beets', 'Battlestar Gallactica'], ['beets'])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);