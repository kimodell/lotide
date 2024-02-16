//function takes two pimitive data types, one actual, one expected, as args
const assertEqual = function(actual, expected) {
  //if actual matches expected, function returns true and passes! Passed message prints to console
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
    //else, if actual does not match expected, function returns false and failure message prtins to console
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;

//that takes two primitive data types(actual and expected) and returns true if the actual value matches the expected result.