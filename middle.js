function middle(array) {
  let newArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    newArray.push(array[((array.length - 1) / 2)]); //push middle element to newArray
  } else {
    newArray.push(array[(array.length / 2) - 1], array[array.length / 2]);//push middle 2 elements to newArray
  }
  return newArray;
}

module.exports = middle;
