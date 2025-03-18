const books = [
  {
    title: "Pemrograman JavaScript",
    image: "https://via.placeholder.com/150",
    description: "Panduan dasar untuk belajar JavaScript."
  },
  {
    title: "HTML & CSS untuk Pemula",
    image: "https://via.placeholder.com/150",
    description: "Belajar membuat website dengan HTML dan CSS."
  },
  {
    title: "Algoritma dan Struktur Data",
    image: "https://via.placeholder.com/150",
    description: "Dasar-dasar algoritma dan struktur data."
  },
  {
    title: "Pemrograman Python",
    image: "https://via.placeholder.com/150",
    description: "Belajar Python dari dasar hingga mahir."
  }
];

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
