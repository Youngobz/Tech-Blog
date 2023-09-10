const router = require('express').Router();
const userController = require('./user-controller');
const blogController = require('./blog-controller');
const commentController = require('./comment-controller');

router.use('/user', userController);
router.use('/blog', blogController);
router.use('/comment', commentController);

module.exports = router;
