'use strict';

var assert = require('assert');

describe('#groupName', function () {
  var input = require('./fixture/groupName/input');
  var expected = require('./fixture/groupName/expected');
  require('../').groupName(input);

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected);
  });

});
