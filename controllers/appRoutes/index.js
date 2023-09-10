const router = require('express').Router();
const {
    getBlogById,
    getAllBlogPost,
    getBlogByUserId,
    getCommentByBlogId,
} = require('./helper');


router.get('/', async (req, res) => {
    const blogDataList = await getAllBlogPost();
    const isLoggedin = req?.session?.userId > 0;
    res.render('home', { blogDataList, heading: 'The Tech Blog', isLoggedin });
});

router.get('/blog/add', checkIsNotAuthenticated, async (req, res) => {
    const blogData = {
        title: '',
        content: ''
    };
    const isLoggedin = req?.session?.userId > 0;
    res.render('create-post', {blogData, isUpdation: false, isLoggedin});
});

router.get('/blog/update/:id', checkIsNotAuthenticated, async (req, res) => {
    const blogData = await getBlogById(req.params.id);
    const isLoggedin = req?.session?.userId > 0;
    res.render('create-post', {blogData, isUpdation: true, isLoggedin});
});

router.get('/blog/:id', async (req, res) => {
    const blogData = await getBlogById(req.params.id);
    const commentList = await getCommentByBlogId(req.params.id)
    const isLoggedin = req?.session?.userId > 0;
    res.render('blog', { blogData, commentList, isLoggedin });
});

router.get('/signup', checkIsAuthenticated, (req, res) => {
    res.render('signup-form');
});

router.get('/login', checkIsAuthenticated, (req, res) => {
    res.render('login-form');
});

router.get('/dashboard', checkIsNotAuthenticated, async (req, res) => {
    const userId = req?.session?.userId;
    const blogDataList = await getBlogByUserId(userId);
    const isLoggedin = userId > 0;
    const heading = 'Your Dashboard';
    res.render('dashboard', { blogDataList, heading, isLoggedin });
});


function checkIsAuthenticated(req, res, next) {
    if (req?.session?.userId) {
        res.redirect("/dashboard");
    } else {
        next();
    }
}

function checkIsNotAuthenticated(req, res, next) {
    if (!req?.session?.userId) {
        res.redirect("/login");
    } else {
        next();
    }
}

module.exports = router;