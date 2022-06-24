const Blog = require('../models/blogModel');
const mongoose = require('mongoose');
const blog_get = (req,res)=>{
    res.send('karim');
};

const blog_post = (req,res)=>{
    const blog = new Blog(req.body);
    console.log(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    })
};

const blog_get_create = (req,res)=>{
    res.send('mourad');
};

const blog_get_detaills = (req,res)=>{
    res.send('momo');
};

const blog_delete = (req,res)=>{
    res.send('sofiane');
};

module.exports = {
    blog_delete,
    blog_get,
    blog_get_create,
    blog_post,
    blog_get_detaills
};


