const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(10, 2), 12);
assert(sum(0, 0) === 0);
assert.throws(() => { sum(10, '2'); }, /^Error: parameters must be numbers$/); 

//