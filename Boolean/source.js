function book(title, publisher, price) {
  this.title = title;
  this.publisher = publisher;
  this.price = price;
}

var newBook = new book("Perl", "Leo Inc", 200);
document.write("newBook.toSource() is: " + newBook.toSource());
