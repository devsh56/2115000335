const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/products', async (req, res) => {
    const { top, minPrice, maxPrice } = req.query;

    const apiUrl = `http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    try {
    const response = await axios.get(apiUrl);
    const products = response.data;
    
    res.render('products', { products });
    } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
