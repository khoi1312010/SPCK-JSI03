const productList = document.getElementById("productList");
let bookList = [];
const bookTemplate = document.getElementById('book-item');
const renderBookList = () => {
  bookList.forEach(product => {
    const productItem = bookTemplate.content.cloneNode(true);
    productItem.getElementById('book-image').src = product.image;
    productItem.getElementById('book-name').textContent = product.name;
    productItem.getElementById('book-price').textContent = `$${product.price}`;
    productList.appendChild(productItem);
  });
}
const getBooks = () => {
  fetch('https://652177f2a4199548356d3fa6.mockapi.io/products')
    .then(response => response.json())
    .then(data => {
      bookList = data;
      renderBookList()
    });
}
getBooks();

const loginPage = () => {
  window.location = './login.html'
}

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', loginPage);