import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from './src/middleware/logger.js'
import registerRouter from './src/routes/register.js'
import authRouter from './src/routes/auth.js'
import refreshRouter from './src/routes/refresh.js'

const PORT = process.env.PORT || 3500

const app = express()

// const whitelist = ['https://www.mywebsite.com']

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   optionsSuccessStatus: 200
// }

app.use('/', logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.use('/register', registerRouter)
app.use('/login', authRouter)
app.use('/refresh', refreshRouter)

app.use(function (err, req, res) {
  console.error(err.stack)
  res.status(500).send(err.message)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
