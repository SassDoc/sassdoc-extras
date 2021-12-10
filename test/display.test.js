'use strict'

const assert = require('assert')

describe('#display', function () {
  const display = require('../').display

  const input = require('./fixture/display/input')
  const expected = require('./fixture/display/expected')

  display(input)

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected)
  })
})
