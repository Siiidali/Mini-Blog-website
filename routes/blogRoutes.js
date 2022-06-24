const express = require('express');
const blogControllers = require('../controllers/blogControllers');
const router = express.Router();

// get all blogs in the blog page .
router.get('/',blogControllers.blog_get);

// get the create page .
router.get('/create',blogControllers.blog_get_create);

// add new blog 
router.post('/',blogControllers.blog_post);

// get one blog in the detaills page
router.get('/:id',blogControllers.blog_get_detaills);

// delete one blog from the detaills page 
router.delete('/:id',blogControllers.blog_delete);


module.exports = router ; 

