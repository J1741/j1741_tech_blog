const router = require('express').Router();

// test home route
router.get('/', (req, res) => {
  res.send("hello there!")
});

// test handlebars route
router.get('/hbr', (req, res) => {
  res.render('all-posts');
})

module.exports = router;