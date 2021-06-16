let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// create bookController reference
let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* Get Route for book list page - Read Operation */
router.get('/', bookController.displayBookList);

/* Get Route for add page - Create Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing add page - Create Operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* Get Route for edit page - Update Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing edit page - Update Operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* Get Route for delete page - Delete Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;