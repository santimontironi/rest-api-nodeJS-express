const express = require('express')
const morgan = require('morgan')

const app = express()

const products = [
    {
        "id":1,
        "name":"laptop",
        "price":3000
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.get('/products',(req,res) => {
    res.json(products)
})

app.get('/products/:id',(req,res) => {
    const product = products.find(x => x.id === parseInt(req.params.id))
    if(product){
        res.json(product)
    }else{
        res.send('Product not found.')
    }
})

app.post('/products',(req,res) => {
    const newProduct = {...req.body,id:products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
})

app.put('/products',(req,res) => {
    res.send("Editando productos")
})

app.delete('/products',(req,res) => {
    res.send("Eliminando productos")
})

app.listen(3000)

console.log("SERVER ON PORT 3000")