'use strict'

/**
 * Sort the SassDoc data by given criteria.
 * configuration.
 */
module.exports = function display (ctx) {
  if (!ctx.sort) {
    return
  }

  ctx.data = ctx.data.sort(compareData(ctx.sort))
}

/**
 * Get a comparison function for given sort criteria.
 *
 * @param {Array} sort
 * @return {Function}
 */
function compareData (sort) {
  return function (a, b) {
    for (let i = 0; i < sort.length; ++i) {
      const parts = parseCriteria(sort[i])
      const key = parts[0]
      const desc = parts[1]

      let comparison = compare(
        getComparisonValue(key, a),
        getComparisonValue(key, b)
      )

      if (desc) {
        comparison = invert(comparison)
      }

      if (comparison) {
        return comparison
      }
    }

    return 0
  }
}

function getComparisonValue (key, item) {
  switch (key) {
    case 'group':
      return item.group[0].toLowerCase()
    case 'file':
      return item.file.path
    case 'line':
      return item.context.line.start
    case 'access':
      return parseAccess(item.access)
    default:
      throw new Error('Unknown sort criteria `' + key + '`')
  }
}

function parseAccess (access) {
  switch (access) {
    case 'public':
      return 1
    case 'private':
      return 2
    default:
      return 3
  }
}

function parseCriteria (key) {
  const last = key[key.length - 1]
  let invert = false

  if (last === '<' || last === '>') {
    key = key.substr(0, key.length - 1)
  }

  if (last === '>') {
    invert = true
  }

  return [key, invert]
}

function invert (comparison) {
  return !comparison ? 0 : -1 * comparison
}

function compare (a, b) {
  switch (true) {
    case a > b:
      return 1
    case a === b:
      return 0
    default:
      return -1
  }
}
