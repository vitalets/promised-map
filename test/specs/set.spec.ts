/// <reference path="../globals.ts" />

describe('set', () => {

  it('should create promise', async () => {
    const map = new PromisedMap();
    const promise = map.set('foo', 42);
    assert.equal(promise.constructor.name, 'Promise');
    assert.equal(map.size, 1);
  });

  it('should create new promise for same key', async () => {
    const map = new PromisedMap();
    const promise1 = map.set('foo', 42);
    const promise2 = map.set('foo', null);
    assert.notEqual(promise1, promise2);
    assert.equal(map.size, 1);
  });

});
