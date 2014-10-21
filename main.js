var Library = (function () {
    var instance;
    var books = [];
 
    var libraryClass = function () {
        if (instance) {
            return instance;
        }
 
        instance = this;
    };
 
    //libraryClass.prototype.getBooksLength = function () {
    //    if (books.length === 0) {
    //        return false;
    //    }
    //}
 
    libraryClass.prototype.addBook = function (book) {
        // if book is in books
        for (var i = 0; i < books.length; i++) {
            if (books[i] === book) {
                return false;
            }
        }
 
        books.push(book);
        return true;
    };
 
    libraryClass.prototype.removeBookBytitle = function (title) {
        if (books.length === 0) {
            return false;
        }
       
        // if title is in books, remove the book
        for (var i = 0; i < books.length; i++) {
            if (books[i].title === title) {
                books.splice(i, 1);
                return true;
            }
        }
 
        // title is not in the books
        return false;
    };
 
    //removing all books by the authorName
    libraryClass.prototype.removeBookByAuthor = function (authorName) {
        var numOfBooks = 0;
        for (var i = 0; i < books.length; i++) {
            if (books[i].author === authorName) {
                books.splice(i, 1);
                numOfBooks += 1;
            }
        }
 
        if (numOfBooks > 0) {
            return true;
        }
        return false;
    }
 
    libraryClass.prototype.getRandomBook = function () {
        var len = books.length;
        if (len !== 0) {
            //var num = Math.random();
            var randomNum = Math.floor(Math.random() * len);
            return books[randomNum];
        }
        return null;
    }
 
    libraryClass.prototype.getBookBytitle = function (title) {
        var str = '';
        for (var i = 0; i < books.length; i++) {
            if (books[i].title.indexOf(title) > -1) {
 
            }
           
        }
        if (str) {
            return str;
        }
        return false;
    }
 
    libraryClass.prototype.bookList = function () {
        return books;
    };
  
 
    return libraryClass;
 
})();
 
var Book = function (title, author, numberOfPages, publishDate) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.publishDate = publishDate;
 
}
 
var lib = new Library();
var book1 = new Book('Divergent', 'Veronica', 200, '13-13-13');
var book2 = new Book('LOTR', 'Tolken', 1000, '12-12-12')
lib.addBook(book1)
lib.addBook(book2)
