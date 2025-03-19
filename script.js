// Fungsi untuk menampilkan buku
function displayBooks() {
  const bookCollection = document.getElementById("bookCollection");
  bookCollection.innerHTML = "";

  books.forEach(book => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    bookItem.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>${book.description}</p>
    `;

    bookCollection.appendChild(bookItem);
  });
}

// Fungsi untuk mencari buku
function searchBooks() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchInput) || 
    book.description.toLowerCase().includes(searchInput)
  );
  
  const bookCollection = document.getElementById("bookCollection");
  bookCollection.innerHTML = "";

  filteredBooks.forEach(book => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    bookItem.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>${book.description}</p>
    `;

    bookCollection.appendChild(bookItem);
  });
}

// Panggil fungsi displayBooks saat halaman dimuat
window.onload = displayBooks;

window.onload = function() {
    // Tambahkan pesan selamat datang
    const welcomeDiv = document.getElementById('welcomeMessage');
    welcomeDiv.innerHTML = "Selamat Datang di Website Kami!";
};
