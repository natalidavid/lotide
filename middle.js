const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return middleArray;
  } 
  let middleOneIndex = Math.floor((array.length - 1 ) / 2);
  var middleOne = array[middleOneIndex]
  middleArray.push(middleOne);
  if (array.length % 2 === 0) {
    let middleTwoIndex = middleOneIndex + 1
    let middleTwo = array[middleTwoIndex]
    middleArray.push(middleTwo);

  }
  return middleArray;
;}

module.exports = middle;