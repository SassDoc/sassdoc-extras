'use strict';

/**
 * Compute a `display` property regarding of access display
 * configuration.
 */
module.exports = function display(ctx) {
  ctx.data.filter(function (item) {
    var displayItemAccess = ctx.display.access.indexOf(item.access) !== -1;
    var isAlias = item.alias;
    var displayAlias = ctx.display.alias;

    return displayItemAccess && !(isAlias && !displayAlias);
  });
};
