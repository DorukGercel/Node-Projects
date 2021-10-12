const express = require('express');
const {RegisterController} = require('../controllers');
const router = express.Router();

router.get('/', RegisterController.getPage);
router.post('/', RegisterController.postForm);

module.exports = router;
