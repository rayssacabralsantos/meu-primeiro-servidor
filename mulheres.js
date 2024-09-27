const express = require("express")

const router = express.Router()
const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Rayssa Cabral Santos',
        imagem: 'C:\Users\raysa\OneDrive\Área de Trabalho\Dev',
        minibio: 'Desenvolvedora e Estudante'
    },
    {
        nome: 'Ada Lovelace',
        imagem: 'http://www.w3.org/1999/xhtml',
        minibio: 'Uma das primeiras mulheres na programação'
    },
    {
        nome: 'Hedy Lamarr',
        imagem: 'http://www.w3.org/1999/xhtml',
        minibio: 'teve uma significativa contribuição tecnológica na Segunda Guerra Mundial'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}



function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}



app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
