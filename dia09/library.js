"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.setBooks = function (books) {
        this.books = books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (mananger) {
        this.manager = mananger;
    };
    Library.prototype.toString = function () {
        var s = '';
        this.books.forEach(function (book) {
            s += book.toString() + "\n------\n";
        });
        return s;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var match = [];
        this.books.forEach(function (book) {
            if (book.getAuthor() === author) {
                match.push(book);
            }
        });
        return match;
    };
    return Library;
}());
exports.Library = Library;
