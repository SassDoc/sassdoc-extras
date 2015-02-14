'use strict';

var assert = require('assert');

describe('#display', function () {
  var display = require('../').display;

  var input = require('./fixture/display/input');
  var expected = require('./fixture/display/expected');

  display(input);

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected);
  });

});
