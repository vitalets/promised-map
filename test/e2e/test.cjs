const assert = require('assert');
const { PromisedMap } = require('promised-map');

it('should work as commonjs module', async () => {
  const map = new PromisedMap();
  assert.equal(map.size, 0);
  const promise = map.set('foo', 42);
  assert.equal(map.size, 1);
  assert.equal(promise.constructor.name, 'Promise');
  map.resolve('foo', 'bar');
  assert.equal(await promise, 'bar');
  assert.equal(map.size, 0);
});
