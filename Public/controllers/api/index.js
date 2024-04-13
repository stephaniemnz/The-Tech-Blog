const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const postRoutes = require('./postRoutes'); 


// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/posts', postRoutes);   

module.exports = router;
