var assert = require('assert');

describe('#byGroupAndType', function () {
  var indexByGroupAndType = require('../src/byGroupAndType');

  it('should group by group name and type', function(){
    var data = [{
      'name': 'name',
      'context': {'type': 'function'},
      'group': ['test']
    }, {
      'name': 'name1',
      'context': {'type': 'function'},
      'group': ['nogroup']
    }, {
      'name': 'name',
      'context': {'type': 'mixin'},
      'group': ['test']
    }, {
      'name': 'name1',
      'context': {'type': 'mixin'},
      'group': ['nogroup']
    }];

    var expected = {
      'nogroup': {
        'function': [{'name': 'name1', 'context': {'type': 'function'}, 'group': ['nogroup']}],
        'mixin': [{'name': 'name1', 'context': {'type': 'mixin'}, 'group': ['nogroup']}]
      },
      'test': {
        'function': [{'name': 'name', 'context': {'type': 'function'}, 'group': ['test']}],
        'mixin': [{'name': 'name', 'context': {'type': 'mixin'}, 'group': ['test']}]
      }
    };

    assert.deepEqual(indexByGroupAndType(data), expected);
  });
});
