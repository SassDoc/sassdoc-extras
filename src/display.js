'use strict';

var eachItem = require('./eachItem');

/**
 * Compute a `display` property regarding of access display
 * configuration.
 */
module.exports = function (ctx) {
  var shouldBeDisplayed = function (item) {
    var displayItemAccess = ctx.view.display.access.indexOf(item.access) !== -1;
    var isAlias = item.alias;
    var displayAlias = ctx.view.display.alias;

    return displayItemAccess && !(isAlias && !displayAlias);
  };

  ctx.data.count = 0;

  eachItem(ctx.data, function (item) {
    item.display = shouldBeDisplayed(item);

    if (item.display) {
      ctx.data.count++;
    }
  });
};
