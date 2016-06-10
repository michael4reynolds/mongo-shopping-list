import * as express from 'express'
import * as Item from '../services/item'

const router = express.Router()

router.get('/items', (req, res) => {
  Item.list(items => {
    res.json(items)
  }, err => {
    res.status(400).json(err)
  })
})

router.post('/items', (req, res) => {
  Item.save(req.body.name, item => {
    res.status(201).json(item)
  }, err => {
    res.status(400).json(err)
  })
})

export default router
