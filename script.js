// script.js
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert('Anda akan dibawa ke eBook!');
    });
});

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