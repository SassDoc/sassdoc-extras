'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');

var read = function(p) {
  return fs.readFileSync(path.join(__dirname, p), { encoding: 'utf8' });
};

describe('#description', function () {
  var expected = read('./fixture/description/expected.md');
  expected = expected.trim();

  var ctx = {
    dir: path.join(__dirname, './fixture/description'),
    descriptionPath: './input.md',
    data: [],
  };

  it('should resolve and load a description file', function () {
    require('../')(ctx, 'description', 'markdown');

    assert.equal(ctx.description, expected);
  });

  it('should not throw if description file is not found', function () {
    var called = false;
    ctx.descriptionPath = 'fail.md';
    ctx.emit = function () {
      called = true;
    };

    assert.doesNotThrow(function () {
      require('../')(ctx, 'description');
    });
    assert.ok(called);
  });

});
