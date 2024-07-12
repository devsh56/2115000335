// src/services/ProductService.js
const products = [
    {
        pid: 1,
        productName: "Product 1",
        price: 100,
        discount: 10,
        rating: 4.5,
    },
    {
        pid: 2,
        productName: "Product 2",
        price: 200,
        discount: 20,
        rating: 3.8,
    },
    {
        pid: 3,
        productName: "Product 3",
        price: 300,
        discount: 15,
        rating: 4.2,
    },
    {
        pid: 4,
        productName: "Product 4",
        price: 400,
        discount: 5,
        rating: 4.0,
    },
    {
        pid: 5,
        productName: "Product 5",
        price: 500,
        discount: 25,
        rating: 4.9,
    },
    {
        pid: 6,
        productName: "Product 6",
        price: 600,
        discount: 30,
        rating: 3.5,
    },
    {
        pid: 7,
        productName: "Product 7",
        price: 700,
        discount: 20,
        rating: 4.7,
    },
    {
        pid: 8,
        productName: "Product 8",
        price: 800,
        discount: 10,
        rating: 3.9,
    },
    {
        pid: 9,
        productName: "Product 9",
        price: 900,
        discount: 15,
        rating: 4.3,
    },
    {
        pid: 10,
        productName: "Product 10",
        price: 1000,
        discount: 5,
        rating: 4.1,
    },
];

const ProductService = {
    GetAllProduct: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: products });
            }, 1000);
        });
    },
};

export default ProductService;
