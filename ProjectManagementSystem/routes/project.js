const express = require('express');
const {ProjectController} = require('../controllers');
const router = express.Router();

router.get('/', ProjectController.getByName);
router.get('/', ProjectController.getAll);
router.post('/', ProjectController.post);
router.put('/', ProjectController.put);
router.delete('/', ProjectController.delete);
router.use('/search-form', ProjectController.getSearchForm);
router.use('/add-form', ProjectController.getPostForm);
router.use('/modify-form', ProjectController.getPutForm);
router.use('/delete-form', ProjectController.getDeleteForm);

module.exports = router;