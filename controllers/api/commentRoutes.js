const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("hello from api commentRoutes")
});

module.exports = router;