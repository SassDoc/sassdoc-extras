'use strict'

module.exports = function byType (data) {
  const sorted = {}

  data.forEach(function (item) {
    const type = item.context.type

    if (!(type in sorted)) {
      sorted[type] = []
    }

    sorted[type].push(item)
  })

  return sorted
}
