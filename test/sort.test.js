'use strict'

const assert = require('assert')

describe('#sort', function () {
  const sort = require('../').sort

  const input = require('./fixture/sort/input')
  const expected = require('./fixture/sort/expected')

  sort(input)

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected)
  })
})
