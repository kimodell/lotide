const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function takes an array and an object as args, returns object w/ a count of the array elements if they were also in the object as "true"
const countOnly = function (allItems, itemsToCount) {
  //declare the empty object
  const results = {};

  for (const item of allItems) {
    //if the item of the allItems array is also in the itemsToCount object...
    if (itemsToCount[item]) { 
      //if the item is already in the results object, add 1 to the value of the item/key
      if (results[item]) {
        results[item] += 1;
        //else, if the item is not in the results obect, add it as a key with a value of 1
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;