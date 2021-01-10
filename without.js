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

const without = function (source, itemsToRemove) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    let shouldAdd = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldAdd = false;
      }
    }
    if (shouldAdd) {
      result.push(source[i])
    }
  }
  return result
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]  //source + toRemove
assertArraysEqual(without([1, 2, 3], [2,3]), [1]) // => [1, 3]  //source + toRemove
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]) // => [1, 2, 3]  //source + toRemove

without([1, 2, 3], [1]) // => [2, 3]  //source + toRemove
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);