import bcrypt from 'bcrypt'
import usersDB from '../models/users.js'

const handleNewUser = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required. ' })
  }

  const duplicate = usersDB.users.find(user => user.username === username)

  if (duplicate) return res.sendStatus(409)

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      username,
      password: hashedPassword
    }
    usersDB.setUsers([...usersDB.users, newUser])
    return res.status(201).json({ success: `New user ${username} created` })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default handleNewUser
