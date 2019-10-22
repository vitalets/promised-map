describe('reject', () => {

  it('should reject by key and remove from map', async () => {
    const map = new PromisedMap();
    const promise = map.wait('foo');
    await Promise.all([
      assert.rejects(promise, /err/),
      map.reject('foo', new Error('err')),
    ]);
    assert.equal(map.size, 0);
  });

});
