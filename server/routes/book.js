let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { render } = require('../config/app');

// connect tou Book model
let Book = require('../models/book');

// create bookController reference
let bookController = require('../controllers/book');

/* Get Route for book list page - Read Operation */
router.get('/', bookController.displayBookList);

/* Get Route for add page - Create Operation */
router.get('/add', bookController.displayAddPage);

/* POST Route for processing add page - Create Operation */
router.post('/add', bookController.processAddPage);

/* Get Route for edit page - Update Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* POST Route for processing edit page - Update Operation */
router.post('/edit/:id', bookController.processEditPage);

/* Get Route for delete page - Delete Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;