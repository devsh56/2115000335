const express=require("express");
const router=express.Router();
const Product =require("../models/Product");
const User =require("../models/Register");
const { isProductAuthor,isLoggedIn, isSeller } = require("../middleware");
// const validateProduct=require("../middleware");



// To show products 
router.get('/search', async (req, res) => {
    try {
        const query = req.query.q;
        
        // Ensure the query is sanitized and a valid regular expression is constructed
        const regex = new RegExp(query, 'i');
        
        const results = await Product.find({ name: { $regex: regex } });
        
        console.log(results); // Case-insensitive search
        console.log("ha ma mens section sa");
        
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
router.get("/products",async(req,res)=>
{
    try{
    let products=await Product.find({});
    console.log(products);
    res.render('products/index',{products})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});
router.get("/products/women",async(req,res)=>
{
    try{
    let products=await Product.find({});
    const result = products.filter((word) =>word.type ==="Women");
    res.render('products/women',{result})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});
router.get("/products/men",async(req,res)=>
{
    try{
    let products=await Product.find({});
    const result = products.filter((word) =>word.type ==="Men");
    res.render('products/men',{result})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});
router.get("/products/footwear",async(req,res)=>
{
    try{
    let products=await Product.find({});
    const result = products.filter((word) =>word.type ==="Footwear");
    res.render('products/footwear',{result})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});
router.get("/products/accessories",async(req,res)=>
{
    try{
    let products=await Product.find({});
    const result = products.filter((word) =>word.type ==="Accessories");
    res.render('products/accessories',{result})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});

// To upload products 
router.get("/product/new",isLoggedIn,(req,res)=>{
    try{
    res.render('products/new');
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});

// To Add the  products 
router.post("/products",async(req,res)=>{
    try{
    let a=req.body;
    console.log(a);
    const {name,type,image,price,desc,money}=a;
    const pro=await Product.create({name,type,image,price,desc,author:req.user._id,money});
   // console.log(pro);
    res.redirect("/products");
    }
    catch(e)
    {
        // console.log(err);
       // console.log(suar);
        res.send(e)
    }
});

// To show particular product
router.get("/products/:id",async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById(id).populate('reviews');
    // console.log(req.flash('info', 'hello!'))
    res.render('products/show',{foundProduct});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });;
    }
});

// To Edit particular Products  use form 
router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });;
    }
});

// To actually edit the data in database
router.patch('/products/:id',isLoggedIn, async(req,res)=>{
    try{
    let {id} = req.params;
    let {name,type,image,price,desc} = req.body;
    await Product.findByIdAndUpdate(id , {name,type,image,price,desc});
   res.redirect(`/products/${id}`)
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('error', { error: err });;
    }
})

// To delete a Product 
router.delete('/products/:id',isLoggedIn,isProductAuthor,async(req,res)=>{
    try{
    let {id}=req.params;
    // const product =await Product.findById(id);
    // for(let id of product.reviews)
    // {
    //    await Review.findByIdAndDelete(id);
    // }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('error', { error: err });
    }
});
router.get('/product/payment',isLoggedIn,async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/payment');
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });;
    }
});
// Assuming you have your Express app set up with routes

// Import your models


// Route to render rented items page
router.get('/product/rent', async (req, res) => {
    try {
        // Fetch user data including rented items
        const user = await User.findById(req.user._id).populate('rentedItems.productId');
        
        // Render EJS template with rented items data
        res.render('products/render', { rentedItems: user.rentedItems });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
// Assuming you have your Express app set up with routes

// Import your models


// Route to render rent item page
router.get('/products/:id/rent', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the product by ID
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        // Render the rent page with product details
        res.render('products/rent', { id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
router.post('/products/rentitem', async (req, res) => {
    try {
        const { productId, rentalStart, rentalEnd } = req.body;
        
        // Validate productId, rentalStart, and rentalEnd

        // Find the user by ID
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        // Check if the user already has the product in rentedItems
        const alreadyRented = user.rentedItems.some(item => item.productId.toString() === productId);
        if (alreadyRented) {
            return res.status(400).json({ msg: 'Product already rented by user' });
        }

        // Add the rented item to user's rentedItems
        user.rentedItems.push({
            productId: productId,
            rentalStart: rentalStart,
            rentalEnd: rentalEnd
        });

        // Save the user object with the new rented item
        await user.save();

        res.redirect("/products");
        // res.render('product/index');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});



module.exports=router;