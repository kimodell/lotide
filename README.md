# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kimodell/lotide`

**Require it:**

`const _ = require('@kimodell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual.js`: An assert test designed to print a success or failure message. A function that takes two arrays(actual and expected) and returns true if the actual value matches the expected result.
* `assertEqual.js`: An assert test designed to print a success or failure message. A function that takes two primitive data types(actual and expected) and returns true if the actual value matches the expected result.
* `assertObjectsEqual.js`: An assert test designed to print a success or failure message. A function that takes objects(actual and expected) and returns true if the actual value matches the expected result.
* `countLetters.js`: A function that take a string and returns a count of each of the letters present in the string.
* `countOnly.js`: A function that takes an array and an object and returns an object containing a count of the elements of the array if the elements were also listed in the object as true.
* `eqArrays.js`: A function that takes two arrays and compares them. The function returns true if the arrays match and false if they do not.
* `eqObjects.js`: A function that takes two objects and compares them. The function returns true if the objects match and false if they do not.
* `findKey.js`: A function that takes an object and a callback. The function returns the first key for which the callback returns truthy. Function will return undefined if no key is found.
* `findKeyByValue.js`: A function that takes an object and a value and returns the first key in the object that contains the value. Returns undefined if no key is found for the given value.
* `flatten.js`: A function that takes an array containing nested arrays and returns a new array with all elements of the original array, without any nested arrays.
* `head.js`: A function that returns the first element of an array.
* `index.js`: A file used to export all of Lotide's utitity functions
* `letterPositions.js`: A function that takes a string and returns an object. The object contains each letter of the string as a key and all indices in which the letter occurs in the string as the value.
* `map.js`: A function that takes an array and a callback and returns a new array. The new array contains the result of the callback function on each element of the array.
* `middle.js`: A function that takes an array and returns the middle element. If the array has >= 2 elements, the function will return an empty array. Arrays with an odd number of elments will return the midde element and arrays with an even number of elements will return the middle two elements.
* `tail.js`: A function that takes an array and returns all elements, except the first element, as a new array.
* `takeUntil.js`: A function that takes an array and a callback and returns a new array containing elements pushed from the original array. The function continues to push elements until the callback returns truthy.
* `without.js`: A function that takes an array and returns a new array with specified unwanted elements removed.