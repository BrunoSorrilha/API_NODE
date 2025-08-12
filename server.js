import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

//CRIAR ROTAS

app.post('/cadastro',(req,res)=>{
    console.log(req.body)
    usuarios.push(req.body)
    //res.send('POST FUNCIONOU')
    res.status(201).json(req.body)
})

app.get('/cadastro',(req,res)=>{
    //res.send('GET FUNCIONOU')
    res.status(200).json(usuarios)
})
//CONFIGURAR PORTA DO SERVIDOR
app.listen(3000,()=>{console.log('SERVIDOR RODANDO!')})