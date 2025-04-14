        const express=require('express');
        const app=express();
        const path=require('path');
        const cookieParser=require('cookie-parser');

        const db=require('./config/mongoose-connection');
        const ownersRouter=require('./routes/ownersRouter');
        const usersRouter=require('./routes/usersRouter');
        const productsRouter=require('./routes/productsRouter');
        const idx=require('./routes/index')
        const flash=require('connect-flash');
        const expressSession=require('express-session');


        require("dotenv").config();
        // console.log("JWT SECRET:", process.env.JWT_KEY);

        // console.log("SESSION SECRET:", process.env.EXPRESS_SESSION_SECRET);

        app.use(express.json());
        app.use(express.urlencoded({extended:true}));
        app.use(cookieParser());
        app.use(
            expressSession({
                secret:process.env.EXPRESS_SESSION_SECRET,
                resave:false,
                saveUninitialized:false,
            })
        );
        app.use(flash());
        app.use(express.static(path.join(__dirname,'public')));
        app.set('view engine','ejs');
        app.use('/', idx);


        app.use('/owners',ownersRouter);
        app.use('/users',usersRouter);
        app.use('/products',productsRouter);
        
        // product.find().then(console.log);

        app.listen(2000);