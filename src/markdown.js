'use strict';

var marked = require('marked');

module.exports = function (ctx) {

  if (ctx.package && ctx.package.description) {
    ctx.package.description = marked(ctx.package.description);
  }

  /**
   * Wrapper for `marked` that takes only one argument to avoid
   * problem with `map` additional arguments.
   */
  function md(str) {
    return marked(str);
  }

  /**
   * Return a function that will apply `fn` on `obj[key]` to generate
   * `obj[newKey]`.
   */
  function applyKey(fn, key) {
    return function (obj) {
      if (key in obj) {
        obj[key] = fn(obj[key]);
      }

      return obj;
    };
  }

  for (var type in ctx.data) {
    for (var name in ctx.data[type]) {
      var item = ctx.data[type][name];

      if ('description' in item) {
        item.description = marked(item.description);
      }

      if ('content' in item && item.content.description) {
        item.content.description = marked(item.content.description);
      }

      if ('return' in item && item.return.description) {
        item.return.description = marked(item.return.description);
      }

      if ('author' in item) {
        item.author = item.author.map(md);
      }

      if ('throw' in item) {
        item.throw = item.throw.map(md);
      }

      if ('todo' in item) {
        item.todo = item.todo.map(md);
      }

      if ('deprecated' in item) {
        item.deprecated = item.deprecated.map(md);
      }

      if ('example' in item) {
        item.example = item.example.map(
          applyKey(md, 'description')
        );
      }

      if ('parameter' in item) {
        item.parameter = item.parameter.map(
          applyKey(md, 'description')
        );
      }

      if ('property' in item) {
        item.property = item.property.map(
          applyKey(md, 'description')
        );
      }

      if ('since' in item) {
        item.since = item.content.map(
          applyKey(md, 'description')
        );
      }
    }
  }
};
