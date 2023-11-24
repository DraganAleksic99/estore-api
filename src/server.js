import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3500

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
