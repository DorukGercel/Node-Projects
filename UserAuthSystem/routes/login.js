const express = require('express');
const {LoginController} = require('../controllers');
const router = express.Router();

router.get('/', LoginController.getPage);
router.post('/', LoginController.postForm);

module.exports = router;
