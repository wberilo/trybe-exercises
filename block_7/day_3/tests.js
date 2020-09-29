const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 6);

assert.equal(expected, 3, 'Olha só esse erro UAU');