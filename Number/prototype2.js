var myBook = new book("Perl", "Mohtashim");
book.prototype.price = null;
myBook.price = 100;
document.write("Book title is: " + myBook.title + "<br>");
document.write("Book author is: " + myBook.author + "<br>");
document.write("Book price is: " + myBook.price + "<br>");