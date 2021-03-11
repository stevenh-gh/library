let library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
      return `${this.title} by ${this.author}, ${this.pages}, ${read ? 'has read' : 'not read yet'}.`;
    };
  }
}

const addBookToLibrary = book => {
  library.push(book);
};

const displayBooks = () => {
  for (book in library) {
    console.log(book.info);
  }
};

const newBook = document.querySelector('#new-book');
const newBookButton = newBook.querySelector('button');
const newBookForm = document.querySelector('#new-book-form');
newBookForm.style.display = 'none';

const showForm = () => {
  if (newBookForm.style.display === 'none') {
    newBookForm.style.display = 'block';
  }
  else {
    newBookForm.style.display = 'none';
  }
};

newBookButton.addEventListener('click', e => {
  console.log(e);
  showForm();
});