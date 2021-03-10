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

const newBook = document.querySelector('#new-book')
const newBookButton = newBook.querySelector('button')

const generateForm = () => {
  const form = document.createElement('FORM');

  // title
  const labelForTitle = document.createElement('LABEL');
  labelForTitle.setAttribute('for', 'title');

  const titleNode = document.createTextNode('Title: ');

  const textForTitle = document.createElement('INPUT');
  textForTitle.setAttribute('type', 'text');
  textForTitle.setAttribute('id', 'title');
  textForTitle.setAttribute('name', 'title');

  // author
  const labelForAuthor = document.createElement('LABEL');
  labelForAuthor.setAttribute('for', 'author');

  const authorNode = document.createTextNode('Author: ');

  const textForAuthor = document.createElement('INPUT');
  textForAuthor.setAttribute('type', 'text');
  textForAuthor.setAttribute('id', 'author');
  textForAuthor.setAttribute('name', 'author');
  // pages

  // read?



  labelForTitle.appendChild(titleNode);
  form.appendChild(labelForTitle);
  form.appendChild(textForTitle);

  labelForAuthor.appendChild(authorNode);
  form.appendChild(labelForAuthor);
  form.appendChild(textForAuthor);

  newBook.appendChild(form);
};

newBookButton.addEventListener('click', e => {
  console.log(e);
  generateForm();
});