import mongoose from 'mongoose'

//CONEXÃO COM O BANCO DE DADOS
async function connectDataBase() {
    await mongoose
        .connect(
            'mongodb+srv://<userName>:<password>@cluster0.20xh2ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        )
}

export default connectDataBase
