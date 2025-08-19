import express from 'express'

import pkg from '@prisma/client'
const { PrismaClient} = pkg
const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.post('/cadastro', async (req,res)=>{

    await prisma.usuario.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.get('/cadastro', async (req,res)=>{

    const lista_usuarios = await prisma.usuario.findMany()

    res.status(200).json(lista_usuarios)
})

//Porta de resposta
app.listen(3000)