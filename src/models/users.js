const usersDB = {
  users: [
    {
      email: 'demo@gmail.com',
      password: '$2a$10$Y1ODtQIduIv/gnCHOXuBKOtTz9YYuYFhh5kpMbK7tcTuXLLM.KYaS',
      name: 'Dragan',
      mobile: '+34782364823',
      policy: true,
      id: 'z4fNfs0'
    }
  ],
  setUsers(data) {
    this.users = data
  }
}

export default usersDB
