require('./db/connect')
import express from 'express'
import bodyParser from 'body-parser'
import itemRoutes from './routes/item'

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/', itemRoutes)
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' })
})

  app.listen(process.env.PORT || 8000, () => {
  console.log('Listening on port 8000')
})

export {app}
