import User from '../models/User.js'

//VER USUÁRIOS
async function getUsers(request, response) {
    const users = await User.find()

    return response.status(200).json(users)
}

//CRIAR USUÁRIO
async function createUser(request, response) {
    const user = request.body;

    const newUser = await User.create(user)

    return response.status(201).json(newUser)
}

//DELETAR USUÁRIO
async function deleteUser(request, response) {
    const id = request.params.id;

    await User.findByIdAndDelete({ _id: id })

    return response.status(200).json({ response: 'Usuário deletado com sucesso!' })
}

//EXPORTANDO OS MÉTODOS
export { getUsers, createUser, deleteUser }