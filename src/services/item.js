import Item from '../models/item'

export function save(name, callback, errback) {
  Item.create({ name }, (err, item) => {
    if (err) {
      errback(err)
      return
    }
    callback(item)
  })
}

export function list(callback, errback) {
  Item.find((err, items) => {
    if (err) {
      errback(err)
      return
    }
    callback(items)
  })
}
