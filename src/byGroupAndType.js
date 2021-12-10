'use strict'

module.exports = function byGroupAndType (data) {
  const sorted = {}

  data.forEach(function (item) {
    const group = item.group[0]
    const type = item.context.type

    if (!(group in sorted)) {
      sorted[group] = {}
    }

    if (!(type in sorted[group])) {
      sorted[group][type] = []
    }

    sorted[group][type].push(item)
  })

  return sorted
}
