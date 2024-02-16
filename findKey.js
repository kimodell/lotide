const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};

//return the first key that returns true with the callback
//create a function that takes an onject and a callback
const findKey = function(object, callback) {
  //for each key in the object
  for (const key in object) {
    //subject that key's value to the callback. In this case, the value mst exactly macth the number of stars
    if (callback(object[key])) {
      //if the value, when subjected to the callback, returns true(in this case, when the start === 2), return the key!
      return key;
    }
  }
  //end after the first key is returned because we only want the first key
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");

module.exports = findKey;
