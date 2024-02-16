const eqArrays = require('./eqArrays');
//function passes two arrays as args one is the actual result, other is the expected result (actual,expected)
const assertArraysEqual = function(arr1, arr2) {
  const arraysAreEqual = eqArrays(arr1, arr2);
  //if both arrays match, function returns true and passes!
  if (arraysAreEqual) {
    console.log(`❤️❤️❤️Assertion Passed: [${arr1}] === [${arr2}]`);
    //else they do not match and function returns failiure message
  } else {
    console.log(`😒😒😒Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;
