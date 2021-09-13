const books = [];

const form = document.getElementById('book-form');
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

function renderBookList() {
  const booksListContainer = document.getElementById('book-list-container');

  const p = document.createElement('P');
  const pText = document.createTextNode(books[books.length - 1]);
  const removeButton = document.createElement('Button');
  const buttonText = document.createTextNode('Remove');
  const line = document.createElement('Hr');
  const totalBooks = books.length;

  p.appendChild(pText);
  booksListContainer.appendChild(p);
  removeButton.appendChild(buttonText);
  removeButton.setAttribute('onclick', `removeBook(${[totalBooks - 1]})`);
  booksListContainer.appendChild(removeButton);
  booksListContainer.appendChild(line);
}

function addNewBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  books.push([title, author]);
  renderBookList();
}

function removeBook(num) {
  const removedParagraph = document.querySelectorAll('P');
  const removedButton = document.querySelectorAll('Button');
  removedButton[num].remove();
  removedParagraph[num].remove();
  books.splice(num);
}