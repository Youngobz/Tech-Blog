const { Blog, Comment, User } = require('../../models');
const { col } = require('sequelize');

const getAllBlogPost = async () => {
    const blogData = await Blog.findAll({
        attributes: ['id', 'title', 'createdAt', 'content', [col('user.name'), 'userName']],
        include: { model: User, as: 'user' },
        raw: true,
    });
    const blogDataList = blogData.map((blogDetail) => {
        blogDetail.createdAt = blogDetail.createdAt.toLocaleDateString().split('-').join(' ');
        return blogDetail;
    });
    return blogDataList;
};

const getBlogByUserId = async (id) => {
    let blogList = await Blog.findAll({
        attributes: ['id', 'title', 'createdAt', 'content', [col('user.name'), 'userName']],
        where: {
            user_id: id,
        },
        include: { model: User, as: 'user' },
        raw: true,
    });

    blogList = blogList.map((blogDetail) => {
        blogDetail.createdAt = blogDetail.createdAt.toLocaleDateString().split('-').join(' ');
        return blogDetail;
    });
    return blogList;
};

const getBlogById = async (id) => {
    const blogData = await Blog.findOne({
        attributes: ['id', 'title', 'createdAt', 'content', [col('user.name'), 'userName']],
        where: {
            id: id,
        },
        include: { model: User, as: 'user' },
        raw: true,
    });

    let blogDetail = blogData;
    blogDetail.createdAt = blogDetail.createdAt.toLocaleDateString().split('-').join(' ');

    return blogDetail;
};

const getCommentByBlogId = async (blogId) => {
    let commentList = await Comment.findAll({
        attributes: ['id', 'comment', 'createdAt', [col('user.name'), 'userName'], [col('user.id'), 'userId']],
        where: {
          blog_id: blogId,
        },
        include: { model: User, as: 'user' },
        raw: true,
        order: [['id', 'DESC']],
    });
    commentList = commentList.map((commentData) => {
        commentData.createdAt = commentData.createdAt.toLocaleDateString().split('-').join(' ');
        return commentData;
    });
    return commentList;
}

module.exports = {
    getAllBlogPost,
    getBlogById,
    getCommentByBlogId,
    getBlogByUserId,
}