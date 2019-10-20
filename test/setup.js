const chai = require('chai');
const PromisedMap = require(process.env.LIB_PATH || '../src');

chai.config.truncateThreshold = 0;

Object.assign(global, {
  assert: chai.assert,
  PromisedMap,
});
