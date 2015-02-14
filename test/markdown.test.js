'use strict';

var assert = require('assert');

describe('#markdown', function () {
  var input = require('./fixture/markdown/input');
  var expected = require('./fixture/markdown/expected');

  require('../').markdown(input);

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected);
  });

});
