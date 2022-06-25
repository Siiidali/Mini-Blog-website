const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
require("dotenv").config();

const app = express();
app.set('view engine' , 'ejs');

// connecting to the database
const dbURL = process.env.URLDB;
mongoose.connect(dbURL,{ useNewUrlParser: true , useUnifiedTopology:true}).then((result)=>{
    console.log('Connected to database');
    // listin to requests
    
    app.listen(3000,(()=>{
        console.log("listining to requests ...");
    }));
}).catch((error)=>{
    console.log(error);
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'about us'});
});

app.use('/blogs',blogRoutes);


