describe('resolve', () => {

  it('should resolve by key and remove from map', async () => {
    const map = new PromisedMap();
    const promise = map.wait('foo');
    map.resolve('foo', 42);
    assert.equal(await promise, 42);
    assert.equal(map.size, 0);
  });

});
