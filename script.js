// ====================================================================
// 1. ELEMEN DOM & SETUP
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

// Tambahkan elemen Explanation di sini agar mudah diakses
const explanationEl = document.createElement('div');
explanationEl.id = 'explanation';
explanationEl.classList.add('explanation-box');

// Masukkan elemen Explanation ke DOM setelah loading
document.addEventListener('DOMContentLoaded', () => {
    // Sisipkan explanation box sebelum tombol navigasi
    const navigationButtons = document.querySelector('.navigation-buttons');
    if (quiz && navigationButtons) {
        quiz.insertBefore(explanationEl, navigationButtons); 
    }
});


let currentQuiz = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let currentMode = null;
let timerInterval;
const TIME_LIMIT = 30;

// ====================================================================
// 2. FUNGSI UTAMA
// ====================================================================

/**
 * Memuat soal berdasarkan indeks (currentQuiz)
 */
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    const totalQuestions = quizData.length;

    questionNumberEl.innerText = `Soal ${currentQuiz + 1}/${totalQuestions}`;
    questionEl.innerText = currentQuizData.question;

    // Mapping pilihan jawaban
    document.getElementById('a_text').innerText = currentQuizData.a;
    document.getElementById('b_text').innerText = currentQuizData.b;
    document.getElementById('c_text').innerText = currentQuizData.c;
    document.getElementById('d_text').innerText = currentQuizData.d;
    document.getElementById('e_text').innerText = currentQuizData.e || 'N/A';
    
    // Muat kembali jawaban pengguna jika ada
    const savedAnswer = userAnswers[currentQuiz];
    if (savedAnswer) {
        document.getElementById(savedAnswer).checked = true;
    }

    // Hapus semua highlight dan sembunyikan penjelasan
    document.querySelectorAll('.answer-list li').forEach(li => {
        li.classList.remove('correct-answer', 'incorrect-answer');
    });
    explanationEl.style.display = 'none';

    // Penyesuaian berdasarkan Mode
    if (currentMode === 'penjelasan') {
        timerEl.style.display = 'none';
        sidebarEl.style.display = 'block';
        
        // Navigasi
        prevBtn.style.display = currentQuiz > 0 ? 'inline-block' : 'none';
        nextBtn.style.display = currentQuiz < totalQuestions - 1 ? 'inline-block' : 'none';
        submitBtn.style.display = 'inline-block'; // Tombol untuk menyimpan
        submitBtn.innerText = 'Simpan Jawaban';
        
        // Tampilkan kunci jawaban dan penjelasan instan
        displayCorrectAnswer();
        explanationEl.innerHTML = `<strong>Pembahasan:</strong> ${currentQuizData.explanation}`;
        explanationEl.style.display = 'block';
    } else { // Mode Peserta
        timerEl.style.display = 'block';
        sidebarEl.style.display = 'none';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        submitBtn.innerText = 'Lanjut';
        
        resetTimer();
    }

    updateQuestionListStatus();
}

/** Menghilangkan pilihan radio yang sudah tercentang */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

