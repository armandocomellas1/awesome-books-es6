//This is the main index.js which will import the modules
import { InterfaceUser } from '../modules/display.js';
import { Library } from '../modules/Library.js';
import { loadColor } from '../modules/color.js';
import { DateTime } from '../modules/luxon.js';

document.addEventListener('DOMContentLoaded', InterfaceUser.displayBooks);

document.getElementById('books__add').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    const countElemt = document.getElementsByTagName('section').length - 1;
    const book = new Library(title, author, countElemt);
    InterfaceUser.addBookToLibrary(book, countElemt);
    const getDataLocalStorage = localStorage.getItem('List');
    if (getDataLocalStorage !== null) {
      const validationStorage = JSON.parse(localStorage.getItem('List'));
      localStorage.setItem('List', JSON.stringify(validationStorage.concat(book)));
    } else {
      const arrSetItem = [book];
      localStorage.setItem('List', JSON.stringify(arrSetItem));
    }

    InterfaceUser.clearFields();
    loadColor();
  }
});

document.getElementById('book_list').addEventListener('click', (e) => {
  InterfaceUser.deleteBook(e.target);
});

document.getElementById('add').addEventListener('click', loadColor);
document.addEventListener('DOMContentLoaded', loadColor);

// Library with Navigation
const loadList = document.getElementById('list');
loadList.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.getElementById('books__add').style.display = 'none';
  document.getElementById('book_list').style.display = 'block';
  document.getElementsByClassName('title_list')[0].style.display = 'flex';
  document.getElementsByClassName('unique')[0].style.display = 'flex';
  document.getElementsByClassName('title_add_book')[0].style.display = 'none';
  document.getElementsByClassName('title_footer')[0].style.display = 'none';
});

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.getElementById('books__add').style.display = 'flex';
  document.getElementById('book_list').style.display = 'none';
  document.getElementsByClassName('title_list')[0].style.display = 'none';
  document.getElementsByClassName('unique')[0].style.display = 'none';
  document.getElementsByClassName('title_add_book')[0].style.display = 'flex';
  document.getElementsByClassName('title_footer')[0].style.display = 'none';
});

const loadContact = document.getElementById('contact');
loadContact.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'flex';
  document.getElementById('books__add').style.display = 'none';
  document.getElementById('book_list').style.display = 'none';
  document.getElementsByClassName('title_add_book')[0].style.display = 'none';
  document.getElementsByClassName('title_list')[0].style.display = 'none';
  document.getElementsByClassName('unique')[0].style.display = 'none';
  document.getElementsByClassName('title_footer')[0].style.display = 'flex';
});

// Date
const nowDate = DateTime.now();
const dateS = { month: 'long', day: 'numeric' };
const showONe = nowDate.setLocale('en-US').toLocaleString(dateS);
document.getElementById('date').innerHTML = `${showONe} ${nowDate.year}, ${nowDate.c.hour}:${nowDate.c.minute}:${nowDate.c.second}`;
