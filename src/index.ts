import { PromisedMapItem } from './item';

export default class PromisedMap<K, V> {
  private map: Map<K, PromisedMapItem<V>> = new Map();

  /**
   * Returns map size.
   */
  get size() {
    return this.map.size;
  }

  /**
   * Sets key/data pair and creates related promise.
   * If key already exists in map - it will be replaced with new data and new promise.
   */
  set(key: K, data?: V) {
    const item = this.createMapItem(data);
    this.map.set(key, item);
    return item.promise;
  }

  /**
   * Returns data for key.
   */
  get(key: K) {
    const item = this.map.get(key);
    return item && item.data;
  }

  /**
   * Checks if key exists.
   */
  has(key: K) {
    return this.map.has(key);
  }

  /**
   * Deletes key from map.
   * Caution: previously returned promise will no be resolved or rejected.
   */
  delete(key: K) {
    return this.map.delete(key);
  }

  /**
   * Resolves promise in map by key and removes key from map.
   * If no such key in map - nothing happens.
   */
  resolve(key: K, value: unknown) {
    const item = this.map.get(key);
    if (item) {
      this.delete(key);
      item.resolve(value);
    }
  }

  /**
   * Rejects promise in map by key and removes key from map.
   * If no such key in map - nothing happens.
   */
  reject(key: K, reason: any) {
    const item = this.map.get(key);
    if (item) {
      this.delete(key);
      item.reject(reason);
    }
  }

  /**
   * Resolves all promise in map and removes all keys.
   */
  resolveAll(value: unknown) {
    this.map.forEach(item => item.resolve(value));
    this.map.clear();
  }

  /**
   * Rejects all promise in map and removes all keys.
   */
  rejectAll(reason: any) {
    this.map.forEach(item => item.reject(reason));
    this.map.clear();
  }

  /**
   * Iterate map.
   */
  forEach(fn: (item: V, key: K, map: Map<K, PromisedMapItem<V>>) => void) {
    this.map.forEach((item, key, map) => fn(item.data, key, map));
  }

  /**
   * Clears map.
   */
  clear() {
    return this.map.clear();
  }

  private createMapItem(data?: V) {
    const item: Partial<PromisedMapItem<V>> = { data };
    item.promise = new Promise((resolve, reject) => {
      item.resolve = resolve;
      item.reject = reject;
    });
    return item as PromisedMapItem<V>;
  }
}

