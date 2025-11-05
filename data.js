const quizData = [
    // ====================================================================
    // A. SOAL 1 HINGGA 10 (DIISI DARI DATA SEBELUMNYA)
    // Diasumsikan ini adalah sisa 10 soal deret yang belum Anda kirim
    // Saya menggunakan placeholder, Anda harus memastikan 10 soal awal ini sudah benar
    // ====================================================================
    {
        question: "2, 4, 8, 16, 32, ?",
        a: "48", b: "54", c: "64", d: "72", e: "80",
        correct: "c",
        explanation: "Pola: Bilangan sebelumnya dikalikan 2. (32 * 2 = 64).",
    },
    {
        question: "5, 10, 20, 40, 80, ?",
        a: "100", b: "120", c: "150", d: "160", e: "200",
        correct: "d",
        explanation: "Pola: Barisan geometri dengan rasio 2. (80 * 2 = 160).",
    },
    {
        question: "1, 4, 9, 16, 25, ?",
        a: "30", b: "35", c: "36", d: "42", e: "49",
        correct: "c",
        explanation: "Pola: Bilangan kuadrat (1², 2², 3², 4², 5²). Berikutnya 6² = 36.",
    },
    {
        question: "3, 6, 12, 24, 48, ?",
        a: "60", b: "72", c: "90", d: "96", e: "108",
        correct: "d",
        explanation: "Pola: Bilangan sebelumnya dikalikan 2. (48 * 2 = 96).",
    },
    {
        question: "7, 14, 28, 56, 112, ?",
        a: "126", b: "224", c: "252", d: "280", e: "320",
        correct: "b",
        explanation: "Pola: Bilangan sebelumnya dikalikan 2. (112 * 2 = 224).",
    },
    {
        question: "80, 70, 60, 50, 40, ?",
        a: "35", b: "30", c: "25", d: "20", e: "10",
        correct: "b",
        explanation: "Pola: Dikurangi 10 setiap langkah. (40 - 10 = 30).",
    },
    {
        question: "4, 9, 19, 39, 79, ?",
        a: "119", b: "159", c: "139", d: "149", e: "159",
        correct: "e",
        explanation: "Pola: (n x 2) + 1. (79 x 2) + 1 = 159.",
    },
    {
        question: "100, 90, 81, 73, 66, ?",
        a: "60", b: "59", c: "58", d: "61", e: "55",
        correct: "a",
        explanation: "Pola: Selisih berkurang satu: -10, -9, -8, -7, -6. (66 - 6 = 60).",
    },
    {
        question: "2, 3, 5, 8, 12, 17, ?",
        a: "23", b: "24", c: "25", d: "26", e: "27",
        correct: "a",
        explanation: "Pola: Selisih bertambah satu: +1, +2, +3, +4, +5, +6. (17 + 6 = 23).",
    },
    {
        question: "1, 2, 6, 24, 120, ?",
        a: "240", b: "360", c: "480", d: "720", e: "840",
        correct: "d",
        explanation: "Pola: Faktorial: x2, x3, x4, x5, x6. (120 x 6 = 720).",
    },
    
    // ====================================================================
    // A. SOAL 11 HINGGA 40 (DERET)
    // ====================================================================
    {
        question: "10, 20, 40, 80, 160, ?",
        a: "200", b: "240", c: "280", d: "320", e: "400",
        correct: "d",
        explanation: "Pola: ×2 setiap langkah → 160×2 = 320",
    },
    {
        question: "64, 32, 16, 8, 4, ?",
        a: "2", b: "3", c: "6", d: "8", e: "10",
        correct: "a",
        explanation: "Pola: ÷2 setiap langkah → 4÷2 = 2",
    },
    {
        question: "9, 18, 27, 36, 45, ?",
        a: "50", b: "54", c: "56", d: "60", e: "63",
        correct: "b",
        explanation: "Pola: +9 setiap langkah (kelipatan 9) → 45+9 = 54",
    },
    {
        question: "2, 5, 10, 17, 26, ?",
        a: "35", b: "37", c: "38", d: "40", e: "42",
        correct: "b",
        explanation: "Pola selisih bilangan ganjil: Selisih +3, +5, +7, +9 → berikutnya +11 → 26+11 = 37",
    },
    {
        question: "3, 6, 11, 18, 27, ?",
        a: "34", b: "36", c: "38", d: "40", e: "42",
        correct: "c",
        explanation: "Pola selisih bilangan ganjil: Selisih +3, +5, +7, +9 → berikutnya +11 → 27+11 = 38",
    },
    {
        question: "81, 64, 49, 36, 25, ?",
        a: "20", b: "16", c: "9", d: "4", e: "1",
        correct: "b",
        explanation: "Pola: Bilangan kuadrat menurun: 9², 8², 7², 6², 5², … → berikutnya 4² = 16",
    },
    {
        question: "1, 3, 7, 15, 31, ?",
        a: "47", b: "55", c: "63", d: "65", e: "71",
        correct: "c",
        explanation: "Pola: ×2 +1 → 31×2 +1 = 63",
    },
    {
        question: "2, 4, 7, 11, 16, 22, ?",
        a: "27", b: "28", c: "29", d: "30", e: "31",
        correct: "c",
        explanation: "Pola: Selisih bertambah +1 tiap langkah: +2, +3, +4, +5, +6 → berikutnya +7 → 22+7 = 29",
    },
    {
        question: "50, 45, 41, 38, 36, ?",
        a: "35", b: "34", c: "33", d: "32", e: "31",
        correct: "a",
        explanation: "Pola: Selisih –5, –4, –3, –2 → berikutnya –1 → 36–1 = 35",
    },
    {
        question: "5, 15, 45, 135, ?",
        a: "270", b: "405", c: "540", d: "675", e: "810",
        correct: "b",
        explanation: "Pola: ×3 setiap langkah → 135×3 = 405",
    },
    {
        question: "1, 4, 13, 40, 121, ?",
        a: "243", b: "362", c: "364", d: "365", e: "370",
        correct: "c",
        explanation: "Pola: ×3 +1 → (121×3) + 1 = 364",
    },
    {
        question: "0, 1, 1, 2, 3, 5, 8, ?",
        a: "10", b: "11", c: "12", d: "13", e: "15",
        correct: "d",
        explanation: "Pola: Deret Fibonacci (penjumlahan dua suku sebelumnya) → 5+8 = 13",
    },
    {
        question: "100, 99, 97, 94, 90, ?",
        a: "85", b: "86", c: "84", d: "83", e: "82",
        correct: "a",
        explanation: "Pola: Selisih –1, –2, –3, –4 → berikutnya –5 → 90–5 = 85",
    },
    {
        question: "1, 8, 27, 64, 125, ?",
        a: "150", b: "200", c: "216", d: "225", e: "256",
        correct: "c",
        explanation: "Pola: Bilangan kubik (1³, 2³, 3³, 4³, 5³, …) → berikutnya 6³ = 216",
    },
    {
        question: "6, 11, 21, 36, 56, ?",
        a: "70", b: "81", c: "91", d: "101", e: "111",
        correct: "b",
        explanation: "Pola: Selisih bertambah 5: +5, +10, +15, +20 → berikutnya +25 → 56+25 = 81",
    },
    {
        question: "1, 2, 4, 8, 16, 32, 64, ?",
        a: "96", b: "100", c: "112", d: "128", e: "150",
        correct: "d",
        explanation: "Pola: ×2 setiap langkah → 64×2 = 128",
    },
    {
        question: "0, 2, 6, 12, 20, 30, ?",
        a: "36", b: "40", c: "42", d: "45", e: "48",
        correct: "c",
        explanation: "Pola: Selisih +2, +4, +6, +8, +10 → berikutnya +12 → 30+12 = 42",
    },
    {
        question: "2, 6, 18, 54, 162, ?",
        a: "324", b: "486", c: "512", d: "648", e: "729",
        correct: "b",
        explanation: "Pola: ×3 setiap langkah → 162×3 = 486",
    },
    {
        question: "20, 17, 13, 8, 2, ?",
        a: "0", b: "–3", c: "–4", d: "–5", e: "–6",
        correct: "d",
        explanation: "Pola: Selisih –3, –4, –5, –6 → berikutnya –7 → 2–7 = –5",
    },
    {
        question: "1, 3, 9, 27, 81, ?",
        a: "162", b: "243", c: "324", d: "405", e: "486",
        correct: "b",
        explanation: "Pola: ×3 setiap langkah → 81×3 = 243",
    },
    {
        question: "11, 22, 44, 88, 176, ?",
        a: "220", b: "264", c: "352", d: "400", e: "440",
        correct: "c",
        explanation: "Pola: ×2 setiap langkah → 176×2 = 352",
    },
    {
        question: "10, 9, 7, 4, 0, ?",
        a: "–5", b: "–3", c: "–2", d: "1", e: "2",
        correct: "a",
        explanation: "Pola: Selisih –1, –2, –3, –4 → berikutnya –5 → 0–5 = –5",
    },
    {
        question: "1, 2, 6, 24, 120, 720, ?",
        a: "840", b: "960", c: "1024", d: "5040", e: "7200",
        correct: "d",
        explanation: "Pola: Deret faktorial (×2, ×3, ×4, ×5, ×6, ...) → 720 × 7 = 5040",
    },
    {
        question: "90, 80, 71, 63, 56, ?",
        a: "49", b: "50", c: "48", d: "46", e: "45",
        correct: "b",
        explanation: "Pola: Selisih –10, –9, –8, –7 → berikutnya –6 → 56–6 = 50",
    },
    {
        question: "2, 5, 11, 23, 47, ?",
        a: "94", b: "95", c: "96", d: "97", e: "98",
        correct: "b",
        explanation: "Pola: ×2 +1 → 47×2 + 1 = 95",
    },
    {
        question: "1, 4, 9, 16, 25, 36, ?",
        a: "42", b: "44", c: "49", d: "56", e: "64",
        correct: "c",
        explanation: "Pola: Bilangan kuadrat (1², 2², 3², 4², 5², 6², ...) → berikutnya 7² = 49",
    },
    {
        question: "2, 6, 12, 20, 30, ?",
        a: "40", b: "42", c: "44", d: "46", e: "48",
        correct: "b",
        explanation: "Pola: Selisih +4, +6, +8, +10 → berikutnya +12 → 30+12 = 42",
    },
    {
        question: "10, 12, 17, 27, 42, ?",
        a: "50", b: "55", c: "60", d: "62", e: "67",
        correct: "d",
        explanation: "Pola: Selisih +2, +5, +10, +15 → berikutnya +20 → 42+20 = 62",
    },
    {
        question: "8, 16, 14, 28, 26, 52, ?",
        a: "48", b: "50", c: "54", d: "60", e: "62",
        correct: "b",
        explanation: "Pola bergantian: ×2, –2, ×2, –2, ×2, … → 52–2 = 50",
    },
    {
        question: "2, 3, 5, 9, 17, 33, ?",
        a: "49", b: "51", c: "57", d: "65", e: "66",
        correct: "d",
        explanation: "Pola: Selisih +1, +2, +4, +8, +16 → berikutnya +32 → 33+32 = 65",
    },
    
    // ====================================================================
    // B. SOAL 41 HINGGA 60 (SILOGISME / LOGIKA)
    // ====================================================================
    {
        question: "Premis 1: Semua guru adalah pendidik. Premis 2: Semua pendidik adalah pegawai. Premis 3: Sebagian pegawai adalah wanita. Premis 4: Semua wanita adalah manusia. Kesimpulan:",
        a: "Semua guru adalah manusia.", b: "Sebagian guru adalah manusia.", c: "Semua pegawai adalah guru.", d: "Sebagian manusia adalah pegawai.", e: "Tidak Dapat Disimpulkan",
        correct: "b",
        explanation: "Semua guru ⊂ pendidik ⊂ pegawai, dan semua wanita ⊂ manusia. Karena Sebagian pegawai adalah wanita/manusia, dan guru adalah pegawai, maka sebagian guru termasuk manusia. (Catatan: Pilihan 'Sebagian manusia adalah pegawai' juga benar, namun 'Sebagian guru adalah manusia' lebih spesifik menghubungkan subjek utama.)",
    },
    {
        question: "Premis 1: Semua dokter adalah sarjana. Premis 2: Semua sarjana adalah orang terpelajar. Premis 3: Tidak ada orang terpelajar yang bodoh. Premis 4: Beberapa orang bodoh adalah pengangguran. Kesimpulan:",
        a: "Tidak ada dokter yang pengangguran.", b: "Beberapa dokter bukan pengangguran.", c: "Semua pengangguran bodoh.", d: "Semua dokter adalah bodoh.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Dokter ⊂ terpelajar. Terpelajar ≠ bodoh. Karena pengangguran sebagian adalah bodoh, dan dokter ≠ bodoh, maka tidak ada dokter yang pengangguran.",
    },
    {
        question: "Premis 1: Semua burung bisa terbang. Premis 2: Ayam adalah burung. Premis 3: Beberapa burung tidak bisa berenang. Premis 4: Ayam tidak suka air. Kesimpulan:",
        a: "Semua ayam bisa terbang.", b: "Ayam tidak bisa berenang.", c: "Ayam tidak suka terbang.", d: "Ayam bisa berenang.", e: "Tidak Dapat Disimpulkan",
        correct: "e",
        explanation: "Kesimpulan 'Ayam tidak bisa berenang' tidak dapat ditarik. Premis hanya menyatakan 'ayam tidak suka air' dan 'beberapa burung tidak bisa berenang'. Ketidaksukaan air tidak sama dengan ketidakmampuan berenang.",
    },
    {
        question: "Premis 1: Semua mahasiswa rajin belajar. Premis 2: Beberapa mahasiswa adalah atlet. Premis 3: Semua atlet sehat. Premis 4: Tidak ada orang sakit yang rajin belajar. Kesimpulan:",
        a: "Semua mahasiswa adalah sehat.", b: "Beberapa mahasiswa sehat.", c: "Tidak ada mahasiswa yang sakit.", d: "Semua mahasiswa adalah atlet.", e: "Tidak Dapat Disimpulkan",
        correct: "b",
        explanation: "Hanya diketahui 'beberapa mahasiswa' (atlet) yang sehat. Karena tidak semua mahasiswa adalah atlet, kita tidak bisa menyimpulkan semua mahasiswa sehat.",
    },
    {
        question: "Premis 1: Semua pegawai adalah manusia. Premis 2: Semua manusia membutuhkan makan. Premis 3: Semua yang membutuhkan makan hidup. Premis 4: Semua pegawai bekerja. Kesimpulan:",
        a: "Semua pegawai hidup.", b: "Semua yang hidup adalah pegawai.", c: "Sebagian manusia adalah pegawai.", d: "Semua pegawai membutuhkan makan.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai silogisme: Pegawai → manusia → butuh makan → hidup. Maka, semua pegawai hidup. (Catatan: 'Semua pegawai membutuhkan makan' dan 'Sebagian manusia adalah pegawai' juga kesimpulan yang benar, namun 'Semua pegawai hidup' adalah kesimpulan dari rantai premis terpanjang yang menghubungkan subjek dan predikat utama.)",
    },
    {
        question: "Premis 1: Semua kucing berkaki empat. Premis 2: Beberapa hewan berkaki empat adalah anjing. Premis 3: Semua anjing adalah hewan peliharaan. Premis 4: Semua hewan peliharaan lucu. Kesimpulan:",
        a: "Semua kucing lucu.", b: "Semua anjing lucu.", c: "Beberapa hewan berkaki empat lucu.", d: "Semua kucing adalah hewan peliharaan.", e: "Tidak Dapat Disimpulkan",
        correct: "e",
        explanation: "Tidak ada premis yang menyatakan 'kucing adalah anjing' atau 'kucing adalah hewan peliharaan'. Meskipun kucing lucu, tidak ada koneksi logis yang pasti dari premis yang diberikan.",
    },
    {
        question: "Premis 1: Semua bunga mawar adalah tanaman. Premis 2: Semua tanaman butuh air. Premis 3: Semua yang butuh air hidup. Premis 4: Mawar adalah bunga. Kesimpulan:",
        a: "Mawar adalah makhluk hidup.", b: "Semua bunga mawar butuh air.", c: "Semua yang hidup adalah mawar.", d: "Mawar butuh air.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Mawar → bunga mawar → tanaman → butuh air → hidup. Maka, Mawar adalah makhluk hidup.",
    },
    {
        question: "Premis 1: Semua dosen adalah sarjana. Premis 2: Beberapa sarjana adalah peneliti. Premis 3: Semua peneliti gemar membaca. Premis 4: Semua yang gemar membaca cerdas. Kesimpulan:",
        a: "Semua dosen cerdas.", b: "Beberapa dosen cerdas.", c: "Beberapa sarjana cerdas.", d: "Beberapa sarjana dosen.", e: "Tidak Dapat Disimpulkan",
        correct: "c",
        explanation: "Rantai: Sarjana → peneliti → gemar membaca → cerdas. Maka, 'Beberapa sarjana cerdas' (sebagai sub-kesimpulan) adalah benar. 'Semua dosen cerdas' tidak bisa disimpulkan karena tidak semua dosen adalah peneliti.",
    },
    {
        question: "Premis 1: Semua ikan hidup di air. Premis 2: Semua paus hidup di air. Premis 3: Semua paus adalah mamalia. Premis 4: Tidak ada mamalia yang bertelur. Kesimpulan:",
        a: "Semua mamalia adalah paus.", b: "Tidak ada ikan yang bertelur.", c: "Paus adalah ikan.", d: "Beberapa ikan adalah mamalia.", e: "Tidak Dapat Disimpulkan",
        correct: "e",
        explanation: "Premis tidak menghubungkan ikan secara langsung dengan mamalia, hanya menyatakan bahwa Paus adalah mamalia dan hidup di air (sama seperti ikan). Tidak ada kesimpulan logis yang pasti.",
    },
    {
        question: "Premis 1: Semua guru adalah manusia. Premis 2: Semua manusia bernapas. Premis 3: Semua yang bernapas membutuhkan oksigen. Premis 4: Semua guru mengajar. Kesimpulan:",
        a: "Semua guru membutuhkan oksigen.", b: "Semua yang mengajar butuh oksigen.", c: "Semua manusia mengajar.", d: "Tidak ada guru yang tidak bernapas.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Guru → manusia → bernapas → butuh oksigen. Maka, Semua guru membutuhkan oksigen.",
    },
    {
        question: "Premis 1: Semua pemuda menyukai musik. Premis 2: Deni adalah pemuda. Premis 3: Semua yang menyukai musik memiliki selera seni. Premis 4: Semua yang memiliki selera seni kreatif. Kesimpulan:",
        a: "Deni kreatif.", b: "Deni menyukai seni.", c: "Semua yang kreatif adalah pemuda.", d: "Semua pemuda kreatif.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Deni → pemuda → suka musik → punya selera seni → kreatif.",
    },
    {
        question: "Premis 1: Semua pelajar membaca buku. Premis 2: Semua pembaca buku pandai. Premis 3: Semua orang pandai rajin. Premis 4: Beberapa pelajar malas. Kesimpulan:",
        a: "Semua pelajar rajin.", b: "Pernyataan saling bertentangan.", c: "Beberapa pelajar rajin.", d: "Tidak ada pelajar yang malas.", e: "Tidak Dapat Disimpulkan",
        correct: "b",
        explanation: "Premis 1-3 menyimpulkan 'Semua pelajar rajin'. Premis 4 ('Beberapa pelajar malas') secara langsung bertentangan dengan kesimpulan tersebut.",
    },
    {
        question: "Premis 1: Semua ilmuwan berpikir kritis. Premis 2: Semua yang berpikir kritis logis. Premis 3: Semua yang logis rasional. Premis 4: Semua ilmuwan adalah peneliti. Kesimpulan:",
        a: "Semua ilmuwan rasional.", b: "Semua peneliti rasional.", c: "Beberapa peneliti rasional.", d: "Beberapa ilmuwan adalah logis.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Ilmuwan → berpikir kritis → logis → rasional. Maka, 'Semua ilmuwan rasional'. ('Semua peneliti rasional' tidak benar karena tidak semua peneliti adalah ilmuwan).",
    },
    {
        question: "Premis 1: Semua manusia makan nasi. Premis 2: Semua yang makan nasi hidup di bumi. Premis 3: Semua manusia bernapas. Premis 4: Semua yang bernapas hidup. Kesimpulan:",
        a: "Semua manusia hidup di bumi.", b: "Semua manusia hidup.", c: "Semua yang hidup makan nasi.", d: "Semua manusia bernapas di bumi.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Manusia → makan nasi → hidup di bumi. Maka, Semua manusia hidup di bumi.",
    },
    {
        question: "Premis 1: Semua pemain sepak bola adalah atlet. Premis 2: Semua atlet berolahraga. Premis 3: Semua yang berolahraga sehat. Premis 4: Ronaldo adalah pemain sepak bola. Kesimpulan:",
        a: "Ronaldo sehat.", b: "Ronaldo adalah atlet.", c: "Semua pemain sepak bola sehat.", d: "Semua yang sehat adalah pemain sepak bola.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Ronaldo → pemain sepak bola → atlet → berolahraga → sehat.",
    },
    {
        question: "Premis 1: Semua karyawan bekerja. Premis 2: Semua yang bekerja mendapat gaji. Premis 3: Beberapa yang mendapat gaji tidak puas. Premis 4: Semua karyawan memakai seragam. Kesimpulan:",
        a: "Semua karyawan puas.", b: "Beberapa karyawan tidak puas.", c: "Semua karyawan mendapat gaji.", d: "Semua yang mendapat gaji adalah karyawan.", e: "Tidak Dapat Disimpulkan",
        correct: "b",
        explanation: "Karyawan → mendapat gaji. Karena 'Beberapa yang mendapat gaji tidak puas', maka logis untuk menyimpulkan 'Beberapa karyawan tidak puas'.",
    },
    {
        question: "Premis 1: Semua siswa sekolah dasar belajar membaca. Premis 2: Semua yang belajar membaca mengenal huruf. Premis 3: Semua yang mengenal huruf bisa menulis. Premis 4: Budi adalah siswa sekolah dasar. Kesimpulan:",
        a: "Budi bisa menulis.", b: "Budi mengenal huruf.", c: "Semua siswa sekolah dasar bisa menulis.", d: "Semua yang bisa menulis adalah siswa sekolah dasar.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Budi → siswa SD → belajar membaca → mengenal huruf → bisa menulis.",
    },
    {
        question: "Premis 1: Semua karyawan datang ke kantor. Premis 2: Semua yang datang ke kantor bekerja. Premis 3: Semua yang bekerja mendapatkan gaji. Premis 4: Budi tidak datang ke kantor. Kesimpulan:",
        a: "Budi tidak mendapatkan gaji.", b: "Budi tidak bekerja.", c: "Budi mendapatkan gaji.", d: "Budi mungkin mendapatkan gaji.", e: "Tidak Dapat Disimpulkan",
        correct: "e",
        explanation: "Ini adalah *fallacy of denying the antecedent*. Premis hanya menyatakan jika datang (P) maka digaji (Q). Jika tidak datang (~P), kita tidak bisa menyimpulkan tidak digaji (~Q), karena mungkin ada cara lain untuk digaji (misalnya, kerja dari rumah).",
    },
    {
        question: "Premis 1: Semua pengemudi memiliki SIM. Premis 2: Semua yang memiliki SIM tahu aturan lalu lintas. Premis 3: Beberapa pengemudi melanggar aturan. Premis 4: Semua pelanggar dikenai sanksi. Kesimpulan:",
        a: "Semua pengemudi dikenai sanksi.", b: "Beberapa pengemudi dikenai sanksi.", c: "Semua pengemudi tahu aturan lalu lintas.", d: "Semua yang dikenai sanksi adalah pengemudi.", e: "Tidak Dapat Disimpulkan",
        correct: "b",
        explanation: "Pengemudi → melanggar → dikenai sanksi. Karena hanya 'Beberapa pengemudi' yang melanggar, maka hanya 'Beberapa pengemudi' yang dikenai sanksi.",
    },
    {
        question: "Premis 1: Semua pelukis kreatif. Premis 2: Semua pelukis mencintai seni. Premis 3: Semua yang mencintai seni memiliki imajinasi tinggi. Premis 4: Semua yang memiliki imajinasi tinggi berjiwa bebas. Kesimpulan:",
        a: "Semua pelukis berjiwa bebas.", b: "Semua yang berjiwa bebas adalah pelukis.", c: "Semua yang kreatif mencintai seni.", d: "Beberapa pelukis tidak berjiwa bebas.", e: "Tidak Dapat Disimpulkan",
        correct: "a",
        explanation: "Rantai: Pelukis → mencintai seni → imajinasi tinggi → berjiwa bebas. Maka, Semua pelukis berjiwa bebas.",
    }
];
