const express = require('express')
const bancodeDados = require('./db')
const bodyParser = require('body-parser')
const porta = 3003

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
    res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancodeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancodeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancodeDados.excluirProduto(req.params.id)
    res.send(produto)
})


app.listen(porta, () =>{
    console.log(`Servidor execuando na porta ${porta}.`)
})