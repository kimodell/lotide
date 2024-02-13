/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

/*const assertEqual = require('./assertEqual');*/

const head = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[0];
  }
};

module.exports = head;

/*assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["new", "array", "here"]), "array")*/