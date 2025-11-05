// ... (Bagian 1 dan 2 Variabel Global) ...

// Tambahkan elemen baru untuk menampilkan penjelasan
const explanationEl = document.createElement('div');
explanationEl.id = 'explanation';
explanationEl.classList.add('explanation-box');
quiz.insertBefore(explanationEl, document.getElementById('submit').parentElement); // Masukkan sebelum tombol

// ... (lanjutan kode) ...

/**
 * Memuat soal berdasarkan indeks (currentQuiz)
 */
function loadQuiz() {
    // ... (kode loadQuiz sebelumnya) ...
    
    // ... (kode loadQuiz sebelumnya) ...

    // 5. Penyesuaian tampilan berdasarkan Mode
    
    // Hapus semua highlight jawaban
    document.querySelectorAll('.answer-list li').forEach(li => {
        li.classList.remove('correct-answer', 'incorrect-answer');
    });

    // Sembunyikan penjelasan secara default
    explanationEl.style.display = 'none';

    if (currentMode === 'penjelasan') {
        // Mode Penjelasan: Langsung tampilkan kunci & penjelasan
        displayCorrectAnswer();
        explanationEl.innerHTML = `<strong>Pembahasan:</strong> ${currentQuizData.explanation}`;
        explanationEl.style.display = 'block';
        submitBtn.style.display = 'none'; // Sembunyikan tombol submit di mode penjelasan
    } else {
        // Mode Peserta
        submitBtn.style.display = 'inline-block'; // Pastikan tombol submit terlihat
        // ... (kode lain untuk mode peserta)
    }
}
// ... (kode loadQuiz lainnya) ...

/**
 * Memproses jawaban pengguna dan melanjutkan ke soal berikutnya
 * Kita HAPUS jeda 1 detik untuk melihat jawaban di sini, karena feedback total diberikan di akhir
 */
function processAnswer(autoAdvance = false) {
    const answer = getSelected();
    
    userAnswers[currentQuiz] = answer || null; // Simpan jawaban (atau null jika waktu habis/tidak dijawab)

    // Langsung lanjut ke soal berikutnya (tanpa jeda 1 detik)
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // Jika sudah soal terakhir, tampilkan hasil
        showResults();
    }
}


/**
 * Menampilkan hasil ujian (Diperbarui untuk Mode Peserta)
 */
function showResults() {
    // Hitung skor akhir
    score = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quizData[index].correct ? 1 : 0);
    }, 0);

    let resultHTML = `
        <h2>Hasil Ujian Anda - Mode Peserta</h2>
        <p>Anda menjawab **${score}/${quizData.length}** soal dengan benar.</p>
        <hr>
        <h3>Rincian Jawaban:</h3>
        <div class="result-details">
    `;

    // Buat rincian untuk setiap soal
    quizData.forEach((data, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === data.correct;
        
        resultHTML += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>Soal ${index + 1}: ${data.question.substring(0, 50)}...</h4>
                <p>Jawaban Anda: **${userAnswer ? userAnswer.toUpperCase() : 'Tidak Dijawab'}**</p>
                <p>Kunci Jawaban: **${data.correct.toUpperCase()}**</p>
                <p class="result-explanation">Pembahasan: ${data.explanation}</p>
            </div>
        `;
    });

    resultHTML += `</div><button onclick="location.reload()">Ulangi Ujian</button>`;

    // Tampilkan hasil
    quiz.innerHTML = resultHTML;
    sidebarEl.style.display = 'none';
    explanationEl.remove(); // Hapus elemen penjelasan dari DOM jika ada
}

// ... (kode lain seperti setMode dan Event Listeners TIDAK BERUBAH) ...
