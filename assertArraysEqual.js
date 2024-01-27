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
      console.log(`😒😒😒Assertion Failed: [${arr1} !== [${arr2}]`);
    }
  };

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,3,4]);
assertArraysEqual([1,2,3], [1,23]);