const router = require('express').Router();
const { Blog } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        res.json(blogData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            title: req.body.title,
            createdAt: new Date(),
            userId: req?.session?.userId,
            content: req.body.content,
        });
        res.json(blogData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const blogData = await Blog.update({
            title: req.body.title,
            createdAt: new Date(),
            content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
            userId: req?.session?.userId,
          }
        });
        res.json(blogData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          userId: req?.session?.userId,
        },
      });
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;
