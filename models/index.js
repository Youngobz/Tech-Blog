const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

User.hasMany(Blog, {
  foreignKey: 'userId',
  onDelete: 'Cascade',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'Cascade',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Blog.belongsTo(User, {
  foreignKey: 'userId',
});

Blog.hasMany(Comment, {
  foreignKey: 'blogId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blogId',
});

module.exports = { User, Blog, Comment };
