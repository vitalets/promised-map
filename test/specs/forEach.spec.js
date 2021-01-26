describe('forEach', () => {

  it('should iterate map', async () => {
    const map = new PromisedMap();
    const promise1 = map.wait('foo');
    const promise2 = map.wait('bar');
    map.forEach(({ promise }, key) => {
      if (key === 'foo') {
        assert.equal(promise, promise1);
      } else {
        assert.equal(promise, promise2);
      }
    });
  });

});
