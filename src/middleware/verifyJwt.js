import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers['authorization']

  if (!authHeader) return res.sendStatus(401)

  const token = authHeader.split(' ')[1]

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) return res.sendStatus(403)
    req.user = decoded.username
    next()
  })
}

export default verifyJwt
