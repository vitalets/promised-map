/// <reference path="../globals.ts" />

describe('reject', () => {

  it('should reject by key and remove from map', async () => {
    const map = new PromisedMap();
    const promise = map.set('foo', 42);
    map.reject('foo', new Error('err'));
    await assert.rejects(promise, /err/);
    assert.equal(map.size, 0);
  });

});
