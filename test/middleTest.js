const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty array for arrays with 1 or 2 elements", () => {
    assert.deepEqual(middle([1, 2]), [])
  });

  it("returns single element for odd no of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });

  it("returns array of 2 elements for odd even no of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
});