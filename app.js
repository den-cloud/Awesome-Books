var books = [];

var form = document.getElementById("book-form");
function handleForm(event) {
     event.preventDefault();
     } 
    form.addEventListener('submit', handleForm);



function addNewBook() { 
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;

    books.push([title, author]);
    // console.log(books);
    // console.log(books.length);
    renderBookList();
}

function renderBookList() {
    var booksListContainer = document.getElementById('book-list-container');

        var p = document.createElement('P');
        var pText = document.createTextNode(books[books.length - 1]);
        var removeButton = document.createElement('Button');
        var buttonText = document.createTextNode('Remove');
        var line = document.createElement('Hr');
        var totalBooks = books.length;

     
        p.appendChild(pText);
        booksListContainer.appendChild(p);
        removeButton.appendChild(buttonText);
        removeButton.setAttribute('onclick', 'removeBook('+[totalBooks-1]+')');
        booksListContainer.appendChild(removeButton);
        booksListContainer.appendChild(line);

}

function removeBook(num){
    var removedParagraph = document.querySelectorAll('P');
    var removedButton = document.querySelectorAll('Button');
    removedButton[num].remove();
    removedParagraph[num].remove();
    removedParagraph.remove();
    books.splice(num);
    console.log(books);
}

// function checkBookList() {
    
//     var booksListContainer = document.getElementById('book-list-container');
//     if (books.length == 0) {
//         booksListContainer.style.display = 'none';
//         console.log('If');
//     } else {
//         booksListContainer.style.display = 'block';
//         console.log('Else');
//     }
// }

//checkBookList();


