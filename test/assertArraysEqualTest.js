const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => should fail