/** Mendapatkan ID jawaban yang dipilih pengguna */
function getSelected() {
    let answer = null;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

/** Mengatur dan menjalankan Timer (Mode Peserta) */
function resetTimer() {
    clearInterval(timerInterval);
    let timeLeft = TIME_LIMIT;
    timerEl.innerText = `Waktu: ${timeLeft}`;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = `Waktu: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            processAnswer(true); // Lanjut otomatis karena waktu habis
        }
    }, 1000);
}

/** Menampilkan kunci jawaban (hanya untuk Mode Penjelasan) */
function displayCorrectAnswer() {
    // Hapus highlight sebelumnya
    document.querySelectorAll('.answer-list li').forEach(li => {
        li.classList.remove('correct-answer', 'incorrect-answer');
    });

    const currentQuizData = quizData[currentQuiz];
    const correctKey = currentQuizData.correct;
    
    // Temukan elemen LI yang berisi jawaban yang benar
    const correctLabel = document.querySelector(`label[for="${correctKey}"]`);
    if (correctLabel) {
        correctLabel.closest('li').classList.add('correct-answer');
    }

    // Tandai jawaban pengguna jika sudah diisi dan salah
    const userAnswer = userAnswers[currentQuiz];
    if (userAnswer && userAnswer !== correctKey) {
        const userLabel = document.querySelector(`label[for="${userAnswer}"]`);
        if (userLabel) {
            userLabel.closest('li').classList.add('incorrect-answer');
        }
    }
}

/** Memproses jawaban pengguna dan melanjutkan ke soal berikutnya (Mode Peserta) */
function processAnswer(autoAdvance = false) {
    clearInterval(timerInterval);
    const answer = getSelected();
    userAnswers[currentQuiz] = answer; 
    
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

/** Menampilkan hasil ujian dan feedback total (Mode Peserta) */
function showResults() {
    // Hitung skor akhir
    score = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quizData[index].correct ? 1 : 0);
    }, 0);

    let resultHTML = `
        <h2>Hasil Ujian Anda - Mode Peserta</h2>
        <p>Anda menjawab **${score}/${quizData.length}** soal dengan benar.</p>
        <hr>
        <h3>Rincian Jawaban & Pembahasan:</h3>
        <div class="result-details">
    `;

    // Rincian untuk setiap soal (feedback total)
    quizData.forEach((data, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === data.correct;
        const userAnswerText = userAnswer ? data[userAnswer] : 'Tidak Dijawab';
        const correctText = data[data.correct];

        resultHTML += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>Soal ${index + 1}: ${data.question.substring(0, 50)}...</h4>
                <p>Jawaban Anda: **${userAnswerText}**</p>
                <p>Kunci Jawaban: **${correctText}**</p>
                <p class="result-explanation">Pembahasan: ${data.explanation}</p>
            </div>
        `;
    });

    resultHTML += `</div><button onclick="location.reload()">Ulangi Ujian</button>`;

    quiz.innerHTML = resultHTML;
    sidebarEl.style.display = 'none';
}

/** Membuat daftar soal untuk navigasi */
function createQuestionList() {
    questionListEl.innerHTML = '';
    quizData.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('q-nav-btn');
        button.setAttribute('data-index', index);
        button.innerText = `${index + 1}`;
        
        button.addEventListener('click', () => {
            // Simpan jawaban saat ini sebelum berpindah
            userAnswers[currentQuiz] = getSelected();
            currentQuiz = index;
            loadQuiz();
        });
        questionListEl.appendChild(button);
    });
}

/** Mengupdate warna tombol di daftar soal (sidebar) */
function updateQuestionListStatus() {
    const navButtons = document.querySelectorAll('.q-nav-btn');
    navButtons.forEach((btn, index) => {
        btn.classList.remove('active', 'answered');

        if (userAnswers[index] !== null) {
            btn.classList.add('answered');
        }

        if (index === currentQuiz) {
            btn.classList.add('active');
        }
    });
}

// ====================================================================
// 4. SETUP MODE & EVENT LISTENERS
// ====================================================================

function setMode(mode) {
    currentMode = mode;
    modeSelection.style.display = 'none';
    mainContainer.style.display = 'flex';
    createQuestionList();
    loadQuiz();
}

// Event Listeners
document.getElementById('mode-peserta').addEventListener('click', () => setMode('peserta'));
document.getElementById('mode-penjelasan').addEventListener('click', () => setMode('penjelasan'));

submitBtn.addEventListener('click', () => {
    // Simpan jawaban saat ini
    const answer = getSelected();
    userAnswers[currentQuiz] = answer;
    
    if (currentMode === 'peserta') {
        // Mode Peserta: Lanjut ke soal berikutnya atau hasil
        processAnswer(false);
    } else {
        // Mode Penjelasan: Hanya simpan jawaban dan tampilkan/perbarui kunci jawaban
        updateQuestionListStatus();
        displayCorrectAnswer();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuiz < quizData.length - 1) {
        userAnswers[currentQuiz] = getSelected();
        currentQuiz++;
        loadQuiz();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuiz > 0) {
        userAnswers[currentQuiz] = getSelected();
        currentQuiz--;
        loadQuiz();
    }
});
