/// <reference path="../globals.ts" />

describe('resolve', () => {

  it('should resolve by key and remove from map', async () => {
    const map = new PromisedMap();
    const promise = map.set('foo', 42);
    map.resolve('foo', 'bar');
    assert.equal(await promise, 'bar');
    assert.equal(map.size, 0);
  });

});
