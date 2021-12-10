'use strict'

const assert = require('assert')

describe('#resolveVariables', function () {
  const resolveVariables = require('../').resolveVariables

  const input = require('./fixture/resolveVariables/input')
  const expected = require('./fixture/resolveVariables/expected')

  resolveVariables(input)

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected)
  })
})
