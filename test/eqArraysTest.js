const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //should pass
assertEqual(eqArrays([1, 2], [1, 2, 3]), true); //should fail
assertEqual(eqArrays([1, 2, 3], [1, 23]), true);  //should fail