const router = require('express').Router();

// test home route
router.get('/', (req, res) => {
  res.send("hello from dashboardRoutes")
});

module.exports = router;