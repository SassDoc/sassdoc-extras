'use strict'

var assert = require('assert')

describe('#resolveVariables', function () {
  var resolveVariables = require('../').resolveVariables

  var input = require('./fixture/resolveVariables/input')
  var expected = require('./fixture/resolveVariables/expected')

  resolveVariables(input)

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected)
  })
})
