import { v4 as uuidv4 } from 'uuid'

import users from '../database'

const createUserService = (email, name) => {
  const userAlreadyExists = users.find((user) => user.email === email)

  if (userAlreadyExists) {
    return 'This email is already being used'
  }

  const newUser = { 
      email, 
      name, 
      id: uuidv4() 
    }

  users.push(newUser)

  return newUser

}

export default createUserService