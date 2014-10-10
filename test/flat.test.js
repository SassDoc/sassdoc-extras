/* global describe, it */
'use strict';

var assert = require('assert');

describe('#flat', function () {
  var flat = require('../src/flat');

  it.only('should result in a flat array', function () {
    var data = {
      'function': {
        'name': {
          'name': 'name',
        },
      },
      'mixin': {
        'name': {
          'name': 'name',
        },
      },
    };

    assert.deepEqual(flat(data), [{'name':'name'},{'name':'name'}]);
  });
});
