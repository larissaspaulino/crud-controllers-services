import createUserService from "../services/createUser.service"

 const createUserController = (request, response) => {
    const { email, name } = request.body

    const user = createUserService(email, name)

    return response.json(user)
}

// module.exports = { createUserController }

export default createUserController