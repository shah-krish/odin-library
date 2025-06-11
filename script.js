const books = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID(); 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead; 
}

function createAndStoreBook(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  books.push(newBook);
  return newBook;
}
