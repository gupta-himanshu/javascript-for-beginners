function addPrice(amount) {
  with(this) {
    price = amount;
  }
}

function book(title, author) {
  this.title = title;
  this.author = author;
  this.price = 0;
  this.addPrice = addPrice;
}
