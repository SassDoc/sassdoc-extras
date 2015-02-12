'use strict';

module.exports = exports = function (ctx) {
  for (var i = 1; i < arguments.length; ++i) {
    exports[arguments[i]](ctx);
  }
};

[
  'byGroupAndType',
  'byType',
  'markdown',
  'display',
  'groupName',
  'shortcutIcon',
].forEach(function (name) {
  exports[name] = require('./src/' + name);
});
