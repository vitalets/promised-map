describe('resolve', () => {

  it('should resolve by key', async () => {
    const map = new PromisedMap();
    const promise = map.wait('foo');
    assert.equal(map.size, 1);
    map.resolve('foo', 42);
    assert.equal(await promise, 42);
    assert.equal(map.size, 0);
  });

});
