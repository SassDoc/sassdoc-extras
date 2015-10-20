'use strict';

var assert = require('assert');

describe('#resolvedVariables', function () {
  var resolvedVariables = require('../').resolvedVariables;

  var input = require('./fixture/resolvedVariables/input');
  var expected = require('./fixture/resolvedVariables/expected');

  resolvedVariables(input);

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected);
  });

});
