// Comments
const { Comment } = require('../models');

const commentData = [
  {
    userId: 1,
    blogId: 1,
    createdAt: '2023-07-21',
    comment: 'Fantastic!',
  },
  {
    userId: 2,
    blogId: 2,
    createdAt: '2023-04-07',
    comment: 'This is great news!',
  },
  {
    userId: 3,
    blogId: 3,
    createdAt: '2023-03-27',
    comment: 'Amazing work!',
  },
  {
    userId: 4,
    blogId: 4,
    createdAt: '2023-01-17',
    comment: 'Keep up the good work!',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
