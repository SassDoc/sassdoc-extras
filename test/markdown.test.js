'use strict'

const assert = require('assert')

describe('#markdown', function () {
  const input = require('./fixture/markdown/input')
  const expected = require('./fixture/markdown/expected')

  require('../').markdown(input)

  it('should match expected ctx', function () {
    assert.deepEqual(input, expected)
  })
})
