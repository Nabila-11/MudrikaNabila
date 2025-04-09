// script.js
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert('Anda akan dibawa ke eBook!');
    });
});

 // Membuat elemen menggunakan DOM
 const eventContainer = document.getElementById('eventContainer');

 // Membuat div kontainer acara
 const eventDiv = document.createElement('div');
 eventDiv.className = 'event-container';

 // Membuat elemen h4 untuk judul acara
 const eventTitle = document.createElement('h3');
 eventTitle.textContent = 'Acara Menarik';

 // Membuat elemen img untuk gambar acara
 const eventImage = document.createElement('img');
 eventImage.src = 'p1.jpg'; // Ganti dengan URL gambar yang sesuai
 eventImage.alt = 'Deskripsi Event';
 eventImage.className = 'event-image';

 // Menambahkan event listener pada gambar
 eventImage.addEventListener('click', function() {
     window.open('https://www.instagram.com/p/DGNjEEgPGTg/?igsh=MXZkd29yOWJqYWY5Mw==', '_blank'); // Ganti dengan link yang sesuai
 });

 // Membuat elemen p untuk deskripsi acara
 const eventDescription = document.createElement('p');
 const boldText = document.createElement('b');
 boldText.textContent = 'Pameran Buku Indonesia International Book Fair 2025';
 
 // Menambahkan teks tebal ke dalam elemen p
 eventDescription.appendChild(boldText);

 // Menyusun elemen-elemen ke dalam div kontainer acara
 eventDiv.appendChild(eventTitle);
 eventDiv.appendChild(eventImage);
 eventDiv.appendChild(eventDescription);

 // Menambahkan div kontainer acara ke dalam halaman
 eventContainer.appendChild(eventDiv);

const audio = document.querySelector('audio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', function() {
    audio.muted = false; // Mengaktifkan suara
    audio.play(); // Memutar audio
});

pauseButton.addEventListener('click', function() {
    audio.pause(); // Menjeda audio
});
