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

const b1 = new Book("Harry Potter", "J.K Rowling", 250, true);
books.push(b1);

function displayBooks() {
  const bod = document.getElementById("body");
  bod.textContent = '';

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookInfo = `${book.title} by ${book.author}, ${book.pages} pages, ${book.isRead ? "Read" : "Not read"}`;

    const p = document.createElement("p");
    p.textContent = bookInfo;

    const rem = document.createElement("button");
    rem.textContent = "Remove";
    rem.addEventListener("click", () => {
      remove(book.id);
    });

    const container = document.createElement("div");
    container.appendChild(p);
    container.appendChild(rem);
    container.setAttribute("data-id", book.id);

    bod.appendChild(container);
  }
}
function remove(id){
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1); 
      break; 
    }
  }
  displayBooks()
}
displayBooks();
const newBtn = document.querySelector(".new");
newBtn.addEventListener("click", () => {
  showForm();
});
function showForm() {
  const form = document.createElement("form");
  form.id = "bookForm";
  form.innerHTML = `
    <input type="text" placeholder="Title" id="title" required><br>
    <input type="text" placeholder="Author" id="author" required><br>
    <input type="number" placeholder="Pages" id="pages" required><br>
    <label><input type="checkbox" id="isRead"> Read</label><br>
    <button type="submit">Add Book</button>
  `;

  form.addEventListener("submit", function (e) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const isRead = document.getElementById("isRead").checked;

    createAndStoreBook(title, author, pages, isRead);

    form.remove(); 
    displayBooks();
  });

  document.body.appendChild(form);
}

