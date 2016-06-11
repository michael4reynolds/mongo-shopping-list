import Item from '../models/item'

export function run(callback, errback) {
  Item.create(
    {name: 'Broad beans'},
    {name: 'Tomatoes'},
    {name: 'Peppers'},
    (err, items) => {
      if (err) {
        errback()
        return
      }
      callback(items)
    })
}

if (require.main === module) {
  require('./connect')
  exports.run(()=> {
    const mongoose = require('mongoose')
    mongoose.disconnect()
  }, err => {
    console.error(err)
  })
}
