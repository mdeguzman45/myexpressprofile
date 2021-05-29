/**
 * filename: index.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: May 29, 2021
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'Home'
	});
});

/* just in case the user types /home. */
router.get('/home', function(req, res, next) {
	res.render('index', { 
		title: 'Home'
	});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
	res.render('index', { 
		title: 'About Me'
	});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
	res.render('index', { 
		title: 'Projects'
	});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
	res.render('index', { 
		title: 'Services'
	});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
	res.render('index', { 
		title: 'Contact Me'
	});
});

module.exports = router;
