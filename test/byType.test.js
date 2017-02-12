'use strict'

var assert = require('assert')

describe('#byType', function () {
  var indexByType = require('../src/byType')

  it('should group by type', function () {
    var data = [{
      'name': 'name',
      'context': {'type': 'function'}
    }, {
      'name': 'name',
      'context': {'type': 'mixin'}
    }]

    var expected = {
      'function': [{'name': 'name', 'context': {'type': 'function'}}],
      'mixin': [{'name': 'name', 'context': {'type': 'mixin'}}]
    }

    assert.deepEqual(indexByType(data), expected)
  })
})
