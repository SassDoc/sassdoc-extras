/* global describe, it */
'use strict';

var assert = require('assert');

describe('#display', function () {
  var display = require('../').display;

  var show_input = require('./fixture/display/show.input');
  var show_expected = require('./fixture/display/show.expected');
  display(show_input);

  var hide_input = require('./fixture/display/hide.input');
  var hide_expected = require('./fixture/display/hide.expected');
  display(hide_input);

  it('should match expected ctx', function () {
    //assert.deepEqual(show_input, show_expected);
    assert.deepEqual(hide_input, hide_expected);
  });

});
