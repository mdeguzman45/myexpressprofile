/**
 * filename: businesscontact.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: June 15, 2021
 */

let mongoose = require('mongoose');

let businessContactModel = mongoose.Schema(
    {
        name: String,
        email: String,
        number: Number
    }, 
    {
        "collection" : "contacts" // db.contacts
    });

module.exports = mongoose.model('Contacts', businessContactModel);