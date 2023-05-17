'use strict';

const feature1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(feature1(), 'Hello from feature1');
console.info('feature1 tests passed');
