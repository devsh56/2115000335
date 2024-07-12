const mongoose =require('mongoose');
const Review = require('./Review');

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    type:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    rent:{
        type:String,
        min:0,
    },
    desc:{
        type:String,
        trim:true,
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Register'
    },
    money:{
        type:Number,
        trim:true,
    }
})

productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length>0)
    {
       await  Review.deleteMany(_id,{$in:Product.reviews})
    }
})
const Product=mongoose.model('Product',productSchema);
module.exports=Product;



