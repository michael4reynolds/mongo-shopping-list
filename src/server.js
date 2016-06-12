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

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

export {app}
