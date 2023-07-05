const express = require('express')
const app =  express()

console.log('rodando em : localhost:3000')
app.listen('3000')

app.route('/').get((req,res)=> res.send("Resposta da rota Home"))
app.route('/sobre').get((req, res)=> res.send("resposta enviada da rota sobre"))


//midddleware   serve para transforma as informacoes do put/post em json
app.use(express.json())

//post
let resposta = "objeto vazio"
app.route('/testpost').get((req, res)=>res.send(resposta))

app.route('/').post((req, res)=> {
    resposta = req.body
    res.send(resposta)
})

//put
let autor = "natanael"
app.route('/testandoput').get((req, res)=> res.send(autor))

app.route('/').put((req,res)=>{
    autor = req.body
    res.send(autor)
    console.log(autor)
})

//delete
app.route('/:id').delete((req, res)=>res.send(req.params.id))

//routeParams => passando inf pela URL
//app.route('/:nome').get((req, res)=> res.send(req.params.nome))
app.route('/id/:numeroid').get((req, res)=> res.send(req.params.numeroid))

//queryParams  pegando informacoes pela query.
app.route('/aqui').get((req, res)=>res.send(req.query))