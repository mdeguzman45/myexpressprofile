/**
 * filename: businesscontact.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: June 15, 2021
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create business contacts controller reference
let contactsController = require('../controllers/businesscontact');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* Get Route for contact list page - Read Operation */
router.get('/', requireAuth, contactsController.displayBusinessContactList);

/* Get Route for add page - Create Operation */
router.get('/add', requireAuth, contactsController.displayAddPage);

/* POST Route for processing add page - Create Operation */
router.post('/add', requireAuth, contactsController.processAddPage);

/* Get Route for edit page - Update Operation */
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

/* POST Route for processing edit page - Update Operation */
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

/* Get Route for delete page - Delete Operation */
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;