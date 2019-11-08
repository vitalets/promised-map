const chai = require('chai');
chai.assert.rejects = require('assert-rejects');
const PromisedMap = require('../src');

chai.config.truncateThreshold = 0;

Object.assign(global, {
  assert: chai.assert,
  PromisedMap,
});
