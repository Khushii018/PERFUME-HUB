// const mongoose=require('mongoose');
// const config=require("config");

// const dbgr = require("debug")("development:mongoose");


// mongoose
// .connect(`${config.get("MONGODB_URI")}/perfume-hub`)
// .then(function(){
//     dbgr("connected to db");


    

// })
// .catch(function(err){
//     dbgr(err);
// });

// module.exports= mongoose.connection;
const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

const mongoURI = process.env.MONGODB_URI; // Read directly from environment

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => dbgr("Connected to MongoDB"))
  .catch((err) => dbgr("MongoDB connection error:", err));

module.exports = mongoose.connection;
