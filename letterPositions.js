const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    if(currentLetter in results) {
      results[currentLetter].push(i)
      //console.log(results[currentLetter])
    } else {
      results[currentLetter] = [i]
    }
  }
  delete results[" "];
  return results;
  
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
/* Expected output
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
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

assertArraysEqual(letterPositions("hello").e, [1]);

