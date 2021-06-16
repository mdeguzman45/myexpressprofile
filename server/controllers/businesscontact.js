/**
 * filename: businesscontact.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: June 15, 2021
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to Contacts model
let contacts = require('../models/businesscontact');

module.exports.displayBusinessContactList = (req, res, next) => {
    contacts.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('businesscontact/list', {
                title: 'Business Contact',
                ContactList: contactList,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    }).sort('name'); // sort the list by name
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('businesscontact/add', {
        title: 'Add Business Contact',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.processAddPage = (req, res, next) => {
    // get the contact details
    let newContact = contacts({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    // create the contact
    contacts.create(newContact, (err, contacts) => {
        if (err) {
            return console.log(err);
        } else {
            // refresh the contact list
            res.redirect('/business-contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contacts.findById(id, (err, currentContact) => {
        if (err) {
            return console.log(err);
        } else {
            res.render('businesscontact/edit', {
                title: 'Edit Business Contact',
                contact: currentContact,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    // get the updated contact details
    let newContact = contacts({
        _id: id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    contacts.updateOne({_id: id}, newContact, (err) => {
        if (err) {
            return console.log(err);
        } else {
            // refresh the contact list
            res.redirect('/business-contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contacts.remove({_id: id}, (err) => {
        if (err) {
            return console.log(err);
        } else {
            // refresh the contact list
            res.redirect('/business-contact-list');
        }
    });
}