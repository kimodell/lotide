//create a function that take two arrays as args and returns true if they do
function eqArrays(arr1, arr2) {
  //first test to see if they they have the same number of elements
  if (arr1.length === arr2.length) {
    //if they have the same number of elements, use a for loop to compare each element in the arrays
    for (let i = 0; i < arr1.length; i++) {
      //if [i] of arr1 does not exeactly match the same element in arr2
      if (arr1[i] !== arr2[i]) {
        //return false
        return false;
      }
    }
    //if none of the comaprisions between arr1[i] and arr2[2] return fasle, it must be true!
    return true;
    //else, if the arrays are not the same length, they cannot exatly match, therefore will return false
  } else {
    return false;
  }
}

module.exports = eqArrays;

