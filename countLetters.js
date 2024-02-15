const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const counts = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (counts[letter]) {
        counts[letter] += 1;
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