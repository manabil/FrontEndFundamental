import axios from 'axios';

function main() {
  const baseUrl = 'https://books-api.dicoding.dev';
  const request = axios.create({
    baseURL: 'https://books-api.dicoding.dev',
    headers: {'X-Auth-Token': '12345'},
  });

  const getBook = async () => {
    // XMR Request
    // const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   if (responseJson.error) {
    //     showResponseMessage(responseJson.message);
    //   } else {
    //     renderAllBooks(responseJson.books);
    //   }
    // };
    // xhr.onerror = function () {
    //   showResponseMessage();
    // };
    // xhr.open('GET', `${baseUrl}/list`);
    // xhr.send();
    //
    // Fetch Request
    // fetch(`${baseUrl}/list`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     if (responseJson.error) {
    //       showResponseMessage(responseJson.message);
    //     } else {
    //       renderAllBooks(responseJson.books);
    //     }
    //   })
    //   .catch((error) => {
    //     showResponseMessage(error);
    //   });
    // Async Request
    try {
      const response = await request.get('/list');
      if (response.data.error) {
        showResponseMessage(response.data.message);
      } else {
        renderAllBooks(response.data.books);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const insertBook = async (book) => {
    // XMR Request
    // const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };
    // xhr.onerror = function () {
    //   showResponseMessage();
    // };
    // xhr.open('POST', `${baseUrl}/add`);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');
    // xhr.send(JSON.stringify(book));
    // Fetch Request
    // fetch(`${baseUrl}/add`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Auth-Token': '12345',
    //   },
    //   body: JSON.stringify(book),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     showResponseMessage(responseJson.message);
    //     getBook();
    //   })
    //   .catch((error) => {
    //     showResponseMessage(error);
    //   });
    // Async Request
    try {
      const response = await request.post('/add', book);
      console.log(response);
      showResponseMessage(response.data.message);
      getBook();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const updateBook = async (book) => {
    // XMR Request
    // const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };
    // xhr.onerror = function () {
    //   showResponseMessage();
    // };
    // xhr.open('PUT', `${baseUrl}/edit/${book.id}`);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');
    // xhr.send(JSON.stringify(book));
    // Fetch Request
    // fetch(`${baseUrl}/edit/${book.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Auth-Token': '12345',
    //   },
    //   body: JSON.stringify(book),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     showResponseMessage(responseJson.message);
    //     getBook();
    //   })
    //   .catch((error) => {
    //     showResponseMessage(error);
    //   });
    // Async Request
    try {
      const response = await request.put(`/edit/${book.id}`, book);
      showResponseMessage(response.data.message);
      getBook();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const removeBook = async (bookId) => {
    // XMR Request
    // const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // };
    // xhr.onerror = function () {
    //   showResponseMessage();
    // };
    // xhr.open('DELETE', `${baseUrl}/delete/${bookId}`);
    // xhr.setRequestHeader('X-Auth-Token', '12345');
    // xhr.send();
    // Fetch Request
    // fetch(`${baseUrl}/delete/${bookId}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'X-Auth-Token': '12345',
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     showResponseMessage(responseJson.message);
    //     getBook();
    //   })
    //   .catch((error) => {
    //     showResponseMessage(error);
    //   });
    // Async Request
    try {
      const response = await request.delete(`/delete/${bookId}`);
      showResponseMessage(response.data.message);
      getBook();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector('#listBook');
    listBookElement.innerHTML = '';

    books.forEach((book) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll('.button-delete');
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const bookId = event.target.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const inputBookId = document.querySelector('#inputBookId');
    const inputBookTitle = document.querySelector('#inputBookTitle');
    const inputBookAuthor = document.querySelector('#inputBookAuthor');
    const buttonSave = document.querySelector('#buttonSave');
    const buttonUpdate = document.querySelector('#buttonUpdate');

    buttonSave.addEventListener('click', function() {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      insertBook(book);
    });

    buttonUpdate.addEventListener('click', function() {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      updateBook(book);
    });
    getBook();
  });
}

export default main;