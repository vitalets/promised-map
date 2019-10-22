describe('wait', () => {

  it('should create promise', async () => {
    const map = new PromisedMap();
    const promise = map.wait('foo');
    assert.instanceOf(promise, Promise);
    assert.equal(map.size, 1);
  });

  it('should return the same promise for same key', async () => {
    const map = new PromisedMap();
    const promise1 = map.wait('foo');
    const promise2 = map.wait('foo');
    assert.equal(promise1, promise2);
    assert.equal(map.size, 1);
  });

});
