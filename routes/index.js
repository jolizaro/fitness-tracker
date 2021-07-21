const router = require('express').Router();
const htmlRoutes = require('./html/htmlRoutes.js');

router.use('/', htmlRoutes);

module.exports = router;