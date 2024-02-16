const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create a function that takes a key and a value as args and returns the first key of an object that contains the value
const findKeyByValue = function(genres, show) {
  //first have your result = undefined to it will return undefined if no key is found for the value given
  let result = undefined;
  //for each key(genre) of the keys (genres)
  for (const genre in genres) {
    //if the value(show) matches the key of the keys 
    if (show === genres[genre]) {
      //change the result to a string of the key(genre)
      result = genre;
    }
  }
  //return the result
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;


