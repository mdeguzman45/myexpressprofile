/**
 * filename: index.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: May 29, 2021
 */

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* just in case the user types /home. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displaySerivcesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* Get Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page*/
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/* Get Route to perform User logout */
router.get('/logout', indexController.performLogout);

/* Handle submit form on Contact Page */
router.post('/submit-contact-form', function(req, res, next) {

	// log the inputs for now
	console.log("request from submit contact form: ", req.body);

	// redirect visitor to home page
	res.redirect('/');
});

module.exports = router;
