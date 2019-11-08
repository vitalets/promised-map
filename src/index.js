/**
 * Promised map.
 */

module.exports = class PromisedMap {
  /**
   * Constructor.
   */
  constructor() {
    this._map = new Map();
  }

  /**
   * Returns map size.
   *
   * @returns {number}
   */
  get size() {
    return this._map.size;
  }

  /**
   * Creates and returns new promise for provided key.
   * If  key already exists in map - existing pending promise will be returned.
   *
   * @param {*} key
   * @returns {Promise}
   */
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

  /**
   * Resolves promise in map by key and removes key from map.
   * If no such key in map - nothing happens.
   *
   * @param {*} key
   * @param {*} value
   */
  resolve(key, value) {
    const {resolve} = this._map.get(key) || {};
    if (resolve) {
      this.delete(key);
      resolve(value);
    }
  }

  /**
   * Rejects promise in map by key and removes key from map.
   * If no such key in map - nothing happens.
   *
   * @param {*} key
   * @param {*} value
   */
  reject(key, value) {
    const {reject} = this._map.get(key) || {};
    if (reject) {
      this.delete(key);
      reject(value);
    }
  }

  /**
   * Does map has provided key.
   *
   * @param {*} key
   * @returns {boolean}
   */
  has(key) {
    return this._map.has(key);
  }

  /**
   * Deletes key from map.
   * Caution: previously returned promise will no be resolved or rejected.
   *
   * @param {*} key
   * @returns {boolean}
   */
  delete(key) {
    return this._map.delete(key);
  }

  /**
   * Resolves all promise in map and removes all keys.
   *
   * @param {*} value
   */
  resolveAll(value) {
    this._map.forEach(({resolve}) => resolve(value));
    this._map.clear();
  }

  /**
   * Rejects all promise in map and removes all keys.
   *
   * @param {*} value
   */
  rejectAll(value) {
    this._map.forEach(({reject}) => reject(value));
    this._map.clear();
  }

  /**
   * Iterator.
   *
   * @param {function} fn
   */
  forEach(fn) {
    this._map.forEach(fn);
  }
};
