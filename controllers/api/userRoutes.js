const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("hello from api userRoutes")
});

module.exports = router;