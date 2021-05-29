/**
 * filename: user.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: May 29, 2021
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Placeholder');
});

module.exports = router;
