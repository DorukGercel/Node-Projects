const express = require('express');
const MainController = require('../controllers/main');
const router = express.Router();

router.get('/', MainController.getMainPage);

module.exports = router;
