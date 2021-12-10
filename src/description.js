'use strict'

const fs = require('fs')
const path = require('path')
const s = require('util').format

/**
 * Resolve and load a `descriptionPath` key from config.
 */
module.exports = function description (ctx) {
  if (!ctx.descriptionPath) {
    return
  }

  ctx.description = tryLoadFile(ctx)
}

function tryLoadFile (ctx) {
  const desc = ctx.descriptionPath
  const filePath = path.resolve(ctx.dir || process.cwd(), desc)

  try {
    return fs.readFileSync(filePath, { encoding: 'utf8' })
  } catch (e) {
    if (e.code === 'ENOENT') {
      ctx.emit(
        'warning',
        new Error(s('Description file not found: `%s` given.', desc))
      )
    } else {
      ctx.emit('warning', e)
    }
  }

  return false
}
