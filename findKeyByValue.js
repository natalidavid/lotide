// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {

  //let keys = Object.keys(object) //scan tru all keys

  for (let item of Object.keys(object)) { // iterate thru keys
    //console.log('values: ' + object[item])
    //console.log('items/keys: '  + item)
    if (object[item] === value) { //compare object items w/ value
      return item;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

/*
declare container?? i guess
iterate through object with for in loop
if value corresponds with key
return key
else undefined

return it in container
*/