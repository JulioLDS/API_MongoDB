import mongoose from 'mongoose'

//CONEXÃO COM O BANCO DE DADOS
async function connectDataBase() {
    await mongoose
        .connect(
            'mongodb+srv://JulioLDS:Juliolds3687@cluster0.20xh2ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        )
}

export default connectDataBase
