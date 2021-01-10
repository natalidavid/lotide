const middle = function(array) {
  let midNum = [];
  if (array.length < 3) {
    return midNum;
  }
  let middleOneIndex = Math.floor((array.length) / 2);
  let middleOne = array[middleOneIndex];
  console.log(`this is ${middleOne}`)
  midNum.push(middleOne);
  if (array.length % 2 === 0) {
    let middleTwoIndex = middleOneIndex + 1;
    let middleTwo = array[middleTwoIndex];
    midNum.push(middleTwo);
  }
  return midNum;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2])
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));