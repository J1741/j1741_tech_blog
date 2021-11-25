const router = require('express').Router();
const {Post, User} = require('../models');
// const withAuth = require('../utils/auth');

// test homeroute
router.get('/test', (req, res) => {
  res.send("hello there!")
});

// // homeroute to see all posts
// router.get('/', (req, res) => {
//   res.render('all-posts');
// })

// TESTING: homeroute to see all posts
router.get('/', async (req, res) => {
  console.log('** GET / homeroute hit **')
  try {
    const allPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    const posts = allPosts.map((post) => post.get({
      plain: true
    }));

    console.log("** serialized posts:", posts);

    res.render('all-posts', {
      posts,
      // logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
