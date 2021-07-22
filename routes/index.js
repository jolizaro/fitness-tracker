const router = require('express').Router();
const htmlRoutes = require('./html/htmlRoutes.js');
const apiRoutes = require('./api/apiRoutes.js');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;