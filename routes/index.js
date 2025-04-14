const express=require('express');
const isLoggedin = require("../middlewares/isLoggedIn");
const productModel = require('../models/product-model');
const productRouter=require('./productsRouter'); // adjust path if needed
const userModel = require('../models/user-model');

const router=express.Router();

router.get('/',function(req,res){
    let error=req.flash('error');
    res.render('index',{error, loggedin:false});
});


router.get('/shop', isLoggedin, async function(req, res) {
    try {
        const products = await productModel.find(); // fetch all products
        // console.log(products); 
        let success=req.flash("success");

        
        res.render("shop", { products ,success}); // ✅ pass products to the view
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading shop page");
    }
});

router.get('/cart',isLoggedin,async function(req,res){
    

    let user=await userModel.findOne({email:req.user.email}).populate('cart');
    

    // console.log("Cart data:", JSON.stringify(user.cart, null, 2));
    console.log(user.cart);

    
    res.render('cart',{user});
});

router.get('/addtocart/:productid' , isLoggedin ,async (req,res)=>{
    let user=await userModel.findOne({email:req.user.email});
    
    user.cart.push(req.params.productid);
    await user.save();
    req.flash('success','Product added to cart successfully');
    res.redirect('/shop');

    // res.render('cart');
  });





module.exports=router;