const Blog = require('../models/blogModel');
const mongoose = require('mongoose');


const blog_get = (req,res)=>{
  Blog.find()
  .then((result)=>{
    res.render('index', { blogs: result, title: 'All blogs' });
  })
  .catch((err)=>{
    console.log(err);
  })
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
   res.render('create',{title: 'Create a blog'});
};



const blog_get_detaills = (req,res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        res.render('detaills',{blog:result,title: 'Detaills'});
    })
    .catch((err)=>{
        console.log(err);
    })
};

const blog_delete = (req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({
            'redirect':'/blogs'
        });
    })
    .catch((err)=>{
        console.log(err);
    })
};

module.exports = {
    blog_delete,
    blog_get,
    blog_get_create,
    blog_post,
    blog_get_detaills
};


