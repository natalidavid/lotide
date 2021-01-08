const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

/* (words, function(word) {
  return word[0]
}) */

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Array Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

assertArraysEqual(map(words, word => word[0]), [ 'i', 'c', 't', 'm', 't' ]);

assertArraysEqual(map(words, word => word[0]), ["something"]);

assertArraysEqual(map(words, word => word[5]), [3]);