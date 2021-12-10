'use strict'

const assert = require('assert')

describe('#groupName', function () {
  const input = require('./fixture/groupName/input')
  const expected = require('./fixture/groupName/expected')
  require('../').groupName(input)

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected)
  })
})
