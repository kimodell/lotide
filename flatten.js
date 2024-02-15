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

function flatten(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  } return newArray;
}

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([1, 2, 3, 4, 5, 6]);
flatten([1, 2, [3, 4], 5, [6], 7, 8]);
flatten(['bears', ['beets', 'Battlestar Galactica']]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;