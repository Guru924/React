import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/products',(req, res)=>{
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 999.99,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Headphones",
            price: 149.99,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Backpack",
            price: 49.99,
            category: "Fashion"
        },
        {
            id: 4,
            name: "Smartphone",
            price: 799.99,
            category: "Electronics"
        },
        {
            id: 5,
            name: "Watch",
            price: 199.99,
            category: "Fashion"
        }
    ];

    // http://localhost:3000/api/products?search=Backpack

    if(req.query.search){
       const filterProducts = products.filter(products => products.name.includes(req.query.search))
       res.send(filterProducts)
       return;
    }
    setTimeout(() => {
        res.send(products);
    }, 3000);
    
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})
