const assert = require('assert')

// escreva sum abaixo
function sum(...rest ){
  if(rest[0]===undefined){
    return 0;
  }
  return rest.reduce((acc,cur)=>acc+cur)
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)