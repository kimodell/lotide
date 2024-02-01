const eqArrays = function(arr1, arr2) {
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1) //store keys as an array to compare length 
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {  //compare length of keys1 and keys 2 array so that, if not equal, we are already done
      return false;
      } 
  
  for (const key of keys1) {  //for each key in keys1
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {  //check to see if the values are arrays first! we cannot compare arrays with ===
      if (!eqArrays(object1[key], object2[key])) { //if both values are arrays, run it through eqArrays to check if the arrays are not (!) the same
        return false;  //return false
      }
    } else if (object1[key] !== object2[key]) { //if the values are not arrays, we can check the primitive value stored in the keys. If they are not the same
      return false; //return false
    }
  }  
  return true; //if the above conditions do not return false, return true
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)