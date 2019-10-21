/**
 * Promised map.
 */

class PromisedMap {
  constructor() {
    this._map = new Map();
  }

  get size() {
    return this._map.size;
  }

  wait(key) {
    let {promise} = this._map.get(key) || {};
    if (!promise) {
      let resolve, reject;
      promise = new Promise((res, rej) => [resolve, reject] = [res, rej]);
      this._map.set(key, {
        promise,
        resolve,
        reject,
        timestamp: Date.now(),
      });
    }
    return promise;
  }

  resolve(key, value) {
    const {resolve} = this._map.get(key) || {};
    if (resolve) {
      this.delete(key);
      resolve(value);
    }
  }

  reject(key, value) {
    const {reject} = this._map.get(key) || {};
    if (reject) {
      this.delete(key);
      reject(value);
    }
  }

  has(key) {
    return this._map.has(key);
  }

  delete(key) {
    return this._map.delete(key);
  }

  resolveAll(value) {
    this._map.forEach(({resolve}) => resolve(value));
    this._map.clear();
  }

  rejectAll(value) {
    this._map.forEach(({reject}) => reject(value));
    this._map.clear();
  }

  forEach(fn) {
    this._map.forEach(fn);
  }
}

module.exports = PromisedMap;
