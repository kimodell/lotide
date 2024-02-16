const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};
//function to count letters in a string. Takes string as arg and returns an object where each letter is a key and the count of each letter is the value
const countLetters = function(sentence) {
  //declare empty object
  const counts = {};
  
  for (const letter of sentence) {
    //if the string is not empty...
    if (letter !== ' ') {
      //if letter is already in the counts object, add 1 to the value of the letter/key
      if (counts[letter]) {
        counts[letter] += 1;
        //if letter is not present in the object already, add it to the count object and set the vvalie to 1!
      } else {
        counts[letter] = 1;
      }
    }
  }
  return counts; 
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("hi hi"));
console.log(countLetters("gg wp noob"));

const result = countLetters("lighthouse in the house");
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);

const result2 = countLetters("LHL");
assertEqual(result2['L'], 2);
assertEqual(result2['H'], 1);

module.exports = countLetters;