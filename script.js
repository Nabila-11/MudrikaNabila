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

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function acceptCookie() {
  setCookie('cookieConsent', 'accepted', 365);
  document.getElementById('cookie-banner').style.display = 'none';
}

window.onload = function() {
  if (!getCookie('cookieConsent')) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
};

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function acceptCookie() {
  setCookie('cookieConsent', 'accepted', 365);
  setCookie('analytics', 'yes', 365);
  setCookie('ads', 'yes', 365);
  document.getElementById('cookie-banner').classList.add('hide');
}
function openCookieModal() {
  document.getElementById('cookie-modal').classList.add('active');
  // Set checkbox sesuai cookie
  document.getElementById('analytics-cookie').checked = getCookie('analytics') !== 'no';
  document.getElementById('ads-cookie').checked = getCookie('ads') !== 'no';
}
function closeCookieModal() {
  document.getElementById('cookie-modal').classList.remove('active');
}
document.getElementById('cookieForm').onsubmit = function(e) {
  e.preventDefault();
  setCookie('cookieConsent', 'custom', 365);
  setCookie('analytics', document.getElementById('analytics-cookie').checked ? 'yes' : 'no', 365);
  setCookie('ads', document.getElementById('ads-cookie').checked ? 'yes' : 'no', 365);
  closeCookieModal();
  document.getElementById('cookie-banner').classList.add('hide');
};
window.onload = function() {
  if (!getCookie('cookieConsent')) {
    document.getElementById('cookie-banner').classList.remove('hide');
  } else {
    document.getElementById('cookie-banner').classList.add('hide');
  }
};
// Tutup modal jika klik di luar modal
document.getElementById('cookie-modal').onclick = function(e) {
  if (e.target === this) closeCookieModal();
};