const quizData = [
    // ... (Soal 1 sampai 40 Deret) ...

    // Soal 41: Logika
    {
        question: "Semua guru adalah pendidik. Semua pendidik adalah pekerja sosial. Sebagian pekerja sosial adalah relawan. Tidak ada relawan yang pemalas. Kesimpulan yang tepat:",
        a: "Semua guru adalah relawan.",
        b: "Sebagian guru bukan pemalas.",
        c: "Semua relawan guru.",
        d: "Semua guru pemalas.",
        e: "Tidak dapat disimpulkan.",
        correct: "b",
        explanation: "Guru adalah subset dari Pekerja Sosial. Karena 'Tidak ada relawan yang pemalas' dan 'Sebagian pekerja sosial adalah relawan', ini tidak menjamin semua guru (yang juga pekerja sosial) tidak pemalas. Namun, jika ada guru yang relawan (karena guru adalah pekerja sosial), maka guru tersebut bukan pemalas. Jadi, 'Sebagian guru bukan pemalas' adalah kesimpulan yang tepat.", // <--- TAMBAHAN
    },
    // Soal 42: Logika
    {
        question: "Semua mahasiswa suka belajar. Semua yang suka belajar membaca buku. Semua yang membaca buku pandai. Tidak semua mahasiswa pandai. Kesimpulan yang tepat:",
        a: "Semua mahasiswa pandai.",
        b: "Tidak ada mahasiswa yang pandai.",
        c: "Pernyataan saling bertentangan.",
        d: "Sebagian mahasiswa pandai.",
        e: "Tidak dapat disimpulkan.",
        correct: "c",
        explanation: "Premis 1 hingga 3 membentuk rantai logis: Semua Mahasiswa → Suka Belajar → Membaca Buku → Pandai. Ini menyimpulkan 'Semua mahasiswa pandai'. Premis 4 ('Tidak semua mahasiswa pandai') secara langsung menyangkal kesimpulan tersebut. Oleh karena itu, terjadi kontradiksi.", // <--- TAMBAHAN
    },
    // ... (Lanjutkan menambahkan properti explanation untuk semua 60 soal) ...
];
