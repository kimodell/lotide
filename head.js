const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(expected);
  } else {
    console.log("undefined");
  }
};

const head = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[0];
  }
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");