const router = require('express').Router();
const { Comment } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll()
    res.json(commentData);
  }catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      userId: req?.session?.userId,
      blogId: req.body.blogId,
      createdAt: new Date(),
    });
    res.json(commentData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update({
        comment: req.body.comment,
        blogId: req.body.blogId,
        createdAt: new Date(),
    },
    {
      where: {
        id: req.params.id,
        userId: req?.session?.userId,
      }
    });
    res.json(commentData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          userId: req?.session?.userId,
        },
      });
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;
