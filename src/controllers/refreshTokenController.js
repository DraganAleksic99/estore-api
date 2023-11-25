import 'dotenv/config.js'
import usersDB from '../models/users.js'
import jwt from 'jsonwebtoken'

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies

  console.log(cookies)

  if (!cookies?.jwt) return res.sendStatus(401)

  const refreshToken = cookies.jwt

  const existingUser = usersDB.users.find(user => user.refreshToken === refreshToken)

  if (!existingUser) return res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
    if (error || existingUser.username !== decoded.username) return res.sendStatus(403)
    const accessToken = jwt.sign({ username: decoded.username }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m'
    })
    res.json({ accessToken })
  })
}

export default handleRefreshToken
