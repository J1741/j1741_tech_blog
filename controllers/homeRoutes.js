const router = require('express').Router();

// test home route
router.get('/', (req, res) => {
  res.send("hello there!")
});

module.exports = router;