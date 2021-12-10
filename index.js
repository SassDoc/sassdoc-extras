'use strict'

module.exports = exports = function (ctx) {
  for (let i = 1; i < arguments.length; ++i) {
    exports[arguments[i]](ctx)
  }
}

const extras = [
  'description',
  'markdown',
  'display',
  'byGroupAndType',
  'byType',
  'groupName',
  'shortcutIcon',
  'sort',
  'resolveVariables'
]

extras.forEach(function (name) {
  exports[name] = require('./src/' + name)
})
