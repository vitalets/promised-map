/// <reference path="../globals.ts" />

describe('forEach', () => {

  it('should iterate map', async () => {
    const map = new PromisedMap();
    map.set('foo', 42);
    map.set('bar', null);
    map.forEach((value, key) => {
      if (key === 'foo') {
        assert.equal(value, 42);
      } else {
        assert.equal(value, null);
      }
    });
  });

});
