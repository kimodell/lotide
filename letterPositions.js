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

//a function that takes a string as an arr and returns an object, with each letter of the string as a key, the value of which is all the indicies in which the letter appears in the string

const letterPositions = function(sentence) {
  //first call the empty object
  const results = {};
   //use a for loop to iterate through the string
  for (let i = 0; i < sentence.length; i++) {
    //then define a new variable for the current letter
    let currentChar = sentence[i];
    //if the current letter is NOT a space (because we do not want to include spaces), then we can proceed with the next step
    if (currentChar !== ' ') {
      //if currectChar is already in the results object already, push this current index
      if (results[currentChar]) {
        results[currentChar].push(i);
        //else, add the letter it's current index into the results object
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

//A function that takes a string and returns an object. The object contains each letter of the string as a key and all indices in which the letter occurs in the string as the value.