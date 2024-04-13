const router = require('express').Router(); 
const { Post } = require('../../models');

//Create a Post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            user_id: req.session.user_id,
            title: req.body.title,  
            body: req.body.body,
            created_at: new Date(),
            
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
}); 

module.exports = router;    