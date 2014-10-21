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
            if (books[i] == book) {
                return false;
            }
        }
 
        books.push(book);
        return true;
    };
 
    libraryClass.prototype.removeBookByTitle = function (title) {
        var len = books.length;
        var newBookArray = [];
       
        // if title is not in books, add it in newBookArray and change flag 
        for (var i=0; i<books.length; i++){
            if (books[i].title !== title){
                newBookArray.push(books[i]);
            }
        }
        
        if (len !== newBookArray.length){
            books = newBookArray;
            return true;
        }
        return false;
    };
 
    //removing all books by the authorName
    libraryClass.prototype.removeBookByAuthor = function (authorName) {
        var flag = false;
        var newBookArray = [];
       
        // if title is not in books, add it in newBookArray and change flag 
        for (var i=0; i<books.length; i++){
            if (books[i].author !== authorName){
                newBookArray.push(books[i]);
                flag = true;
            }
        }
        
        if (flag){
            books = newBookArray;
        }
        return flag;
    };
 
    libraryClass.prototype.getRandomBook = function () {
        var len = books.length;
        if (len !== 0) {
            //var num = Math.random();
            var randomNum = Math.floor(Math.random() * len);
            return books[randomNum];
        }
        return null;
    };
 
    libraryClass.prototype.getBookBytitle = function (title) {
        var matchedTitles = [];
        for (var i = 0; i < books.length; i++) {
            if (books[i].title.indexOf(title) > -1) {
                matchedTitles.push(books[i].title)
            }
           
        }
        return matchedTitles;
    };

    libraryClass.prototype.getBooksByAuthor = function(authorName){
        var matchedAuthorBooks = [];
        for (var i=0; i<books.length; i++){
            if (books[i].author.indexOf(authorName) > -1){
                matchedAuthorBooks.push(books[i].title);
            }
        }
        return matchedAuthorBooks;
    };

    libraryClass.prototype.addBooks = function(newBooks) {
        var doesBookExist;
        var num = 0;

        for (var i=0; i<newBooks.length; i++) {
            doesBookExist = this.addBook(newBooks[i]);
            if (doesBookExist){
                num += 1;
            }
        }
        return num;
    };


 



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
