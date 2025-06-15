const express = require('express')
const morgan = require('morgan')

const app = express()

const products = []

app.use(morgan('dev'))

app.get('/products',(req,res) => {
    res.send("Obteniendo productos")
})

app.post('/products',(req,res) => {
    res.send("Creando productos")
})

app.put('/products',(req,res) => {
    res.send("Editando productos")
})

app.delete('/products',(req,res) => {
    res.send("Eliminando productos")
})

app.get('/products:id',(req,res) => {
    res.send(`Obteniendo el producto${req.params.id}`)
})

app.listen(3000)

console.log("SERVER ON PORT 3000")