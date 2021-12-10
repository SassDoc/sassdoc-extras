'use strict'

const assert = require('assert')

describe('#byType', function () {
  const indexByType = require('../src/byType')

  it('should group by type', function () {
    const data = [
      {
        name: 'name',
        context: { type: 'function' }
      },
      {
        name: 'name',
        context: { type: 'mixin' }
      }
    ]

    const expected = {
      function: [{ name: 'name', context: { type: 'function' } }],
      mixin: [{ name: 'name', context: { type: 'mixin' } }]
    }

    assert.deepEqual(indexByType(data), expected)
  })
})
