import express from 'express'
import connectDataBase from './database/db.js'
import routes from './routes.js'

const app = express()

//USAR JSON NO EXPRESS
app.use(express.json())
//USAR AS ROTAS
app.use(routes)

//CHAMANDO CONEXÃO COM O BANCO DE DADOS
connectDataBase()
    .then(() => {
        app.listen(3000, () => console.log('Servidor rodando na porta 3000 e bd conectado!'))
    })
    .catch((error) => console.log(error))
