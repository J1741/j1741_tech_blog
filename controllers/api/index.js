const router = require('express').Router();
const apiTestRoutes = require('./apiTestRoutes');

router.use('/test', apiTestRoutes);

module.exports = router;