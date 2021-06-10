/**
 * filename: index.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: June 10, 2021
 */

let express = require('express');
let router = express.Router();

// add entries to our module
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about_me', {title: 'About Me'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', {title: 'Projects'});
}

module.exports.displaySerivcesPage = (req, res, next) => {
    res.render('services', {title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {title: 'Contact Me'});
}