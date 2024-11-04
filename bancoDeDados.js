const monsgoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){
    try{
        console.log('Conexão com banco de dados iniciou')

    await monsgoose.connect(process.env.MONGO_URL)

    console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro){
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados