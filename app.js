const newBook = document.querySelector('#new-book');
const newBookButton = newBook.querySelector('button');

const newBookForm = newBook.querySelectorAll('#new-book-form');
newBookForm[0].style.display = 'none';

const newBookFormSubmitBtn = newBookForm[0].querySelector('#new-book-submit-btn');

const displayBooksDiv = document.querySelector('#display-books');
const displayBooksBtn = displayBooksDiv.querySelector('button');

let library = [];


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${read === 'true' ? 'has read' : 'not read yet'}.`;
    };
  }
}

const addBookToLibrary = book => {
  library.push(book);
};

const displayBooks = () => {
  library.forEach((book, idx) => {
    const bookDiv = document.createElement('DIV');
    bookDiv.setAttribute('data-index', idx);

    let info = document.createTextNode(book.info());

    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.appendChild(document.createTextNode('DELETE BOOK'));

    const readBtn = document.createElement('BUTTON');
    readBtn.appendChild(document.createTextNode('TOGGLE READ'));

    bookDiv.appendChild(info);
    bookDiv.appendChild(document.createElement('BR'));
    bookDiv.appendChild(readBtn)
    bookDiv.appendChild(deleteBtn);

    displayBooksDiv.appendChild(bookDiv);

    deleteBtn.addEventListener('click', () => library.splice(idx, 1));
    readBtn.addEventListener('click', () => library[idx].read === 'true' ? library[idx].read = 'false' : library[idx].read = 'true');
  });
};
const showForm = () => {
  if (newBookForm[0].style.display === 'none') {
    newBookForm[0].style.display = 'block';
  }
  else {
    newBookForm[0].style.display = 'none';
  }
};

newBookButton.addEventListener('click', e => {
  console.log(e);
  showForm();
});

newBookFormSubmitBtn.addEventListener('click', e => {
  e.preventDefault();

  let fd = new FormData(document.forms[0]);
  addBookToLibrary(new Book(fd.get('title'),
    fd.get('author'),
    fd.get('pages'),
    fd.get('read'))
  );

  document.forms[0].reset();
});

displayBooksBtn.addEventListener('click', () => displayBooks());