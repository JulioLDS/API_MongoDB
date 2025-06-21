import express from 'express'
import mongoose from 'mongoose'
import User from './models/User.js'

mongoose.connect('mongodb+srv://<Username>:<password>@cluster0.20xh2ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Banco de dados conectado com sucesso!')).catch(() => console.log('Deu ruim'))

const app = express()

app.use(express.json())

app.get('/users', async (request, response) => {
    const users = await User.find()

    return response.status(200).json(users)
})

app.post('/users', async (request, response) => {
    const user = request.body;

    const newUser = await User.create(user)

    return response.status(201).json(newUser)
})

app.listen(3000)