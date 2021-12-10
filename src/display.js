'use strict'

/**
 * Compute a `display` property in regards of `display.access`
 * configuration.
 */
module.exports = function display (ctx) {
  ctx.data = ctx.data.filter(function (item) {
    const displayItemAccess = ctx.display.access
      ? ctx.display.access.indexOf(item.access) !== -1
      : false
    const isAlias = item.alias
    const displayAlias = ctx.display.alias

    return displayItemAccess && !(isAlias && !displayAlias)
  })
}
