'use strict';

var assert = require('assert');

describe('#sort', function () {
  var sort = require('../').sort;

  var input = require('./fixture/sort/input');
  var expected = require('./fixture/sort/expected');

  sort(input);

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected);
  });

});
