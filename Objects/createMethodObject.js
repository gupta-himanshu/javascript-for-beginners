function addPrice(amount) {
  this.price = amount;
}

function book(title, author) {
  this.title = title;
  this.author = author;
  this.addPrice = addPrice;
}
