import { strict as assert } from 'assert';
import PromisedMap from '../src/index';

type AssertType = typeof assert;
type PromisedMapType = typeof PromisedMap;

declare global {
  const assert: AssertType;
  const PromisedMap: PromisedMapType;
}

(global as any).assert = assert;
(global as any).PromisedMap = PromisedMap;
