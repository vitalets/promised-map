import { PromisedMap } from 'promised-map';

(async () => {
  assertEqual(typeof PromisedMap, 'function');
  const map = new PromisedMap();
  assertEqual(map.size, 0);
  const promise = map.set('foo', 42);
  assertEqual(map.size, 1);
  assertEqual(promise.constructor.name, 'Promise');
  map.resolve('foo', 'bar');
  assertEqual(await promise, 'bar');
  assertEqual(map.size, 0);
  console.log(`OK`);
})();

function assertEqual(actual: unknown, expected: unknown) {
  if (actual !== expected) {
    throw new Error(`"${actual}" !== "${expected}"`);
  }
}

