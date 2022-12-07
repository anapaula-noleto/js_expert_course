const Fibonacci = require('./fibonacci');
const sion = require('sinon');
const assert = require('assert');
(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sion.spy(fibonacci, fibonacci.execute.name);
    // generators retornam iterators, (.next)
    for (const i of fibonacci.execute(3)) {
    }
    const expectedCallCount = 4;
    assert.deepStrictEqual(spy.callCount, expectedCallCount);
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sion.spy(fibonacci, fibonacci.execute.name);
    const [...results] = fibonacci.execute(5);
  }
})();
