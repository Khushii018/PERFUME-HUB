const express = require("express");
const router = express();
const productSchema = require('../models/product-model');
const upload = require('../config/multer-config');
const mongoose = require('mongoose');

router.post('/create', upload.single("image") , async (req,res)=>{
   try{ const { name , price , discount , bgcolor , panelcolor , textcolor} = req.body;
        const product = await productSchema.create({
        image : req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,

    })


    // console.log(product.panelcolor); // should log "#f87171"

    req.flash("success" , "Product created successfully");
    res.redirect("/owners/admin")}
    catch(err){
        console.error(err);
        res.status(500).send("Error creating product");
    }
})

module.exports = router;