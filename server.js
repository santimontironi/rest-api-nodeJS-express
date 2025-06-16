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

app.put('/products/:id',(req,res) => {
    const newData = req.body
    const product = products.find(x => x.id === parseInt(req.params.id))
    if(product){
        const productosActualizados = products.map(p => (
            p.id === parseInt(req.params.id) ? {...p,...newData} : p
        ))

        products.length = 0;
        products.push(...productosActualizados);

        res.json({
            message: 'Producto editado correctamente',
            productsNew: products
        });

    }else{
        res.status(404).send("Product not found")
    }
})

app.delete('/products/:id',(req,res) => {
    const product = products.find(x => x.id === parseInt(req.params.id))
    if(product){
        const newProducts = products.filter(p => p.id !== parseInt(req.params.id))
        res.json({
            message:'Producto eliminado correctamente',
            productsNew: newProducts
        })
    }else{
        res.status(404).send("Product not found")
    }
})

app.listen(3000)

console.log("SERVER ON PORT 3000")