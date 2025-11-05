// ====================================================================
// 1. ELEMEN DOM (Document Object Model)
// ====================================================================

const modeSelection = document.getElementById('mode-selection');
const mainContainer = document.getElementById('main-container');
const quiz = document.getElementById('quiz');

const questionEl = document.getElementById('question');
const questionNumberEl = document.getElementById('question-number');
const timerEl = document.getElementById('timer');
const answerEls = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const questionListEl = document.getElementById('question-list');
const sidebarEl = document.getElementById('sidebar');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text'); // Untuk opsi E

// ====================================================================
// 2. VARIABEL GLOBAL
// ====================================================================

let currentQuiz = 0; // Indeks soal yang sedang ditampilkan
let score = 0;
let userAnswers = new Array(quizData.length).fill(null); // Menyimpan jawaban pengguna
let currentMode = null; // 'peserta' atau 'penjelasan'
let timerInterval; // Untuk mengontrol timer
const TIME_LIMIT = 30; // Batas waktu per soal dalam Mode Peserta

// ====================================================================
// 3. FUNGSI UTAMA
// ====================================================================

/**
 * Memuat soal berdasarkan indeks (currentQuiz)
 */
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    const totalQuestions = quizData.length;

    // 1. Update teks soal dan nomor
    questionNumberEl.innerText = `Soal ${currentQuiz + 1}/${totalQuestions}`;
    questionEl.innerText = currentQuizData.question;

    // 2. Update pilihan jawaban
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e || 'N/A'; // Opsi E mungkin tidak selalu ada

    // 3. Muat kembali jawaban pengguna jika sudah pernah diisi
    const savedAnswer = userAnswers[currentQuiz];
    if (savedAnswer) {
        document.getElementById(savedAnswer).checked = true;
    }

    // 4. Update tampilan tombol next/prev (hanya di Mode Penjelasan)
    if (currentMode === 'penjelasan') {
        prevBtn.style.display = currentQuiz > 0 ? 'inline-block' : 'none';
        nextBtn.style.display = currentQuiz < totalQuestions - 1 ? 'inline-block' : 'none';
        submitBtn.style.display = 'inline-block'; // Tombol Submit tetap ada
    } else {
        // Di Mode Peserta, navigasi hanya melalui timer/submit
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }

    updateQuestionListStatus();

    // Reset timer jika Mode Peserta
    if (currentMode === 'peserta') {
        resetTimer();
    }
}

/**
 * Menghilangkan pilihan radio yang sudah tercentang
 */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

/**
 * Mendapatkan ID jawaban yang dipilih pengguna ('a', 'b', 'c', d', 'e', atau undefined)
 */
function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

/**
 * Mengatur dan menjalankan Timer (Mode Peserta)
 */
function resetTimer() {
    clearInterval(timerInterval);
    let timeLeft = TIME_LIMIT;
    timerEl.innerText = `Waktu: ${timeLeft}`;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = `Waktu: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Lanjutkan otomatis ke soal berikutnya
            processAnswer(true); 
        }
    }, 1000);
}

/**
 * Memproses jawaban pengguna dan melanjutkan ke soal berikutnya
 * @param {boolean} autoAdvance - True jika lanjut otomatis karena waktu habis
 */
function processAnswer(autoAdvance = false) {
    const answer = getSelected();
    
    // Simpan jawaban, meskipun jawaban itu null (untuk soal yang tidak dijawab)
    userAnswers[currentQuiz] = answer; 

    // Stop timer
    clearInterval(timerInterval);

    // Lanjut ke soal berikutnya jika bukan soal terakhir
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // Jika sudah soal terakhir, tampilkan hasil
        showResults();
    }
}

/**
 * Menampilkan hasil ujian
 */
function showResults() {
    // Hitung skor akhir
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });

    // Tampilkan hasil
    quiz.innerHTML = `
        <h2>Anda menyelesaikan ujian!</h2>
        <p>Anda menjawab ${score}/${quizData.length} soal dengan benar.</p>
        <button onclick="location.reload()">Ulangi Ujian</button>
    `;
    
    // Sembunyikan sidebar di halaman hasil
    sidebarEl.style.display = 'none';
}

/**
 * Membuat daftar soal untuk navigasi
 */
function createQuestionList() {
    questionListEl.innerHTML = ''; // Bersihkan daftar lama
    quizData.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('q-nav-btn');
        button.setAttribute('data-index', index);
        button.innerText = `Soal ${index + 1}`;
        
        button.addEventListener('click', () => {
            // Simpan jawaban soal saat ini sebelum berpindah
            userAnswers[currentQuiz] = getSelected();
            currentQuiz = index;
            loadQuiz();
        });
        questionListEl.appendChild(button);
    });
}

/**
 * Mengupdate warna tombol di daftar soal (sidebar)
 */
function updateQuestionListStatus() {
    const navButtons = document.querySelectorAll('.q-nav-btn');
    navButtons.forEach((btn, index) => {
        btn.classList.remove('active', 'answered');

        if (userAnswers[index] !== null) {
            btn.classList.add('answered'); // Soal sudah diisi
        }

        if (index === currentQuiz) {
            btn.classList.add('active'); // Soal yang sedang dilihat
        }
    });
}

// ====================================================================
// 4. SETUP MODE
// ====================================================================

function setMode(mode) {
    currentMode = mode;
    modeSelection.style.display = 'none';
    mainContainer.style.display = 'flex'; // Tampilkan konten utama

    createQuestionList(); // Buat daftar soal

    if (mode === 'peserta') {
        // Mode Peserta: Timer aktif, Navigasi disembunyikan
        timerEl.style.display = 'block';
        sidebarEl.style.display = 'none';
        submitBtn.innerText = 'Lanjut';
        loadQuiz();
    } else if (mode === 'penjelasan') {
        // Mode Penjelasan: Timer nonaktif, Navigasi penuh
        timerEl.style.display = 'none';
        sidebarEl.style.display = 'block';
        
        // Tampilkan tombol navigasi next/prev
        nextBtn.style.display = 'inline-block';
        prevBtn.style.display = 'inline-block';
        submitBtn.innerText = 'Simpan Jawaban';
        
        loadQuiz();
    }
}

// ====================================================================
// 5. EVENT LISTENERS
// ====================================================================

// 5.1 Mode Selection
document.getElementById('mode-peserta').addEventListener('click', () => setMode('peserta'));
document.getElementById('mode-penjelasan').addEventListener('click', () => setMode('penjelasan'));

// 5.2 Tombol Submit
submitBtn.addEventListener('click', () => {
    // Simpan jawaban saat ini
    const answer = getSelected();
    userAnswers[currentQuiz] = answer;
    
    if (currentMode === 'peserta') {
        // Di mode peserta, tombol submit berfungsi untuk melanjutkan soal
        processAnswer(false);
    } else {
        // Di mode penjelasan, tombol submit hanya untuk menyimpan & update status
        updateQuestionListStatus();
    }
});

// 5.3 Tombol Navigasi (Hanya untuk Mode Penjelasan)
nextBtn.addEventListener('click', () => {
    if (currentQuiz < quizData.length - 1) {
        // Simpan jawaban soal saat ini sebelum berpindah
        userAnswers[currentQuiz] = getSelected();
        currentQuiz++;
        loadQuiz();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuiz > 0) {
        // Simpan jawaban soal saat ini sebelum berpindah
        userAnswers[currentQuiz] = getSelected();
        currentQuiz--;
        loadQuiz();
    }
});