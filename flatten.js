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

//create a function that takes an array with nested arrays and returns a new array with all the elements, but not nested arrays
function flatten(array) {
  //first define your new, empty array
  let newArray = [];
  //loop through ther array with a forloop
  for (let i = 0; i < array.length; i++) {
    //use Array.isArry to seeif the element [i] of the main array is also an array
    if (Array.isArray(array[i])) {
      //if it is a nested array, do a new for loop to get the elements of the nested array
      for (let j = 0; j < array[i].length; j++) {
        //and push the elements of the nested array to the newArray
        newArray.push(array[i][j]);
      }
      //else, if the element[i] is not a nested array, just push it to the nmew array
    } else {
      newArray.push(array[i]);
    }
    //then return the array!
  } return newArray;
}

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([1, 2, 3, 4, 5, 6]);
flatten([1, 2, [3, 4], 5, [6], 7, 8]);
flatten(['bears', ['beets', 'Battlestar Galactica']]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
assertArraysEqual(flatten(['bears', ['beets', 'Battlestar Galactica']]), ['bears', 'beets', 'Battlestar Galactica']);

module.exports = flatten;
//A function that takes an array containing nested arrays and returns a new array with all elements of the original array, without any nested arrays.