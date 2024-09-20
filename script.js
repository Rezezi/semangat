// Mengambil elemen
const nameForm = document.getElementById('nameForm');
const greeting = document.getElementById('greeting');
const confettiContainer = document.getElementById('confetti');
const nameInput = document.getElementById('nameInput');
const motivationalText = document.getElementById('motivationalText');
const encouragementText = document.getElementById('encouragementText');

// Array motivasi dan semangat
const motivationalQuotes = [
    "Kamu bisa mencapai apapun yang kamu inginkan!",
    "Setiap langkah kecil adalah kemajuan!",
    "Jadilah versi terbaik dari dirimu sendiri!",
    "Kesuksesan tidak datang dari apa yang kamu lakukan sesekali, tetapi dari apa yang kamu lakukan secara konsisten.",
    "Percaya pada dirimu sendiri dan semua yang kamu inginkan akan menjadi milikmu!",
    "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
    "Kegagalan adalah batu loncatan menuju kesuksesan.",
    "Jangan biarkan ketakutan menghalangimu untuk bermimpi.",
    "Tindakan kecil hari ini dapat menghasilkan perubahan besar di masa depan.",
    "Bersyukurlah atas setiap kemajuan, sekecil apapun.",
    "Sukses adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.",
    "Jadilah perubahan yang ingin kamu lihat di dunia.",
    "Kamu memiliki kekuatan untuk mengubah hidupmu.",
    "Ketika satu pintu tertutup, pintu lain akan terbuka.",
    "Selalu ada pelajaran dalam setiap tantangan yang kamu hadapi.",
];


const encouragementMessages = [
    "Pasti lagi cape ya? Tenang, kamu pasti bisa!",
    "Jangan menyerah! Setiap usaha akan terbayar!",
    "Ingat, setiap perjalanan dimulai dengan langkah pertama!",
    "Kamu sudah sejauh ini, jangan berhenti!",
    "Setiap tantangan adalah kesempatan untuk belajar!",
    "Kamu adalah pejuang, dan kamu bisa melewati ini!",
    "Jangan takut untuk gagal; setiap kegagalan mendekatkanmu pada kesuksesan.",
    "Hiduplah dengan semangat, setiap detik berharga!",
    "Ingatlah, kamu tidak sendirian dalam perjalanan ini.",
    "Waktu yang sulit adalah bagian dari proses menuju keberhasilan.",
    "Keberanian bukan berarti tidak takut, tetapi berani melangkah meski takut.",
    "Setiap langkah yang kamu ambil membawa kamu lebih dekat ke impianmu.",
    "Teruslah bergerak maju, meskipun pelan, yang penting adalah kamu tidak berhenti.",
    "Kamu memiliki segalanya yang kamu butuhkan untuk mencapai tujuanmu.",
    "Teruslah berjuang, hasil terbaik sering datang setelah tantangan terberat.",
];


// Fungsi submit nama
function submitName() {
    const name = nameInput.value.trim();      
    
    if (name === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    document.querySelector("#greeting h1").innerText = `Hai, ${name}!`;
    motivationalText.innerText = getRandomQuote();
    encouragementText.innerText = getRandomEncouragement();
    
    nameForm.classList.add('hidden');
    greeting.classList.remove('hidden');
    startConfetti();
}

// Fungsi untuk mendapatkan kutipan acak
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
}

// Fungsi untuk mendapatkan pesan semangat acak
function getRandomEncouragement() {
    const randomIndex = Math.floor(Math.random() * encouragementMessages.length);
    return encouragementMessages[randomIndex];
}

// Fungsi memulai confetti
function startConfetti() {
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        const colors = ['#F87171', '#60A5FA', '#FBBF24', '#34D399', '#A78BFA'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.setProperty('--confetti-color', randomColor);

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 4}s`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiContainer.appendChild(confetti);
    }
}

// Fungsi untuk memulai ulang
function restart() {
    confettiContainer.innerHTML = '';
    confettiContainer.classList.add('hidden');
    greeting.classList.add('hidden');
    nameForm.classList.remove('hidden');
    nameInput.value = '';
}
