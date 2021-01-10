

let findKey = function (object, callback) {
  for (let key in object) {
    console.log(key)
    if (callback(object[key])) {
      console.log(callback(object[key]))
      return key;
    }
  }
};

/*
callback(object[key])) =
function (object[key]) is basically (object[key]) === 2?

*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") // => "noma");
assertEqual(1, 1);

/*

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

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */