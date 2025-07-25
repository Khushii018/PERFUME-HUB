const mongoose=require('mongoose');
const config=require("config");

const dbgr = require("debug")("development:mongoose");


mongoose
.connect(`${config.get("MONGODB_URI")}/perfume-hub`)
.then(function(){
    dbgr("connected to db");


    

})
.catch(function(err){
    dbgr(err);
});

module.exports= mongoose.connection;