import 'dotenv/config.js'
import usersDB from '../models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handleLogin = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required. ' })
  }

  const existingUser = usersDB.users.find(user => user.email === email)

  if (!existingUser) return res.sendStatus(401)

  const match = await bcrypt.compare(password, existingUser.password)

  if (match) {
    const username = existingUser.username
    const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' })
    const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d'
    })
    const otherUsers = usersDB.users.filter(user => user.username !== existingUser.username)
    const userWithJwt = { ...existingUser, refreshToken }
    usersDB.setUsers([...otherUsers, userWithJwt])

    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({ accessToken })
  }
}

export default handleLogin
