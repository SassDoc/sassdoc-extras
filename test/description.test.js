'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert')

const read = function (p) {
  return fs.readFileSync(path.join(__dirname, p), { encoding: 'utf8' })
}

describe('#description', function () {
  let expected = read('./fixture/description/expected.md')
  expected = expected.trim()

  const ctx = {
    dir: path.join(__dirname, './fixture/description'),
    descriptionPath: './input.md',
    data: []
  }

  it('should resolve and load a description file', function () {
    require('../')(ctx, 'description', 'markdown')

    assert.equal(ctx.description.trim(), expected)
  })

  it('should not throw if description file is not found', function () {
    let called = false
    ctx.descriptionPath = 'fail.md'
    ctx.emit = function () {
      called = true
    }

    assert.doesNotThrow(function () {
      require('../')(ctx, 'description')
    })
    assert.ok(called)
  })
})
