
// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function myLibrary() {
    const books = JSON.parse(localStorage.getItem('books')) || [];  // load from local storage(if exists)

    // Grab DOM Elements
    const addBookButton = document.querySelector(".add-book-btn");
    const addBooksForm = document.querySelector('.add-books');
    const modal = document.querySelector('.modal')
    const bookshelf = document.querySelector('.bookshelf');  // Wrapper div for all books


    // Add books to booksehlf
    function addBooks(e) {
        e.preventDefault();
        const title = (this.querySelector('[name=title]')).value;
        const author = (this.querySelector('[name=author]')).value;
        const pages = (this.querySelector('[name=pages]')).value;
        const status = (this.querySelector('[name=read]:checked')).value;
        const book = new Book(title, author, pages, status);
        
        books.push(book);
        populateBookshelf(books, bookshelf)
        localStorage.setItem('books', JSON.stringify(books));
        this.reset();
        closeModal();
    }

    // Renders the bookshelf
    function populateBookshelf(books = [], bookshelf) {
        bookshelf.innerHTML = books.map((book, i) => {
            return `
               <div class = "book" data-index=${i} >
                <div class = "book-img"></div>
                <div class = "book-text">
                    <p class = "title">${book.title}</p>
                    <p class = "author"> By: ${book.author}</p>
                    <p class = "pages"> ${book.pages} pages </p>
                </div>
                <div class="book-buttons">
                    <button class = "status ${book.read}"> ${book.read === 'read' ? 'Read' : 'Not Read'}</button>
                    <button class="delete">Remove Book</button>
                </div>
            </div>
        `;
        }).join('');
    }

    // Open form modal
    function openModal() {
        modal.classList.add('open');
        addBooksForm.querySelector('[name=title]').focus();  // Focus cursor in title input
        window.addEventListener('keyup', handleKeyUp);
    }

    // Close the form modal
    function closeModal() {
        addBooksForm.reset();
        modal.classList.remove('open');
        window.removeEventListener('keyup', handleKeyUp);
    }

    // Support for closing modal with escape
    function handleKeyUp(e) {
        if (e.key === 'Escape') return closeModal();
    }

    // Handle closing the modal when clicking outside of the form
    function handleClickOutside(e) {
        if (e.currentTarget === e.target) return closeModal();
    }

    // Toggle if the book has been read/not-read
    function toggleRead(el, book) {
        const index = book.dataset.index;
        if (el.classList.contains('read')) {
            books[index].read = 'not-read';
        }
        else {
            books[index].read = 'read'
        }
        populateBookshelf(books, bookshelf);
        localStorage.setItem('books', JSON.stringify(books));  // save changes
    }

    // Delete book from library/bookshelf
    function deleteBook(book) {
        const index = book.dataset.index;
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));   // Save changes
        populateBookshelf(books, bookshelf);
    }

    // Controls the different events when an individual book is clicked
    function handleBookClick(e) {
        const el = e.target;
        const book = el.closest('.book');

        if (el.classList.contains('status')) {
            toggleRead(el, book);
        }
        else if (el.classList.contains('delete')) {
            deleteBook(book);
        }
        else {
            return;
        }
    }

    // Add Event Listeners
    addBookButton.addEventListener('click', openModal);    // 'Add New Book' Button
    modal.addEventListener('click', handleClickOutside);   // Modal
    addBooksForm.addEventListener('submit', addBooks);     // Form
    bookshelf.addEventListener('click', handleBookClick);  // Bookshelf wrapper
    populateBookshelf(books, bookshelf);
}

myLibrary();