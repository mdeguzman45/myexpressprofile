/**
 * filename: book.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: June 10, 2021
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create reference to the model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
            // console.log(BookList);
            res.render('book/list', {
                title: 'Books',
                BookList: bookList,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {
        title: 'Add Book',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.processAddPage = (req, res, next) => {
    // get the book details
    let newBook = Book({
        name: req.body.name,
        author: req.body.author,
        published: req.body.published,
        description: req.body.description,
        price: req.body.price
    });

    // create the book
    Book.create(newBook, (err, Book) => {
        if (err) {
            return console.log(err);
            // res.end(err);
        } else {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, currentBook) => {
        if (err) {
            return console.log(err);
        } else {
            res.render('book/edit', {
                title: 'Edit Book',
                book: currentBook,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Book({
        _id: id,
        name: req.body.name,
        author: req.body.author,
        published: req.body.published,
        description: req.body.description,
        price: req.body.price
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if (err) {
            return console.log(err);
        } else {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if (err) {
            return console.log(err);
        } else {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}