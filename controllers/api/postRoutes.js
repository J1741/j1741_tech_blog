const router = require('express').Router();
const { Post, Comment } = require('../../models');

// test route
router.get('/', (req, res) => {
  res.send("hello from api postRoutes")
});

// get all posts from db
// ** TODO: add withAuth **
router.get('/all', async (req, res) => { 
  console.log('** GET /api/posts/all route hit **')
  try {
    const allPosts = await Post.findAll();

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
})

// get single post from db AND associated comments
router.get('/:id', async (req, res) => {
  console.log('** GET /api/posts/:id route hit **')
  try {
    const singlePost = await Post.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Comment
      }]
    })

    // handle case where post id doesn't exist 
    if (!singlePost) {
      res.status(404).json({ message: 'No post found with this id!'});
      return;
    }    
    
    res.status(200).json(singlePost);

  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post
// ** TODO: add withAuth **
router.post('/new', async (req, res) => {
  console.log('** POST /api/posts/new route hit **')
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id
    })

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;