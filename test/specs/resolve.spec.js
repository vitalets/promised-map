describe('resolve', () => {

  it('should resolve by key', async () => {
    const map = new PromisedMap();
    const promise = map.wait('foo');
    assert.equal(map.size, 1);
    map.resolve('foo', 42);
    assert.equal(await promise, 42);
    assert.equal(map.size, 0);
  });

  it('should return the same promise for same key', async () => {
    const map = new PromisedMap();
    const promise1 = map.wait('foo');
    const promise2 = map.wait('foo');
    assert.equal(promise1, promise2);
    assert.equal(map.size, 1);
    map.resolve('foo', 42);
    assert.equal(await promise1, 42);
    assert.equal(map.size, 0);
  });

});
