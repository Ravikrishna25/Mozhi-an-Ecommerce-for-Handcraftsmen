const Product = require('../models/productModel')
const mongoose = require("mongoose")
const ErrorHandler = require("../utils/errorHandler")
const APIFeatures = require("../utils/apiFeatures")
const catchAsyncError = require("../middlewares/catchAsyncError")




//get all products  = /api/v1/products
exports.getProducts = async (req, res, next) => { 
    try{
 
        const resPerPage = 8;
        // const apiFeatures = new APIFeatures(Product.find(),req.query).search().filter().paginate(resPerPage);
        // const products = await Product.find();
        
        let buildQuery = ()=>{
            return new APIFeatures(Product.find(),req.query).search().filter()
        }
        
        const filteredProductsCount= await buildQuery().query.countDocuments({});
        const totalProductsCount = await Product.countDocuments({});
        
        
        const products = await buildQuery().paginate(resPerPage).query;

        let productsCount = totalProductsCount;

        if(filteredProductsCount !== totalProductsCount){
            productsCount=filteredProductsCount;
        }
        await new Promise(resolve => setTimeout(resolve,1000));
        res.status(200).json({
             success: true,
            //  count:products.length,
            count: productsCount,
            resPerPage,
            products 
        }) 
    }catch(err){
        if (err.name === "TypeError") {
            res.status(400).json({
              success: false,
              message: `${err.message}`,
            });
        } 
        res.status(400).json({
          success: false,
          message: `${err.message}`,
        });
    }
}

// exports.getProductsFail = async (req, res, next) => {
//        return next(new ErrorHandler("Product Not Found",400))
// }

// url=localhost:800/api/v1/product/new
exports.newProduct = catchAsyncError(async (req, res, next) => {

    req.body.user = req.user.id; 
    const products = await Product.create(req.body);
    res.status(201).json({
        success: true,
        products: products
    });
})

//to get a single product
exports.getSingleProduct = async (req, res, next) => {
    try{

        const product = await Product.findById(req.params.id).populate('reviews.user','name email');
    
        if(!product){
           return next(new ErrorHandler("Product Not Found",400))
           
        }
        await new Promise(resolve => setTimeout(resolve,1000));

        res.status(201).json({
            success:true,
    
            product
        })
    }catch(err){
        // if (err instanceof mongoose.CastError) {
        if (err.name === "CastError") {
            res.status(400).json({
              success: false,
              message: `Invalid product ID for cast error`,
            });
          }
    }
}

//update product = /api/v1/product/:id
exports.updateProduct =async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        });
        // console.log("error")
    }
    
    
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    } )
    
    res.status(200).json({
        success:true,
        product
    })
}
exports.deleteProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        });
        // console.log("error")
    }
    await Product.findByIdAndDelete(req.params.id)
    
    
    res.status(200).json({
        success:true, 
        message:"Product is deleted"
    })
    
}
//Create Review - api/v1/review
exports.createReview = catchAsyncError(async (req, res, next) =>{
    const  { productId, rating, comment } = req.body;

    const review = {
        user : req.user.id,
        rating,
        comment
    }

    const product = await Product.findById(productId);
   //finding user review exists
    const isReviewed = product.reviews.find(review => {
       return review.user.toString() == req.user.id.toString()//if equal the user is already reviewed in this product
    })

    if(isReviewed){
        //updating the  review
        product.reviews.forEach(review => {
            if(review.user.toString() == req.user.id.toString()){
                review.comment = comment
                review.rating = rating
            }

        })

    }else{
        //creating the review
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }
    //find the average of the product reviews
    product.ratings = product.reviews.reduce((acc, review) => {
        return review.rating + acc;
    }, 0) / product.reviews.length;
    product.ratings = isNaN(product.ratings)?0:product.ratings;

    await product.save({validateBeforeSave: false});

    res.status(200).json({
        success: true
    })


})

//Get Reviews - api/v1/reviews?id={productId}
exports.getReviews = catchAsyncError(async (req, res, next) =>{
    const product = await Product.findById(req.query.id).populate('reviews.user','name email');

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})

//Delete Review - api/v1/review
exports.deleteReview = catchAsyncError(async (req, res, next) =>{
    const product = await Product.findById(req.query.productId);
    
    //filtering the reviews which does match the deleting review id
    const reviews = product.reviews.filter(review => {
       return review._id.toString() !== req.query.id.toString()
    });
    //number of reviews 
    const numOfReviews = reviews.length;

    //finding the average with the filtered reviews
    let ratings = reviews.reduce((acc, review) => {
        return review.rating + acc;
    }, 0) / reviews.length;
    ratings = isNaN(ratings)?0:ratings;

    //save the product document
    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        numOfReviews,
        ratings
    })
    res.status(200).json({
        success: true
    })


});

// get admin products  - api/v1/admin/products
exports.getAdminProducts = catchAsyncError(async (req, res, next) =>{
    const products = await Product.find();
    res.status(200).send({
        success: true,
        products
    })
});
exports.generateRandomProducts = catchAsyncError(async (count) =>{
    // const products = await Product.find();
    // res.status(200).send({
    //     success: true,
    //     products
    // })
    const randomProducts = await Product.aggregate([{ $sample: { size: count } }]);
    return randomProducts;
});
// async function generateRandomProducts(count) {
//     // Use MongoDB $sample to get random products
//   }