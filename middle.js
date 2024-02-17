//a function that takes an array as an arg and returns the middle element, or elements, as a new array.
function middle(array) {
  //define new, emtpy array variable
  let newArray = [];
  //first address the case where the array has less than or equal to two elements, meaning there would be no middle element. 
  if (array.length <= 2) {
    //if less than or equal to two elements, return an empty array
    return [];
    //else if the array has an odd number of elements
  } else if (array.length % 2 !== 0) {
    //push the middle element of the array to the new array
    newArray.push(array[((array.length - 1) / 2)]); 
    //or if neityher of the two cases above are true, it means the array has an even number of elements
  } else {
    //push the two middle elements to the new array
    newArray.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  return newArray;
}

module.exports = middle;

