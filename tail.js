//a function that takes an array and returns a new array consisting of all elements of the original array, except the first element
//fcreate the function with the array as the arg
const tail = function(words) {
  //if the array is great than one element
  if (words.length > 0) {
    //return the array with the first element taken out using slice
    return words.slice(1);
    //otherwise retrun an emopty array
  } else {
    return [];
  }
};

module.exports = tail;

//A function that takes an array and returns all elements, except the first element, as a new array.