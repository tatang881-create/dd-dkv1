import { LearningUnit } from '../types/curriculum';

export const UNITS_DATA_SEMESTER_2: LearningUnit[] = [
  // ================= SEMESTER 2 (Minggu 19 - 36) =================
  {
    week: 19,
    semester: 2,
    babNumber: 1,
    babTitle: 'Tipografi',
    topic: 'Pengertian, Sejarah Perkembangan Tipografi (Era Pracetak, Cetak, & Digital)',
    sourceReference: 'Buku Semester 2 Bab 1 hlm. 1-6',
    isOfficialCurriculum: true,
    prerequisites: 'Kemampuan dasar sketsa dan pengenalan huruf',
    coreConcepts: [
      'Pengertian Tipografi: seni memilih, menyusun, dan menata huruf serta ruang penyebarannya (Kusrianto 2007)',
      'Era Pracetak: lukisan gua (25000 SM), piktograf, ideograf Cina (1800 SM), fonograf Phoenicia 22 huruf (1000 SM), alfabet Yunani geometri (400 SM), Romawi (114 M)',
      'Era Cetak: Johannes Gutenberg huruf timah (1455 M), Herman Freud phototypesetting / cetak ofset (1946 M)',
      'Era Digital: Adobe PostScript Font (1987), Apple & Microsoft True Type Font (TTF)'
    ],
    summary: 'Mempelajari evolusi tulisan peradaban manusia: dari piktogram gua 25000 SM, fonograf bangsa Phoenicia 1000 SM, penyempurnaan Romawi 114 M, revolusi cetak timah 1455 M, hingga era font digital PostScript 1987 M.',
    glossaryTerms: [
      { term: 'Piktograf', definition: 'Bentuk tulisan berupa gambar objek nyata seperti hewan, tumbuhan, dan aktivitas manusia masa lampau.' },
      { term: 'Ideograf', definition: 'Tulisan berupa simbol tertentu yang mengungkapkan suatu gagasan atau ide abstrak.' },
      { term: 'Fonograf', definition: 'Tanda atau aksara yang menandakan bunyi bahasa, pertama kali diciptakan oleh bangsa Phoenicia (22 huruf).' }
    ],
    simulationId: 'tipografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Sejarah Perkembangan Tipografi Era Pracetak (Piktograf, Ideograf, Fonograf)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami asal mula tulisan dan transformasi piktograf hingga fonograf alfabet'],
        triggerQuestion: 'Bagaimana gambar seekor banteng di dinding gua zaman purba bisa berevolusi menjadi huruf "A" yang kita gunakan hari ini?',
        activities: {
          pendahuluan: [
            'Guru membuka dengan salam, doa, dan apersepsi tulisan prasasti kuno nusantara',
            'Menampilkan Tabel 1.1: Perbandingan Ideografi Sumeria Kuno, Mesir Kuno, dan Cina'
          ],
          inti: [
            'Eksplorasi kronologi: Lukisan gua (25000 SM) -> Kaligrafi Cina (1800 SM) -> Fonograf Phoenicia 22 huruf (1000 SM)',
            'Pembedahan anatomi huruf Yunani berbasis geometri (400 SM) dan penyempurnaan Romawi (114 M)',
            'Aktivitas 1.1 Ayo Bereksplorasi: Meneliti huruf Phoenicia, Yunani, dan Romawi'
          ],
          penutup: [
            'Refleksi makna tulisan dalam peradaban manusia',
            'Formatif lisan tentang perbedaan piktograf dan ideograf'
          ]
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis peralihan simbol visual gambar ke simbol lambang bunyi fonetis',
          creativity: 'Mencoba merancang 1 simbol ideograf modern untuk kata "internet"',
          collaboration: 'Diskusi kelompok membandingkan alfabet Phoenicia dan Romawi',
          communication: 'Menyampaikan hasil kajian evolusi aksara',
          connectionToRealLife: 'Menghargai warisan aksara nusantara dan tulisan global'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Tipografi Era Cetak (Gutenberg 1455, Ofset 1946) & Era Digital (PostScript 1987)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menjelaskan era cetak timah hingga revolusi font digital komputer'],
        triggerQuestion: 'Apa perbedaan antara screen font untuk tampilan monitor dan printer font untuk cetakan fisik pada era Adobe PostScript?',
        activities: {
          pendahuluan: ['Review sesi pracetak', 'Apersepsi font digital di ponsel pintar'],
          inti: ['Menelaah penemuan Gutenberg 1455 M dan phototypesetting Herman Freud 1946', 'Menganalisis peluncuran PostScript Font 1987 dan True Type Font (TTF)', 'Pengenalan definisi tipografi menurut Kusrianto (2007) dan rumus AIDA'],
          penutup: ['Refleksi peranan font dalam desain grafis', 'Penyusunan ringkasan']
        },
        deepLearning5C: {
          criticalThinking: 'Menghubungkan resolusi layar monitor dengan kebutuhan render tipografi digital',
          creativity: 'Memilih pasangan font kontras untuk judul dan isi teks',
          collaboration: 'Praktik kelompok membedah penggunaan font pada kemasan produk di kelas',
          communication: 'Mengemukakan kesan visual yang timbul dari berbagai gaya font',
          connectionToRealLife: 'Penggunaan font komputer dalam tugas sekolah sehari-hari'
        }
      }
    ],
    quiz: {
      id: 'quiz-w19',
      title: 'Kuis Formatif Minggu 19: Sejarah & Pengertian Tipografi',
      questions: [
        {
          id: 'q1',
          question: 'Bangsa manakah yang pertama kali menggunakan fonograf (tanda bunyi) sekitar tahun 1000 SM berjumlah 22 huruf?',
          options: ['Bangsa Sumeria', 'Bangsa Mesir Kuno', 'Bangsa Phoenicia Kuno', 'Bangsa Romawi'],
          correctIndex: 2,
          explanation: 'Buku Semester 2 Bab 1 hlm. 5 menyebutkan fonograf pertama kali digunakan bangsa Phoenicia Kuno di wilayah Lebanon sekitar 1000 SM dengan 22 karakter.'
        }
      ]
    }
  },
  {
    week: 20,
    semester: 2,
    babNumber: 1,
    babTitle: 'Tipografi',
    topic: 'Jenis-Jenis Huruf Menurut James Craig (Serif, Sans Serif, Script, Monospace, Dekoratif)',
    sourceReference: 'Buku Semester 2 Bab 1 hlm. 7-8 & Tabel 1.2',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman sejarah tipografi minggu ke-19',
    coreConcepts: [
      '5 Klasifikasi huruf menurut James Craig (Yulianto, 2018):',
      '1. Huruf berkait (Roman / Serif): memiliki kaki/sirip lancip, ketebalan kontras, kesan feminin, klasik, anggun, lemah gemulai (Times New Roman, Baskerville, Century)',
      '2. Huruf tak berkait (Sans Serif): tanpa sirip, ketebalan seragam, kesan modern, kontemporer, efisien (Helvetica, Trebuchet, Arial)',
      '3. Huruf tulis/latin (Script): mirip coretan tangan pena/kuas miring ke kanan, sifat pribadi dan akrab (Freestyle Script, Segoe Script)',
      '4. Monospace: jarak/lebar setiap karakter sama (huruf W dan I mengambil ruang setara), kesan sederhana, ringan (Courier New, Cascadia Mono)',
      '5. Dekoratif: pengembangan bentuk ornamen dan hiasan, kesan ornamental dan unik (Old English, Rosewood)'
    ],
    summary: 'Mempelajari 5 keluarga besar typeface klasifikasi James Craig. Membedah ciri morfologi fisik serta impresi psikologis/kesan yang ditimbulkan pada audiens.',
    glossaryTerms: [
      { term: 'Serif', definition: 'Sirip atau kait kecil di ujung goresan utama karakter huruf yang memandu mata pembaca pada teks cetak.' },
      { term: 'Monospace', definition: 'Jenis huruf dengan lebar ruang horizontal yang sama persis untuk setiap karakter (non-proporsional).' }
    ],
    simulationId: 'tipografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Klasifikasi Huruf Serif dan Sans Serif: Ciri & Kesan Psikologis',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu mengidentifikasi ciri dan kesan visual huruf Serif dan Sans Serif'],
        triggerQuestion: 'Mengapa surat kabar dan novel sastra mayoritas memakai huruf Serif, sedangkan aplikasi antarmuka smartphone memakai Sans Serif?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menampilkan Gambar 1.2 pengaruh jenis font terhadap tema'],
          inti: ['Analisis Tabel 1.2: Ciri kait lancip Serif vs tanpa kait Sans Serif', 'Eksplorasi kesan: Klasik anggun vs modern efisien', 'Simulasi di Laboratorium Tipografi: Membandingkan keterbacaan teks novel pada font Serif vs Sans Serif'],
          penutup: ['Refleksi estetika huruf', 'Latihan memilah font di software']
        },
        deepLearning5C: {
          criticalThinking: 'Menghubungkan karakteristik fisik kait huruf dengan aliran gerak mata saat membaca teks panjang',
          creativity: 'Mencoba memasangkan 1 headline Sans Serif dengan 1 body text Serif',
          collaboration: 'Diskusi kelompok',
          communication: 'Menjelaskan argumen pemilihan font untuk poster formal vs modern',
          connectionToRealLife: 'Penerapan font pada dokumen resmi dan media sosial'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Huruf Script, Monospace, & Dekoratif: Karakter dan Penerapan Desain',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mengenali karakter Script, Monospace, dan Dekoratif serta menerapkannya tepat sasaran'],
        triggerQuestion: 'Mengapa huruf Script atau Dekoratif sangat tidak disarankan dipakai pada teks naskah (body text) yang panjang?',
        activities: {
          pendahuluan: ['Review Serif & Sans Serif', 'Apersepsi tulisan kaligrafi dan sertifikat penghargaan'],
          inti: ['Pembedahan Script (sifat pribadi/akrab), Monospace (ringan/kode komputer), Dekoratif (ornamental/unik)', 'Aktivitas 1.2 Ayo Bereksplorasi: Mencari karya DKV yang memakai huruf Script (undangan, kemasan, poster)'],
          penutup: ['Presentasi hasil temuan', 'Penugasan lembar kerja identifikasi font']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis penyebab hancurnya keterbacaan jika font dekoratif dipaksakan untuk teks paragraf',
          creativity: 'Membuat lettering nama diri menggunakan gaya script atau dekoratif',
          collaboration: 'Saling mengevaluasi keterbacaan lettering karya teman',
          communication: 'Mengutarakan impresi psikologis font terpilih',
          connectionToRealLife: 'Merancang undangan pernikahan dan piagam penghargaan sekolah'
        }
      }
    ],
    quiz: {
      id: 'quiz-w20',
      title: 'Kuis Formatif Minggu 20: Jenis-Jenis Huruf',
      questions: [
        {
          id: 'q1',
          question: 'Jenis huruf yang memiliki lebar dan ruang yang sama untuk setiap karakternya (misalnya huruf W dan I menempati lebar bidang yang sama) adalah...',
          options: ['Sans Serif', 'Monospace', 'Roman', 'Script'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 1 Tabel 1.2 hlm. 8 menjelaskan Monospace memiliki jarak/lebar setiap huruf yang sama.'
        }
      ]
    }
  },
  {
    week: 21,
    semester: 2,
    babNumber: 1,
    babTitle: 'Tipografi',
    topic: 'Anatomi Huruf: Baseline, Capline, Meanline, Stem, Ascender, Descender, Crossbar, Ear, Shoulder, & x-Height',
    sourceReference: 'Buku Semester 2 Bab 1 hlm. 9-12 & Glosarium hlm. 158',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman jenis huruf minggu ke-20',
    coreConcepts: [
      'Garis panduan anatomi huruf: Baseline (garis dasar horizontal), Meanline (batas tinggi badan huruf kecil), Capline (batas tinggi huruf kapital)',
      'x-height: jarak antara baseline dan meanline (faktor vital keterbacaan visual)',
      'Bagian struktural: Stem (garis batang tegak vertikal), Crossbar (garis penghubung mendatar seperti pada H), Ascender (bagian huruf kecil yang menjulang melampaui meanline seperti b, d, h, k, l), Descender (bagian huruf kecil yang menjulur ke bawah menembus baseline seperti g, j, p, q, y)',
      'Detail anatomis khusus: Ear (detail dekoratif tonjolan pada g), Shoulder (goresan lengkung pada m, n, h)'
    ],
    summary: 'Mempelajari konstruksi anatomi huruf layaknya anatomi tubuh manusia. Menguasai garis dasar (baseline, meanline, capline), tinggi-x (x-height), tiang utama (stem), ascender, descender, telinga (ear), dan pundak (shoulder).',
    glossaryTerms: [
      { term: 'Baseline', definition: 'Garis maya mendatar tempat menaruh seluruh huruf dalam posisi sejajar, batas dasar huruf besar dan badan huruf kecil.' },
      { term: 'x-Height', definition: 'Ketinggian badan utama huruf kecil (seperti huruf x) yang berada di antara baseline dan meanline.' },
      { term: 'Ascender', definition: 'Bagian tangkai karakter huruf kecil yang menjulang ke atas melewati garis meanline.' },
      { term: 'Descender', definition: 'Bagian ekor karakter huruf kecil yang mengarah ke bawah menembus garis baseline.' }
    ],
    simulationId: 'tipografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Garis Panduan Anatomi Tipografi (Baseline, Meanline, Capline, x-Height)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami dan mampu menggambarkan garis panduan anatomi huruf'],
        triggerQuestion: 'Mengapa huruf d dan b tampak rapi dan sejajar meskipun memiliki bentuk lingkaran yang berbeda?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 1.3: Garis-garis maya anatomi huruf'],
          inti: ['Menggambar garis dasar di kertas bergaris: Baseline, Meanline, dan Capline', 'Mengukur proporsi x-height pada huruf alfabet latin kecil', 'Simulasi interaktif anatomi huruf di Lab Tipografi digital'],
          penutup: ['Refleksi keteraturan bentuk huruf', 'Latihan identifikasi garis anatomi']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis hubungan x-height yang tinggi dengan keterbacaan huruf ukuran kecil',
          creativity: 'Merancang kisi-kisi grid anatomi huruf mandiri',
          collaboration: 'Praktik berpasangan mengukur rasio huruf',
          communication: 'Menyebutkan istilah-istilah anatomi secara tepat',
          connectionToRealLife: 'Keahlian type design dalam perancangan font komersial'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Komponen Fisik Huruf: Stem, Ascender, Descender, Crossbar, Ear, & Shoulder',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menguraikan komponen fisik huruf dan menggambar anatomi huruf A sampai Z'],
        triggerQuestion: 'Huruf kecil apa saja dalam alfabet latin yang memiliki descender dan menembus ke bawah baseline?',
        activities: {
          pendahuluan: ['Review sesi garis dasar', 'Teka-teki anatomi huruf pembuka'],
          inti: ['Pembedahan Gambar 1.4 (Stem L, F, H & crossbar), Gambar 1.5 (Ascender dd vs Descender yy), Gambar 1.7 (Ear g & Shoulder n)', 'Tugas Mandiri (Asesmen hlm. 27): Menggambar huruf A-Z lengkap dengan identifikasi bagian anatomisnya'],
          penutup: ['Peer review hasil gambar anatomi', 'Pengumpulan lembar karya']
        },
        deepLearning5C: {
          criticalThinking: 'Mengidentifikasi huruf-huruf dengan bentuk unik berkaki atau memiliki telinga (ear)',
          creativity: 'Mendesain huruf kustom dengan variasi bentuk shoulder dan terminal',
          collaboration: 'Saling mengoreksi letak garis baseline pada karya teman',
          communication: 'Presentasi hasil analisis anatomi huruf',
          connectionToRealLife: 'Presisi tinggi yang dibutuhkan dalam branding dan kaligrafi modern'
        }
      }
    ],
    quiz: {
      id: 'quiz-w21',
      title: 'Kuis Formatif Minggu 21: Anatomi Tipografi',
      questions: [
        {
          id: 'q1',
          question: 'Bagian anatomi huruf kecil yang mengarah ke bawah dan posisinya berada di bawah baseline (seperti pada huruf g, j, p, q, y) disebut...',
          options: ['Ascender', 'Descender', 'Crossbar', 'Shoulder'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 1 hlm. 11 menjelaskan descender adalah anatomi huruf kecil yang mengarah ke bawah di bawah baseline.'
        }
      ]
    }
  },
  {
    week: 22,
    semester: 2,
    babNumber: 1,
    babTitle: 'Tipografi',
    topic: 'Prinsip Pokok Tipografi (Legibility, Readability, Visibility), Karakter Berdasarkan Anatomi, & Layout Hierarki',
    sourceReference: 'Buku Semester 2 Bab 1 hlm. 13-21',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan anatomi huruf minggu ke-21',
    coreConcepts: [
      '3 Prinsip pokok tipografi:',
      '1. Legibility: kemudahan mengenali dan membedakan masing-masing karakter huruf (contoh: huruf I besar vs l kecil, Gambar 1.8)',
      '2. Readability: tingkat keterbacaan teks saat disusun menjadi kata/kalimat, dipengaruhi spasi dan perpaduan huruf (Gambar 1.9)',
      '3. Visibility: kemampuan teks terbaca dalam jarak pandang tertentu antara audiens dan objek (Gambar 1.10)',
      '4 Karakter huruf berdasarkan anatomi: Oldstyle (1470 Venetian diagonal stress), Modern Style (abad 18 Bodoni vertical stress tebal-tipis ekstrim), Slab Serif (abad 19 display type tebal), Sans Serif (1816 William Caslon IV)',
      'Hierarki tipografi: Main Title (judul utama), Headline (judul bahasan), Subheadline (subjudul), Body Text; Aturan pemenggalan headline yang benar'
    ],
    summary: 'Mempelajari 3 pilar uji tipografi: Legibility (kejelasan huruf), Readability (kenyamanan membaca teks), dan Visibility (jarak pandang). Menata hierarki tata letak judul utama, headline, dan aturan pemenggalan kata tanpa bias persepsi.',
    glossaryTerms: [
      { term: 'Legibility', definition: 'Tingkat kemudahan mata mengenali dan membedakan masing-masing bentuk karakter huruf.' },
      { term: 'Readability', definition: 'Tingkat kenyamanan dan kelancaran membaca susunan teks dalam kalimat atau paragraf.' },
      { term: 'Visibility', definition: 'Keterlihatan teks pada jarak pandang tertentu antara pengamat dan media publikasi.' }
    ],
    simulationId: 'tipografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: '3 Prinsip Tipografi: Legibility, Readability, & Visibility',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami dan membedakan prinsip legibility, readability, dan visibility'],
        triggerQuestion: 'Mengapa tulisan kata "Ilegal" dengan huruf kapital I sering disalahartikan sebagai dua huruf L kecil bila jenis fontnya tidak memiliki legibility tinggi?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 1.8 perbandingan legibility'],
          inti: ['Eksplorasi Gambar 1.9 (readability dan kerning rapat) & Gambar 1.10 (visibility jarak pandang)', 'Aktivitas 1.3 Ayo Bereksplorasi: Mengamati keterbacaan tulisan baliho di jalan raya', 'Pembedahan 4 karakter anatomi: Oldstyle, Modern Bodoni, Slab Serif, dan Sans Serif Caslon IV'],
          penutup: ['Refleksi dampak kesalahan tipografi', 'Formatif lisan']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis mengapa font Modern Style dengan kontras tebal-tipis ekstrim tidak cocok untuk naskah buku tebal',
          creativity: 'Memilih pasangan tipografi kontras untuk layout majalah',
          collaboration: 'Diskusi kelompok',
          communication: 'Mengutarakan kritik keterbacaan baliho publik',
          connectionToRealLife: 'Mendesain media luar ruang yang aman bagi pengendara jalan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Hierarki Tata Letak & Kaidah Pemenggalan Headline yang Benar',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu merancang hierarki tipografi dan menerapkan aturan pemenggalan headline tanpa kesalahan persepsi'],
        triggerQuestion: 'Mengapa memotong kalimat "dalam Industri" pada baris yang berbeda di judul utama dapat mengubah persepsi pembaca?',
        activities: {
          pendahuluan: ['Review sesi 3 prinsip', 'Menelaah Gambar 1.19 vs Gambar 1.20 pemenggalan headline'],
          inti: ['Analisis aturan headline membentang penuh di atas kolom teks (Gambar 1.18 penegasan kolom)', 'Praktik menyusun hierarki tipografi di komputer/manual: Main Title -> Headline -> Subhead -> Body Copy', 'Aktivitas 1.4 Ayo Bereksplorasi: Menemukan contoh pemenggalan headline yang tepat di koran/media'],
          penutup: ['Uji keterbacaan kelas', 'Refleksi kenyamanan navigasi teks']
        },
        deepLearning5C: {
          criticalThinking: 'Mendeteksi potensi salah tafsir gramatikal akibat letak pemenggalan baris judul yang keliru',
          creativity: 'Menyusun tata letak halaman artikel majalah sekolah dengan hierarki intuitif',
          collaboration: 'Review silang artikel teman',
          communication: 'Mempresentasikan struktur navigasi visual informasi',
          connectionToRealLife: 'Standar baku tata letak jurnalistik dan penerbitan buku profesional'
        }
      }
    ],
    quiz: {
      id: 'quiz-w22',
      title: 'Kuis Formatif Minggu 22: Prinsip Tipografi & Hierarki',
      questions: [
        {
          id: 'q1',
          question: 'Kemudahan dalam mengenali huruf sehingga dapat dibedakan masing-masing karakter huruf untuk menghindari kesalahan identifikasi disebut prinsip...',
          options: ['Readability', 'Legibility', 'Visibility', 'Tracking'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 1 hlm. 13 menjelaskan Legibility adalah kemudahan mengenali karakter huruf.'
        }
      ]
    }
  },
  {
    week: 23,
    semester: 2,
    babNumber: 1,
    babTitle: 'Tipografi',
    topic: 'Pengaturan Spasi Tipografi: Leading, Kerning, & Tracking',
    sourceReference: 'Buku Semester 2 Bab 1 hlm. 22-25',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan prinsip tipografi minggu ke-22',
    coreConcepts: [
      'Leading (jarak antarbaris): berasal dari lempeng timah lead pemisah baris, untuk naskah 10 pt idealnya 12 pt (rasio 120%), mencegah tabrakan ascender dan descender (Gambar 1.21 & 1.22)',
      'Kerning (jarak antar 2 karakter individual): penyesuaian spasi manual optik antara dua huruf berdampingan (contoh: pasangan kritis AV, YA, WA, ME, Surakarta vs SURAKARTA, Gambar 1.23 & 1.24)',
      'Tracking / letter-spacing: pengaturan renggang-rapat spasi huruf secara menyeluruh dan seragam pada satu kata/blok kalimat (Gambar 1.25)'
    ],
    summary: 'Mendalami seni penataan ruang mikro tipografi: Leading (jarak vertikal baris teks), Kerning (jarak optik antar dua huruf berdampingan), dan Tracking (jarak horizontal merata pada keseluruhan teks).',
    glossaryTerms: [
      { term: 'Leading', definition: 'Pengaturan jarak vertikal antarbaris teks untuk menjamin kenyamanan mata melacak baris berikutnya.' },
      { term: 'Kerning', definition: 'Penyesuaian jarak ruang manual antara dua karakter huruf yang berdampingan agar tampak harmonis secara optik.' },
      { term: 'Tracking', definition: 'Pengaturan kerapatan jarak horizontal huruf secara seragam pada seluruh blok kalimat atau kata (letter-spacing).' }
    ],
    simulationId: 'tipografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Mendalami Leading (Spasi Baris) & Pencegahan Tabrakan Ascender-Descender',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu menghitung dan mengatur rasio leading yang proporsional untuk teks bacaan dan judul'],
        triggerQuestion: 'Apa yang terjadi jika huruf 12 pt diberi spasi baris (leading) hanya 8 pt?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 1.21 perbandingan leading rapat vs ideal'],
          inti: ['Menghitung rasio spasi baris (naskah 10 pt dengan leading 12 pt)', 'Menganalisis Poster Kemerdekaan (Gambar 1.22) dengan variasi leading sebagai point of interest', 'Simulasi Leading di Lab Tipografi interaktif'],
          penutup: ['Refleksi tekstur blok teks (typographic color)', 'Formatif pengaturan baris']
        },
        deepLearning5C: {
          criticalThinking: 'Menemukan titik keseimbangan antara kepadatan halaman dan kemudahan membaca baris teks',
          creativity: 'Menciptakan variasi tekstur tipografi pada poster dengan leading bergradasi',
          collaboration: 'Praktik kelompok membandingkan variasi leading',
          communication: 'Menjelaskan alasan pengaturan spasi baris',
          connectionToRealLife: 'Pengaturan layout laporan dan karya publikasi'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Kerning Optik Manual & Tracking Huruf (Aktivitas 1.5 Berkreasi)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu melakukan koreksi kerning manual pada pasangan huruf kritis dan mengatur tracking'],
        triggerQuestion: 'Mengapa kombinasi huruf "A" dan "V" terlihat memiliki celah kosong terlalu lebar jika dibiarkan pada kerning otomatis bawaan komputer?',
        activities: {
          pendahuluan: ['Review leading', 'Menelaah Gambar 1.23 kerning AV & Gambar 1.24 kata "Surakarta"'],
          inti: ['Praktik kerning manual pada logo kata di simulator tipografi', 'Eksplorasi tracking (Gambar 1.25): tracking rapat, normal, dan renggang', 'Aktivitas 1.5 Ayo Berkreasi: Membuat tulisan dengan variasi unsur tracking pada kertas gambar A3 / software'],
          penutup: ['Pameran karya tracking kelas X', 'Uji Kompetensi Bab 1 Tipografi (hlm. 28-29)']
        },
        deepLearning5C: {
          criticalThinking: 'Melatih kepekaan mata optik untuk mendeteksi ketidakseimbangan ruang putih antar-huruf',
          creativity: 'Mengeksplorasi tracking longgar untuk menciptakan kesan elegan pada judul',
          collaboration: 'Saling mengevaluasi presisi kerning pada desain rekan',
          communication: 'Mempertahankan pilihan spasi visual yang dibuat',
          connectionToRealLife: 'Standar presisi perancangan wordmark logo profesional'
        }
      }
    ],
    quiz: {
      id: 'quiz-w23',
      title: 'Uji Kompetensi Bab 1: Tipografi Lengkap',
      questions: [
        {
          id: 'q1',
          question: 'Pengaturan jarak antara dua huruf secara khusus dan manual untuk mendapatkan keseimbangan optik ruang disebut...',
          options: ['Leading', 'Kerning', 'Tracking', 'Baseline'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 1 hlm. 24 & 27 mendefinisikan Kerning sebagai penyesuaian jarak ruang antara dua karakter secara manual.'
        },
        {
          id: 'q2',
          question: 'Jika menggunakan ukuran huruf 10 point untuk teks bacaan, spasi baris (leading) yang baik menurut standar buku adalah...',
          options: ['6 point', '8 point', '12 point', '24 point'],
          correctIndex: 2,
          explanation: 'Buku Semester 2 Bab 1 hlm. 22 menyatakan jika menggunakan huruf 10 point, spasi baris yang baik adalah 12 point.'
        }
      ]
    }
  },
  {
    week: 24,
    semester: 2,
    babNumber: 1,
    babTitle: 'Tipografi',
    topic: 'Proyek Desain Berbasis Tipografi: Desain Kemasan & Wordmark Brand',
    sourceReference: 'Buku Semester 2 Bab 1 hlm. 27 & Bab 3 hlm. 136',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan penuh materi tipografi minggu ke-19 sampai 23',
    coreConcepts: [
      'Penerapan rumus AIDA dalam tipografi periklanan: Attention, Interest, Desire, Action',
      'Desain tipografi kemasan produk (packaging typography): hierarki merek, nama varian, deskripsi rasa, label netto',
      'Asesmen kelompok: Analisis prinsip tipografi pada kemasan produk sekitar (hlm. 27)'
    ],
    summary: 'Menerapkan seluruh kompetensi tipografi ke dalam proyek nyata. Merancang desain tipografi kemasan produk makanan/minuman khas daerah dengan hierarki AIDA yang memikat.',
    glossaryTerms: [
      { term: 'AIDA', definition: 'Formula respon psikologis iklan: Attention (menarik perhatian), Interest (membangkitkan minat), Desire (mendorong hasrat), dan Action (tindakan membeli).' },
      { term: 'Wordmark', definition: 'Desain logo identitas yang dibentuk murni dari perancangan tipografi nama merek tanpa simbol terpisah.' }
    ],
    simulationId: 'tipografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Analisis Tipografi Kemasan Produk & Formula AIDA',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu membedah efektivitas tipografi kemasan menggunakan prinsip AIDA'],
        triggerQuestion: 'Bagaimana sebuah nama brand pada kemasan susu atau keripik menarik perhatian pembeli dalam 3 detik pertama di rak toko?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah kemasan produk bawaan siswa dari rumah'],
          inti: ['Analisis tugas kelompok (hlm. 27): Mencatat judul, subjudul, dan prinsip legibility-readability-visibility pada kemasan', 'Penerapan rumus AIDA pada tata letak teks kemasan'],
          penutup: ['Presentasi hasil analisis kelompok', 'Pemberian masukan guru']
        },
        deepLearning5C: {
          criticalThinking: 'Menilai apakah jenis font kemasan sudah mencerminkan cita rasa isi produk',
          creativity: 'Merancang tata letak tipografi baru untuk produk yang dinilai kurang menarik',
          collaboration: 'Kerja kelompok 4-5 orang sesuai pedoman buku',
          communication: 'Menyampaikan evaluasi visual secara terstruktur',
          connectionToRealLife: 'Analisis kemasan produk lokal UMKM Kuningan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Praktik Studio: Perancangan Wordmark & Tipografi Poster Promosi',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu merancang wordmark identitas dan poster tipografi yang harmonis'],
        triggerQuestion: 'Bagaimana cara menggabungkan font klasik Serif dengan script coretan tangan agar menghasilkan desain yang elegan?',
        activities: {
          pendahuluan: ['Review sesi Senin', 'Menyiapkan brief perancangan'],
          inti: ['Praktik studio merancang poster kemerdekaan / festival kuliner berbasis tipografi (Gambar 1.22)', 'Aplikasi leading, kerning, dan tracking presisi', 'Penyelesaian proyek dan evaluasi rubrik asesmen'],
          penutup: ['Refleksi perkembangan kompetensi tipografi', 'Pengunggahan ke Portofolio Digital']
        },
        deepLearning5C: {
          criticalThinking: 'Memastikan seluruh teks terbaca jelas dalam skala ukuran poster sesungguhnya',
          creativity: 'Menciptakan komposisi tipografi yang dinamis dan ekspresif',
          collaboration: 'Apresiasi karya rekan sejawat',
          communication: 'Mempresentasikan filosofi pemilihan font',
          connectionToRealLife: 'Karya siap dipajang di pameran sekolah'
        }
      }
    ],
    quiz: {
      id: 'quiz-w24',
      title: 'Kuis Formatif Minggu 24: Tipografi Terapan',
      questions: [
        {
          id: 'q1',
          question: 'Dalam rumus periklanan AIDA, tahapan ketika tipografi dan visual iklan berhasil membuat calon konsumen berkeinginan memiliki produk disebut...',
          options: ['Attention', 'Interest', 'Desire', 'Action'],
          correctIndex: 2,
          explanation: 'Buku Semester 2 Bab 1 hlm. 7 menjelaskan Desire adalah timbulnya keinginan/hasrat untuk membeli produk.'
        }
      ]
    }
  },
  {
    week: 25,
    semester: 2,
    babNumber: 2,
    babTitle: 'Fotografi Dasar',
    topic: 'Peralatan Kamera, Klasifikasi Kamera Digital, Bagian Kamera DSLR, & Alat Penunjang',
    sourceReference: 'Buku Semester 2 Bab 2 hlm. 31-48 & 55-57',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman pengantar fotografi semester 1',
    coreConcepts: [
      'Definisi Fotografi: melukis dengan cahaya, menangkap pantulan cahaya pada media peka cahaya',
      'Klasifikasi kamera digital: Kamera saku (pocket), Smartphone, Bridge, Mirrorless, Mikro 4/3 (MFT), DSLR',
      'Bagian DSLR (Gambar 2.8 & 2.9): Soket tripod (1/4-20 UNC), slot baterai & memori, tombol rana (2 tahap: 1/2 AF, penuh lepas rana), lampu red eye, dudukan lensa (EF merah, EF-S putih), cermin mirror reflex, hot shoe, dial mode (creative vs basic), viewfinder (dioptri, lightmeter, AF), tombol LCD & quick control',
      'Alat penunjang: Background & stand, tripod & monopod, stabilizer/gimbal, flash & flashmeter, payung reflektor, dry box, blower brush, filter (UV/ND), slider, tudung lensa (lens hood)'
    ],
    summary: 'Mengenal anatomi perangkat keras fotografi digital: 6 kategori kamera, bagian fisik bodi DSLR (depan, bawah, atas, belakang), serta 10 peralatan pendukung studio indoor dan outdoor.',
    glossaryTerms: [
      { term: 'DSLR', definition: 'Digital Single Lens Reflex: kamera digital bersensor optik yang memanfaatkan cermin refleks tunggal mekanis untuk memantulkan gambar ke viewfinder.' },
      { term: 'Hot Shoe', definition: 'Dudukan logam terminal berpin kontak listrik di bagian atas kamera untuk memasang lampu kilat (flash) eksternal.' },
      { term: 'Tudung Lensa (Lens Hood)', definition: 'Aksesori berbentuk kelopak pelindung di ujung lensa untuk mencegah cahaya liar menimbulkan flare dan penurunan kontras.' }
    ],
    simulationId: 'fotografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Klasifikasi Kamera Digital & Bagian Fisik Kamera DSLR',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami jenis-jenis kamera digital dan mengidentifikasi bagian-bagian kamera DSLR'],
        triggerQuestion: 'Mengapa tombol rana kamera DSLR memiliki dua tahapan penekanan (tekan separuh dan tekan penuh)?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 2.1 karya fotografi dan Gambar 2.7 kamera DSLR'],
          inti: ['Membedah klasifikasi 6 jenis kamera (Saku, Smartphone, Bridge, Mirrorless, MFT, DSLR)', 'Observasi fisik kamera DSLR di lab: Menemukan tombol rana, indeks lensa merah/putih, hot shoe, dial mode, dan layar LCD', 'Praktik menekan separuh tombol rana untuk mengunci Auto Focus (AF)'],
          penutup: ['Refleksi perawatan bodi kamera', 'Formatif pengenalan tombol']
        },
        deepLearning5C: {
          criticalThinking: 'Membedakan mekanisme bidik optik DSLR (cermin pantul) dengan elektronik EVF Mirrorless',
          creativity: 'Mencoba simulasi Live View vs Viewfinder optik',
          collaboration: 'Praktik bergiliran memegang kamera DSLR sekolah secara aman',
          communication: 'Menyebutkan fungsi tombol kamera di hadapan guru (Aktivitas 2.2 hlm. 49)',
          connectionToRealLife: 'Penguasaan alat standar industri fotografi komersial'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Peralatan Penunjang Studio: Tripod, Lighting, Reflektor, & Tudung Lensa',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mengidentifikasi dan memasang peralatan penunjang fotografi indoor/outdoor'],
        triggerQuestion: 'Mengapa pemotretan di bawah sinar matahari terik luar ruangan wajib memasang tudung lensa (lens hood)?',
        activities: {
          pendahuluan: ['Review bagian bodi DSLR', 'Membuka lemari alat studio fotografi'],
          inti: ['Membedah fungsi 10 alat penunjang (hlm. 55-57): Background stand, tripod vs monopod, gimbal, payung reflektor, dry box', 'Tugas Kelompok (hlm. 84): Melengkapi tabel foto dan fungsi alat penunjang fotografi digital', 'Praktik merakit payung reflektor dan tripod di studio mini lab DKV'],
          penutup: ['Pemeriksaan keselamatan kabel lighting', 'Penyimpanan alat ke dry box']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis pencegahan efek flare akibat cahaya matahari langsung dengan lens hood',
          creativity: 'Menata sudut pantulan payung reflektor agar bayangan pada wajah model menjadi lembut',
          collaboration: 'Kerja tim mendirikan stand background dan memasang lampu studio',
          communication: 'Berkoordinasi dalam tim setting studio',
          connectionToRealLife: 'Keterampilan setup studio foto pasfoto dan katalog produk'
        }
      }
    ],
    quiz: {
      id: 'quiz-w25',
      title: 'Kuis Formatif Minggu 25: Anatomi Kamera & Alat Penunjang',
      questions: [
        {
          id: 'q1',
          question: 'Dudukan terminal logam di bagian atas bodi kamera DSLR yang berfungsi untuk memasang unit lampu kilat eksternal disebut...',
          options: ['Soket Tripod', 'Eyecup', 'Hot Shoe', 'Dudukan Lensa'],
          correctIndex: 2,
          explanation: 'Buku Semester 2 Bab 2 hlm. 43 & 54 menjelaskan hot shoe adalah terminal untuk memasang lampu kilat eksternal.'
        }
      ]
    }
  },
  {
    week: 26,
    semester: 2,
    babNumber: 2,
    babTitle: 'Fotografi Dasar',
    topic: 'Segitiga Eksposur (Aperture, Shutter Speed, ISO) & Hubungannya dengan Ruang Tajam',
    sourceReference: 'Buku Semester 2 Bab 2 hlm. 49-53',
    isOfficialCurriculum: true,
    prerequisites: 'Pengenalan tombol kamera minggu ke-25',
    coreConcepts: [
      'Segitiga Exposure (Gambar 2.13): harmoni tiga parameter pengontrol cahaya (Aperture, Shutter Speed, ISO)',
      'Aperture (Diafragma Lensa): f1.4 - f22. Semakin kecil angka f (f1.4), semakin besar bukaan dan semakin sempit ruang tajam (Depth of Field/bokeh). Semakin besar angka f (f22), semakin kecil bukaan dan semakin luas ruang tajam',
      'Kecepatan Rana (Shutter Speed): 1/8000s - 30s. Cepat (>1/500s) membekukan gerakan (freeze); Normal (1/60 - 1/200s); Lambat (<1/30s) melembutkan/jejak gerak (motion blur, wajib tripod)',
      'ISO (Kepekaan Sensor): ISO 100-400 (cahaya terang, bersih bebas noise); ISO 800-6400 (minim cahaya, menghasilkan butiran noise digital)'
    ],
    summary: 'Menguasai jantung mekanika fotografi: Segitiga Eksposur. Memahami pengaruh bukaan diafragma pada ruang tajam (DoF), kecepatan rana pada pembekuan gerak, dan ISO pada kepekaan sensor serta butiran noise.',
    glossaryTerms: [
      { term: 'Aperture', definition: 'Bukaan diafragma bilah lensa yang mengatur volume cahaya masuk dan kedalaman ruang tajam (Depth of Field).' },
      { term: 'Shutter Speed', definition: 'Kecepatan tirai rana kamera membuka dan menutup untuk menyinari sensor dalam satuan detik.' },
      { term: 'Noise', definition: 'Bintik-bintik butiran visual kasar pada foto digital akibat penggunaan sensitivitas ISO tinggi pada kondisi kurang cahaya.' }
    ],
    simulationId: 'fotografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Mendalami Segitiga Eksposur: Aperture & Kedalaman Ruang Tajam (DoF)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami konsep segitiga exposure dan pengaruh bukaan aperture f-number pada ruang tajam'],
        triggerQuestion: 'Mengapa angka diafragma f/1.8 menghasilkan latar belakang foto buram (bokeh), sedangkan f/16 membuat seluruh pemandangan tajam?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 2.13 bagan segitiga exposure'],
          inti: ['Analisis hubungan terbalik angka f-stop dengan ukuran lubang diafragma', 'Eksplorasi Gambar 2.14: Perbandingan foto tanaman pada f4.5 vs f10', 'Simulasi interaktif Segitiga Eksposur di Laboratorium Fotografi digital'],
          penutup: ['Refleksi hubungan cahaya dan ketajaman', 'Latihan membaca lightmeter']
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung kompensasi cahaya jika bukaan diafragma diperkecil dua stop',
          creativity: 'Menciptakan efek isolasi objek dengan latar belakang bokeh yang memukau',
          collaboration: 'Praktik kelompok mencoba mode prioritas aperture (Av/A) di kamera',
          communication: 'Menjelaskan konsep Depth of Field kepada rekan kelas',
          connectionToRealLife: 'Pengambilan foto potret model dan katalog produk komersial'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Shutter Speed (Freeze vs Blur) & ISO: Praktik Keseimbangan Eksposur',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mengatur kecepatan rana dan ISO untuk menghasilkan eksposur seimbang tanpa noise berlebih'],
        triggerQuestion: 'Bagaimana cara memotret tetesan air yang jatuh agar tampak membeku di udara tanpa buram?',
        activities: {
          pendahuluan: ['Review sesi aperture', 'Demonstrasi rana kamera dalam gerak lambat'],
          inti: ['Eksplorasi shutter cepat 1/1000s untuk freeze objek berlari di lapangan sekolah', 'Eksplorasi shutter lambat 1/4s dengan tripod untuk efek jejak gerak', 'Pengujian rentang ISO 100 hingga 6400 dan observasi kemunculan bintik noise digital'],
          penutup: ['Evaluasi histogram foto (Gambar 2.43)', 'Penyusunan laporan praktik 2.3']
        },
        deepLearning5C: {
          criticalThinking: 'Memilih kompromi terbaik antara kecepatan rana, aperture, dan batasan batas noise ISO',
          creativity: 'Menghasilkan foto freeze aksi olahraga siswa di sekolah',
          collaboration: 'Kerja tim: siswa menjadi model gerak, fotografer, dan pencatat data teknis',
          communication: 'Mempresentasikan setelan exposure yang digunakan',
          connectionToRealLife: 'Dokumentasi kegiatan jurnalistik dan fotografi aksi'
        }
      }
    ],
    quiz: {
      id: 'quiz-w26',
      title: 'Kuis Formatif Minggu 26: Segitiga Eksposur',
      questions: [
        {
          id: 'q1',
          question: 'Jika kamu memotret objek bergerak cepat di luar ruangan yang sangat terang, pengaturan shutter speed manakah yang paling tepat untuk menghasilkan efek beku (freeze)?',
          options: ['1/2 detik', '1/15 detik', '1/60 detik', '1/1000 detik'],
          correctIndex: 3,
          explanation: 'Buku Semester 2 Bab 2 hlm. 51 menerangkan kecepatan rana cepat (1/500 - 1/1000 detik atau lebih) bertujuan menghasilkan efek freeze.'
        }
      ]
    }
  },
  {
    week: 27,
    semester: 2,
    babNumber: 2,
    babTitle: 'Fotografi Dasar',
    topic: '7 Jenis Fotografi (Potret, Makanan, Still Life, Jalanan, Aksi, Periklanan, Pemandangan)',
    sourceReference: 'Buku Semester 2 Bab 2 hlm. 58-64',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan segitiga eksposur minggu ke-26',
    coreConcepts: [
      '7 Genre fotografi komersial & seni:',
      '1. Fotografi Potret (Portrait): fokus ekspresi wajah, kepribadian, mood (wisuda, pernikahan, Gambar 2.15)',
      '2. Fotografi Makanan (Food): mempercantik produk kuliner, tata letak, aksen, pencahayaan (Gambar 2.16)',
      '3. Fotografi Still Life: benda mati terkonsep, memberi kesan hidup untuk deskripsi produk (Gambar 2.17)',
      '4. Fotografi Jalanan (Street): ruang publik, spontanitas aktivitas manusia sesuai situasi asli (Gambar 2.18)',
      '5. Fotografi Aksi (Action): gerak cepat, olahraga, tari (Gambar 2.19)',
      '6. Fotografi Periklanan (Advertising): promosi komersial produk/jasa (Gambar 2.20)',
      '7. Fotografi Alam / Lanskap (Landscape): bentang alam, cakrawala, kartu pos, kalender (Gambar 2.21)'
    ],
    summary: 'Menjelajahi 7 genre utama fotografi. Mempelajari karakteristik khusus, pendekatan estetika, dan kebutuhan pencahayaan pada potret manusia, food photography, still life, street, aksi, advertising, dan lanskap.',
    glossaryTerms: [
      { term: 'Still Life', definition: 'Genre fotografi yang memotret objek benda-benda mati buatan manusia atau alam dengan penataan artistik yang disengaja.' },
      { term: 'Street Photography', definition: 'Fotografi yang membidik momen spontan kehidupan masyarakat di ruang publik tanpa rekayasa pose.' }
    ],
    simulationId: 'fotografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Fotografi Potret, Makanan (Food), & Benda Mati (Still Life)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami teknik dan karakteristik fotografi potret, kuliner, dan still life'],
        triggerQuestion: 'Mengapa food photography membutuhkan penataan garnish dan pencahayaan khusus dari samping (side light)?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 2.15 (Potret), 2.16 (Makanan), dan 2.17 (Still Life)'],
          inti: ['Analisis teknik penangkapan emosi wajah pada potret', 'Pembedahan rahasia food photography: aksen, warna, dan kesegaran visual', 'Praktik menata objek still life sederhana (buah dan cangkir) di studio mini sekolah'],
          penutup: ['Refleksi estetika benda mati', 'Ulasan karya still life']
        },
        deepLearning5C: {
          criticalThinking: 'Menilai perbedaan dramatis antara memotret makanan secara asal dengan penataan food stylist',
          creativity: 'Menata komposisi warna sayuran dan sudut hidangan makanan',
          collaboration: 'Praktik kelompok di meja studio foto',
          communication: 'Menyampaikan pesan visual kelezatan produk makanan',
          connectionToRealLife: 'Peluang jasa foto menu untuk resto dan kafe di Kuningan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Fotografi Jalanan (Street), Aksi, Periklanan, & Lanskap Alam (Aktivitas 2.6)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu membedakan street photography, foto aksi, iklan, dan foto lanskap'],
        triggerQuestion: 'Apa tantangan terbesar saat mengambil foto jalanan (street photography) di pasar tradisional?',
        activities: {
          pendahuluan: ['Review sesi still life', 'Menelaah Gambar 2.18 (Jalanan) & Gambar 2.21 (Candi & Gunung)'],
          inti: ['Aktivitas 2.6 Ayo Bereksplorasi (hlm. 64): Kelompok mencari dan menganalisis 7 jenis karya fotografi', 'Praktik street photography di lingkungan koridor dan kantin sekolah', 'Diskusi etika izin memotret subjek manusia di ruang publik'],
          penutup: ['Pameran papan tempel karya 7 genre', 'Refleksi kepekaan sosial']
        },
        deepLearning5C: {
          criticalThinking: 'Memahami etika hukum privasi dan rasa hormat saat memotret masyarakat umum',
          creativity: 'Menangkap momen human interest yang menyentuh perasaan',
          collaboration: 'Eksplorasi lapangan dalam kelompok 4 orang',
          communication: 'Menceritakan kisah di balik foto jalanan yang diambil',
          connectionToRealLife: 'Dokumentasi kearifan lokal masyarakat pedesaan dan perkotaan Kuningan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w27',
      title: 'Kuis Formatif Minggu 27: Genre Fotografi',
      questions: [
        {
          id: 'q1',
          question: 'Jenis fotografi yang memotret objek berupa benda mati dengan tujuan menampilkan kesan lebih hidup dan menarik sebagai sarana deskripsi produk adalah...',
          options: ['Street Photography', 'Still Life Photography', 'Action Photography', 'Landscape Photography'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 2 hlm. 60 menjelaskan fotografi still life memotret benda mati untuk menampilkan kesan lebih hidup.'
        }
      ]
    }
  },
  {
    week: 28,
    semester: 2,
    babNumber: 2,
    babTitle: 'Fotografi Dasar',
    topic: 'Ukuran Bidang Pandang (Shot Size) & Sudut Pengambilan Gambar (Angle Kamera)',
    sourceReference: 'Buku Semester 2 Bab 2 hlm. 65-73',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman genre fotografi minggu ke-27',
    coreConcepts: [
      '7 Ukuran gambar (Shot Size): Extreme Close Up (ECU - detail mata/bibir), Big Close Up (BCU - batas dagu hingga dahi), Close Up (CU - bahu sampai atas kepala), Medium Close Up (MCU - dada ke atas), Medium Shot (MS - pinggang ke atas), Medium Long Shot (MLS - lutut ke atas), Long Shot (LS - seluruh tubuh lengkap lingkungan)',
      '5 Sudut kamera (Angle): Frog Eye (sejajar tanah lebih rendah dari dasar objek), Low Angle (sudut bawah memberi kesan megah/besar), Eye Level (sejajar mata normal), High Angle (sudut atas memberi kesan kecil/dramatis), Bird Eye (ketinggian ekstrem mata burung)',
      'Teknik dinamis: Panning (mengikuti gerak subjek, subjek tajam background blur bergerak)'
    ],
    summary: 'Mempelajari gramatika visual sinematik dan fotografi: 7 skala ukuran gambar (ECU hingga Long Shot) dan 5 sudut pandang kamera (Frog Eye hingga Bird Eye), serta teknik pembekuan dinamis Panning.',
    glossaryTerms: [
      { term: 'Shot Size', definition: 'Skala ukuran bidang pandang objek yang masuk ke dalam bingkai frame lensa kamera.' },
      { term: 'Frog Eye', definition: 'Sudut pengambilan foto dengan posisi kamera diletakkan sangat rendah sejajar permukaan tanah.' },
      { term: 'Panning', definition: 'Teknik menggerakkan kamera searah dengan pergerakan subjek saat menekan rana lambat sehingga subjek tajam berlatar belakang garis blur.' }
    ],
    simulationId: 'fotografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: '7 Tingkatan Shot Size: Dari Extreme Close Up hingga Long Shot',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Menguasai 7 skala ukuran bidang pandang (shot size) dalam produksi visual'],
        triggerQuestion: 'Kapan seorang sutradara atau fotografer harus memilih shot Close Up dibanding Long Shot dalam menceritakan suatu adegan?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 2.22 sampai 2.28 urutan skala shot size'],
          inti: ['Analisis fungsi psikologis tiap shot: ECU (keintiman detail), CU (emosi ekspresi), MS (interaksi), LS (konteks ruang)', 'Praktik pengambilan 7 foto bertingkat pada 1 model yang sama di studio sekolah'],
          penutup: ['Penyusunan strip komparasi 7 shot', 'Formatif identifikasi ukuran gambar']
        },
        deepLearning5C: {
          criticalThinking: 'Menentukan framing yang tepat agar tidak memotong sendi tubuh manusia secara canggung',
          creativity: 'Menciptakan rangkaian bercerita (photo story) melalui variasi skala shot',
          collaboration: 'Praktik berpasangan fotografer dan model',
          communication: 'Menjelaskan alasan pemilihan ukuran gambar pada tiap foto',
          connectionToRealLife: 'Bahasa visual universal dalam perfilman, pertelevisian, dan fotografi iklan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: '5 Sudut Kamera (Angle) & Teknik Membekukan Aksi Panning (Aktivitas 2.7)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mempraktikkan 5 sudut pengambilan gambar kamera dan teknik panning'],
        triggerQuestion: 'Kesan apa yang timbul pada diri penonton ketika sebuah gedung atau tokoh difoto dari sudut Low Angle?',
        activities: {
          pendahuluan: ['Review shot size', 'Menelaah Gambar 2.29 diagram sudut kamera (Frog, Low, Eye, High, Bird)'],
          inti: ['Praktik mengambil objek dari Low Angle (kesan gagah/kuat) dan High Angle (kesan kecil/rentan)', 'Praktik teknik Panning (Gambar 2.35): Mengikuti sepeda/motor yang melintas dengan shutter 1/30s', 'Aktivitas 2.7 Ayo Praktikkan: Karya fotografi berdasarkan variasi sudut pengambilan di lingkungan sekolah'],
          penutup: ['Pameran karya sudut kamera', 'Refleksi dramatisasi sudut pandang']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis sinkronisasi ayunan badan juru kamera saat mengeksekusi teknik panning',
          creativity: 'Menggali perspektif tidak biasa yang jarang dilihat oleh mata manusia sehari-hari',
          collaboration: 'Kerja tim pengaman lintasan pemotretan panning',
          communication: 'Mempresentasikan efek dramatisasi sudut bidik',
          connectionToRealLife: 'Penguasaan teknik kamera untuk kebutuhan media komersial dan aksi olahraga'
        }
      }
    ],
    quiz: {
      id: 'quiz-w28',
      title: 'Kuis Formatif Minggu 28: Shot Size & Sudut Kamera',
      questions: [
        {
          id: 'q1',
          question: 'Teknik pengambilan gambar dari sudut bawah objek yang memberikan kesan objek terlihat lebih besar, megah, dan berwibawa adalah...',
          options: ['High Angle', 'Low Angle', 'Bird Eye', 'Eye Level'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 2 hlm. 70 menjelaskan Low Angle adalah teknik dari arah bawah objek yang memberikan kesan objek terlihat lebih besar.'
        }
      ]
    }
  },
  {
    week: 29,
    semester: 2,
    babNumber: 2,
    babTitle: 'Fotografi Dasar',
    topic: 'Pencahayaan pada Fotografi (Front, Oval, Side, Rim, Back Light) & Jam Emas (Golden Hour)',
    sourceReference: 'Buku Semester 2 Bab 2 hlm. 74-76 & 85',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman sudut kamera minggu ke-28',
    coreConcepts: [
      '5 Arah datangnya cahaya (Lighting Angles):',
      '1. Front Light: dari depan objek, menerangi penuh, minim bayangan (Gambar 2.36)',
      '2. Oval Light: dari sudut 45 derajat posisi fotografer, bayangan lembut membentuk oval (Gambar 2.37)',
      '3. Side Light: sudut 90 derajat dari samping objek, kontras bayangan tajam mempertegas tekstur/dimensi (Gambar 2.38)',
      '4. Rim Light: dari belakang sudut 45 derajat, objek gelap bergaris cahaya terang di tepian siluet (Gambar 2.39)',
      '5. Back Light: tepat di belakang objek, menghasilkan efek siluet dramatis dengan garis cahaya tegas (Gambar 2.40)',
      'Jam Emas (Golden Hour): waktu pencahayaan alami terbaik di luar ruangan (pagi 06.00-08.00 dan sore 16.00-17.30)'
    ],
    summary: 'Mempelajari seni memahat bentuk dengan cahaya: 5 arah pencahayaan (Front, Oval, Side, Rim, Back light) serta memanfaatkan jam emas matahari terbit/terbenam (Golden Hour) di luar ruangan.',
    glossaryTerms: [
      { term: 'Rim Light', definition: 'Cahaya yang datang dari belakang objek dengan sudut sekitar 45 derajat sehingga menonjolkan garis tepi kontur objek.' },
      { term: 'Golden Hour', definition: 'Periode sesaat setelah matahari terbit atau sebelum terbenam ketika cahaya matahari berwarna keemasan lembut dan bersudut rendah.' }
    ],
    simulationId: 'fotografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: '5 Arah Cahaya Studio: Front Light, Oval Light, & Side Light',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami dan mengatur 3 arah utama pencahayaan studio'],
        triggerQuestion: 'Mengapa cahaya langsung dari depan (front light) sering membuat wajah model terlihat datar dan kehilangan kedalaman dimensi?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menyalakan 1 lampu studio portable di ruang gelap lab DKV'],
          inti: ['Demonstrasi posisi lampu: 0 derajat (front), 45 derajat (oval), 90 derajat (side)', 'Menganalisis Gambar 2.36, 2.37, dan 2.38 pada model wajah', 'Praktik mengatur perbandingan intensitas cahaya utama (key light) dan bayangan'],
          penutup: ['Refleksi karakter bayangan', 'Formatif identifikasi arah cahaya']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis bagaimana arah bayangan hidung dan pipi membentuk persepsi karakter wajah',
          creativity: 'Menciptakan efek dramatis menggunakan satu sumber cahaya samping (side light)',
          collaboration: 'Praktik berkelompok menata posisi tripod lampu studio',
          communication: 'Memberikan instruksi arah putaran lampu kepada rekan kru',
          connectionToRealLife: 'Pengaturan tata cahaya foto studio profil dan wawancara video'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Rim Light, Efek Siluet Back Light, & Praktik Outdoor Jam Emas (Golden Hour)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mempraktikkan rim light, back light/siluet, dan fotografi outdoor golden hour'],
        triggerQuestion: 'Bagaimana cara mendapatkan garis kilau rambut (hair light) yang memisahkan model dari latar belakang yang gelap?',
        activities: {
          pendahuluan: ['Review arah cahaya studio', 'Menelaah Gambar 2.39 Rim Light & 2.40 Back Light'],
          inti: ['Praktik menciptakan rim light dan siluet murni dengan mematikan lampu depan', 'Eksplorasi konsep jam emas (Golden Hour hlm. 85) di taman sekolah', 'Praktik mandiri mengambil foto bertema toleransi / lingkungan'],
          penutup: ['Evaluasi foto outdoor', 'Pengunggahan ke Portofolio Digital']
        },
        deepLearning5C: {
          criticalThinking: 'Mengantisipasi perubahan cepat intensitas dan warna matahari saat menjelang senja',
          creativity: 'Menghasilkan siluet artistik dengan latar langit senja keemasan',
          collaboration: 'Saling membantu memegang papan reflektor pemantul cahaya',
          communication: 'Mendiskusikan rasa emosional yang ditimbulkan oleh warna golden hour',
          connectionToRealLife: 'Produksi foto pre-wedding dan konten komersial luar ruangan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w29',
      title: 'Kuis Formatif Minggu 29: Tata Cahaya Fotografi',
      questions: [
        {
          id: 'q1',
          question: 'Pencahayaan yang posisinya berada tepat di belakang objek sehingga bagian depan objek tampak gelap bersiluet dengan garis cahaya tegas di belakang objek disebut...',
          options: ['Front Light', 'Oval Light', 'Side Light', 'Back Light'],
          correctIndex: 3,
          explanation: 'Buku Semester 2 Bab 2 hlm. 76-77 menerangkan Back Light adalah cahaya di belakang objek yang menghasilkan siluet dengan garis cahaya tegas.'
        }
      ]
    }
  },
  {
    week: 30,
    semester: 2,
    babNumber: 2,
    babTitle: 'Fotografi Dasar',
    topic: 'Penyuntingan Foto Digital (Cropping, Pelurusan Horizon, Histogram, Kecerahan, Ketajaman, Red Eye, Hitam Putih, Noise)',
    sourceReference: 'Buku Semester 2 Bab 2 hlm. 77-86',
    isOfficialCurriculum: true,
    prerequisites: 'Hasil pemotretan mandiri minggu ke-26 sampai 29',
    coreConcepts: [
      'Etika penyuntingan foto: penyesuaian kebutuhan tanpa mengubah keaslian arti dan tujuan foto',
      '7 Teknik penyuntingan digital dasar (Buku hlm. 78-81):',
      '1. Cropping (pemotongan bagian tak diinginkan, Gambar 2.41)',
      '2. Pelurusan Horizon miring (Gambar 2.42)',
      '3. Pengaturan Gelap Terang & Histogram (brightness/contrast, level, kurva linear, Gambar 2.43)',
      '4. Penajaman Garis Gambar (Sharpening, Gambar 2.44)',
      '5. Menghilangkan Efek Mata Merah (Red Eye Reduction, Gambar 2.45)',
      '6. Pengubahan Foto Berwarna Menjadi Hitam Putih / Grayscale (Gambar 2.46)',
      '7. Pengurangan Efek Noise (Noise Reduction, Gambar 2.47)',
      'Perangkat lunak pengolah foto: Komputer (Photoshop, Lightroom, GIMP) & Smartphone (Lightroom Mobile, Snapseed, VSCO)'
    ],
    summary: 'Mempelajari alur penyuntingan foto digital non-destruktif: memotong (crop), meluruskan garis horizon, membaca grafik histogram, menyeimbangkan gelap-terang kurva, menajamkan detail, dan mereduksi noise digital.',
    glossaryTerms: [
      { term: 'Histogram', definition: 'Grafik distribusi statistik yang menunjukkan sebaran piksel nada gelap (shadows), nada tengah (midtones), dan nada terang (highlights) pada sebuah foto.' },
      { term: 'Cropping', definition: 'Proses memotong dan membuang area pinggir gambar yang tidak diinginkan untuk menyempurnakan komposisi bingkai.' }
    ],
    simulationId: 'fotografi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Koreksi Geometri (Crop, Horizon) & Analisis Histogram Gelap Terang',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu melakukan cropping proporsional, meluruskan horizon miring, dan membaca grafik histogram foto'],
        triggerQuestion: 'Bagaimana grafik histogram dapat memberi tahu kita apakah sebuah foto mengalami over exposure atau under exposure sebelum kita mencetaknya?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 2.42 horizon miring sebelum dan sesudah diluruskan'],
          inti: ['Praktik meluruskan garis laut/cakrawala yang miring menggunakan fungsi crop-straighten di software', 'Menganalisis kurva histogram (Gambar 2.43): bayangan kiri, nada tengah, dan highlight kanan', 'Praktik penyesuaian Brightness/Contrast dan Curve linear'],
          penutup: ['Refleksi keseimbangan pencahayaan', 'Penyimpanan file master PSD/XCF']
        },
        deepLearning5C: {
          criticalThinking: 'Membaca data objektif histogram tanpa tertipu oleh kecerahan layar monitor yang belum dikalibrasi',
          creativity: 'Menemukan komposisi terbaik melalui penataan ulang crop rasio 4:3 atau 16:9',
          collaboration: 'Praktik mandiri terbimbing di lab komputer',
          communication: 'Menjelaskan koreksi tonal yang dilakukan',
          connectionToRealLife: 'Standar kontrol kualitas foto untuk publikasi berita dan media komersial'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Penyempurnaan Detail: Sharpening, Red Eye, Konversi Hitam Putih, & Noise Reduction',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menajamkan gambar, menghilangkan red eye, mengonversi hitam putih artistik, dan mereduksi noise'],
        triggerQuestion: 'Mengapa mengubah foto menjadi hitam putih membutuhkan pengaturan filter warna (channel mixer) agar kontrasnya tidak abu-abu kusam?',
        activities: {
          pendahuluan: ['Review koreksi tonal', 'Menelaah Gambar 2.44, 2.45, 2.46, dan 2.47'],
          inti: ['Praktik menghilangkan efek pupil merah (Red Eye Tool)', 'Aplikasi filter unsharp mask untuk penajaman garis mata dan rambut model', 'Konversi hitam putih bernuansa klasik (B&W adjustment layer)', 'Pembersihan noise butiran pada foto malam hari'],
          penutup: ['Uji Kompetensi Bab 2 Fotografi Dasar (hlm. 85-86)', 'Pengumpulan tugas mandiri foto bertema toleransi (hlm. 83)']
        },
        deepLearning5C: {
          criticalThinking: 'Menjaga batasan agar proses penajaman (sharpening) tidak menimbulkan artefak halo yang merusak gambar',
          creativity: 'Menciptakan karya foto hitam putih berkontras tinggi yang dramatis',
          collaboration: 'Saling menilai hasil suntingan foto rekan sekelas',
          communication: 'Mempertahankan integritas foto tanpa manipulasi palsu',
          connectionToRealLife: 'Portofolio karya fotografi siap cetak dan pameran sekolah'
        },
        lkpdTask: {
          id: 'lkpd-w30-m2',
          title: 'LKPD 2.1: Asesmen Mandiri Karya Fotografi Bertema "Toleransi"',
          instruction: 'Kumpulkan 3 karya fotografi bertema "Toleransi" hasil jepretan sendiri dengan teknik berbeda, lengkapi data teknis kamera, angle, shot size, dan catatan penyuntingan.',
          steps: [
            'Pilih 3 foto terbaik dengan variasi sudut bidik dan pencahayaan',
            'Lakukan penyuntingan dasar (crop, pelurusan horizon, perbaikan gelap terang)',
            'Isi data teknis: Judul foto, jenis fotografi, teknik pengambilan, spesifikasi kamera/smartphone, dan alat pendukung yang dipakai'
          ],
          rubricCriteria: [
            { criteria: 'Kesesuaian tema dan keaslian karya (orisinalitas)', weight: 30, maxScore: 100 },
            { criteria: 'Penguasaan teknis eksposur, framing, dan angle', weight: 40, maxScore: 100 },
            { criteria: 'Kelengkapan deskripsi data teknis dan estetika', weight: 30, maxScore: 100 }
          ]
        }
      }
    ],
    quiz: {
      id: 'quiz-w30',
      title: 'Uji Kompetensi Bab 2: Fotografi Dasar Lengkap',
      questions: [
        {
          id: 'q1',
          question: 'Efek pupil mata memerah yang terjadi ketika pupil mata objek belum siap menerima pancaran cahaya flash kamera saat pemotretan disebut...',
          options: ['Noise', 'Red Eye', 'Flare', 'Bokeh'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 2 hlm. 80 menjelaskan efek red eye terjadi akibat pantulan cahaya flash pada retina mata saat dipotret.'
        },
        {
          id: 'q2',
          question: 'Perintah atau alat pada perangkat lunak pengolah foto yang digunakan untuk memotong bagian gambar yang tidak diinginkan sehingga ukurannya menjadi lebih terfokus disebut...',
          options: ['Cropping', 'Sharpening', 'Histogram', 'Noise Reduction'],
          correctIndex: 0,
          explanation: 'Buku Semester 2 Bab 2 hlm. 78 menerangkan Cropping berfungsi menghilangkan bagian sekitar gambar yang tidak diinginkan.'
        }
      ]
    }
  },
  {
    week: 31,
    semester: 2,
    babNumber: 3,
    babTitle: 'Komputer Grafis',
    topic: 'Pengertian Komputer Grafis, Karakteristik Gambar Bitmap vs Vektor, Format File, & Tabel Komparasi',
    sourceReference: 'Buku Semester 2 Bab 3 hlm. 87-94 & Tabel 3.1',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman pengolahan citra digital',
    coreConcepts: [
      'Komputer grafis: cabang ilmu komputer untuk membuat dan memanipulasi desain gambar secara digital',
      'Gambar Bitmap (Raster): kumpulan titik piksel dalam grid resolusi, bergantung resolusi (resolution dependent), pecah/bergerigi bila diperbesar, format JPEG, PNG, GIF, TIFF, software Photoshop/Corel Photo-Paint (Gambar 3.2)',
      'Gambar Vektor: tersusun dari rumus matematis garis dan kurva (path), bebas resolusi (resolution independent), tetap tajam dan utuh saat diperbesar ribuan persen, format AI, CDR, SVG, EPS, software Illustrator/CorelDRAW (Gambar 3.3 & 3.4)',
      'Tabel 3.1 Perbedaan Bitmap dan Vektor (unsur pembentuk, resolusi, ukuran file, fungsi pemakaian)'
    ],
    summary: 'Mempelajari dua pilar representasi citra digital: Gambar Bitmap berbasis piksel raster versus Gambar Vektor berbasis persamaan matematis kurva bezier. Membedah konsekuensi pembesaran skala dan pemilihan format file.',
    glossaryTerms: [
      { term: 'Bitmap / Raster', definition: 'Representasi grafis yang tersusun dari matriks kisi-kisi titik piksel berpeta warna dengan resolusi tertentu.' },
      { term: 'Vektor', definition: 'Representasi grafis yang tersusun dari sekumpulan garis, kurva, titik koordinat, dan fungsi matematika geometris yang dapat diskalakan tanpa batas.' },
      { term: 'Resolution Dependent', definition: 'Sifat citra gambar yang kualitas ketajamannya terikat kuat pada jumlah kerapatan piksel (dpi/ppi).' }
    ],
    simulationId: 'komputer-grafis',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Mendalami Gambar Bitmap: Grid Piksel, Satuan DPI/PPI, & Format File',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami struktur pembentuk gambar bitmap dan karakteristik berbagai format filenya'],
        triggerQuestion: 'Mengapa foto yang di-zoom hingga 800% terlihat kotak-kotak bergerigi seperti mosaik kaca?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 3.2 pembesaran piksel bitmap'],
          inti: ['Analisis resolusi: konsep dots per inch (dpi) dan pixels per inch (ppi)', 'Perbandingan format file bitmap: JPEG (kompresi warna foto), PNG (transparansi alfa), GIF (animasi 8-bit), PDF', 'Simulasi di Laboratorium Komputer Grafis: Menguji zoom in 4000% pada foto bitmap vs kurva vektor'],
          penutup: ['Refleksi batasan gambar raster', 'Formatif pemahaman format gambar']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis trade-off antara ukuran file penyimpanan dengan ketajaman resolusi foto',
          creativity: 'Memilih format file paling optimal untuk kebutuhan web vs cetak banner',
          collaboration: 'Diskusi kelompok',
          communication: 'Menjelaskan perbedaan kegunaan JPEG dan PNG transparan',
          connectionToRealLife: 'Pengiriman aset grafis ke percetakan dan pengembang website'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Kekuatan Gambar Vektor & Analisis Tabel 3.1 Perbedaan Bitmap vs Vektor',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menguraikan keunggulan grafis vektor dan mengisi tabel perbandingan komprehensif'],
        triggerQuestion: 'Mengapa sebuah logo perusahaan wajib dibuat dalam format vektor dan bukan format bitmap foto?',
        activities: {
          pendahuluan: ['Review sesi bitmap', 'Menelaah Gambar 3.3 & 3.4 detail gambar vektor pada pembesaran ekstrim'],
          inti: ['Pembedahan struktur vektor: garis, kurva, isian warna (fill), dan garis tepi (stroke)', 'Aktivitas 3.1 Ayo Bereksplorasi (hlm. 93-94): Mengisi Tabel 3.1 Perbedaan Gambar Bitmap dan Vektor', 'Eksplorasi format vektor industri: AI, CDR, CMX, DXF, SVG'],
          penutup: ['Evaluasi tabel perbandingan', 'Rangkuman pemahaman dasar']
        },
        deepLearning5C: {
          criticalThinking: 'Menyimpulkan mengapa ukuran file vektor relatif jauh lebih ringan dibandingkan foto resolusi tinggi',
          creativity: 'Merancang ilustrasi sederhana dengan bentuk geometris vektor',
          collaboration: 'Peer assessment pengisian Tabel 3.1 antar siswa',
          communication: 'Mempresentasikan 5 poin perbedaan utama bitmap dan vektor',
          connectionToRealLife: 'Penerapan logo yang dapat dicetak di kartu nama kecil hingga baliho raksasa tanpa pecah'
        }
      }
    ],
    quiz: {
      id: 'quiz-w31',
      title: 'Kuis Formatif Minggu 31: Bitmap vs Vektor',
      questions: [
        {
          id: 'q1',
          question: 'Suatu jenis citra grafis yang disusun oleh titik-titik piksel dalam suatu kisi (grid) dan kualitasnya akan rusak/pecah saat diperbesar (resolution dependent) adalah...',
          options: ['Vektor', 'Bitmap / Raster', 'Bezier', 'Pathfinder'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 3 hlm. 90 & 148 menerangkan gambar bitmap disusun oleh kumpulan titik piksel dan bersifat resolution dependent.'
        }
      ]
    }
  },
  {
    week: 32,
    semester: 2,
    babNumber: 3,
    babTitle: 'Komputer Grafis',
    topic: 'Pengenalan Perangkat Lunak Desain Grafis Komputer & Smartphone',
    sourceReference: 'Buku Semester 2 Bab 3 hlm. 95-96 & 117',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman konsep vektor dan bitmap minggu ke-31',
    coreConcepts: [
      'Klasifikasi perangkat lunak komputer:',
      '1. Berbasis Vektor: CorelDRAW, Adobe Illustrator, Inkscape',
      '2. Berbasis Bitmap: Adobe Photoshop, Corel Photo-Paint, GIMP',
      'Aplikasi desain grafis pada smartphone: Adobe Photoshop Express, AutoCAD mobile, PicsArt, 3DC.io, 3D Modeling, Canva (hlm. 95)',
      'Aktivitas 3.2 Ayo Bereksplorasi: Analisis kelebihan dan keterbatasan aplikasi smartphone dibanding desktop'
    ],
    summary: 'Memetakan ekosistem peranti lunak grafis modern: membedakan peran CorelDRAW dan Adobe Illustrator (vektor) dengan Adobe Photoshop (bitmap), serta menguji kapabilitas aplikasi smartphone kreatif.',
    glossaryTerms: [
      { term: 'Software Vektor', definition: 'Perangkat lunak yang dirancang khusus untuk memanipulasi objek berbasis kurva matematis seperti pembuatan logo dan layout presisi.' },
      { term: 'Software Bitmap', definition: 'Perangkat lunak yang dirancang khusus untuk mengedit, menyunting, dan memanipulasi piksel foto dan lukisan digital.' }
    ],
    simulationId: 'komputer-grafis',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Ekosistem Perangkat Lunak Komputer: CorelDRAW, Illustrator, & Photoshop',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami fungsi spesifik dan alur integrasi antara software vektor dan bitmap'],
        triggerQuestion: 'Kapan seorang desainer harus membuka Adobe Illustrator, dan kapan harus membuka Adobe Photoshop?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 3.5 software komputer grafis'],
          inti: ['Membedah keunggulan CorelDRAW di dunia industri percetakan Indonesia', 'Membedah integrasi Adobe Creative Cloud (Illustrator untuk vektor, Photoshop untuk olah foto)', 'Simulasi mengenali antarmuka menu bar, status bar, dan option bar di lab komputer'],
          penutup: ['Refleksi efisiensi pemilihan software', 'Formatif pemetaan peranti lunak']
        },
        deepLearning5C: {
          criticalThinking: 'Menilai kelemahan menggunakan software bitmap untuk merancang huruf teks',
          creativity: 'Menyusun alur kerja kolaborasi antara dua peranti lunak berbeda',
          collaboration: 'Diskusi kelompok',
          communication: 'Menyampaikan rekomendasi software untuk kebutuhan klien tertentu',
          connectionToRealLife: 'Standar keahlian software yang dicari oleh industri DKV'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Aplikasi Desain Smartphone: Mobilitas Desainer & Analisis Komparasi (Aktivitas 3.2)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menganalisis potensi dan batasan merancang grafis melalui aplikasi mobile gawai'],
        triggerQuestion: 'Apakah smartphone masa kini sudah mampu menggantikan komputer desktop sepenuhnya dalam pekerjaan desain profesional?',
        activities: {
          pendahuluan: ['Review sesi software desktop', 'Membuka aplikasi desain di smartphone siswa'],
          inti: ['Aktivitas 3.2 Ayo Bereksplorasi (hlm. 117): Menguji aplikasi PicsArt, Canva, dan Photoshop Express', 'Analisis keterbatasan: ukuran layar, ketepatan jari vs stylus mouse, manajemen warna CMYK cetak, dan resolusi ekspor', 'Praktik membuat 1 konten visual cepat di ponsel dan membandingkannya dengan hasil desktop'],
          penutup: ['Evaluasi komparasi ponsel vs komputer', 'Penyusunan tabel resume kelebihan dan kekurangan']
        },
        deepLearning5C: {
          criticalThinking: 'Memahami batasan komputasi ponsel saat mengolah file beresolusi cetak tinggi (300 dpi)',
          creativity: 'Memanfaatkan kemudahan mobile editing untuk konten media sosial instan',
          collaboration: 'Saling bertukar review aplikasi grafis smartphone',
          communication: 'Menyajikan perbandingan fitur desktop vs mobile secara objektif',
          connectionToRealLife: 'Pemanfaatan smartphone sebagai alat pembuat draf ide cepat di lapangan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w32',
      title: 'Kuis Formatif Minggu 32: Perangkat Lunak Desain Grafis',
      questions: [
        {
          id: 'q1',
          question: 'Di bawah ini manakah pasangan perangkat lunak yang sama-sama berbasis pengolahan grafis vektor?',
          options: [
            'Adobe Photoshop dan Corel Photo-Paint',
            'CorelDRAW dan Adobe Illustrator',
            'Adobe Lightroom dan PicsArt',
            'GIMP dan Adobe Photoshop Express'
          ],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 3 hlm. 95 & 138 menjelaskan CorelDRAW dan Adobe Illustrator adalah peranti lunak berbasis vektor.'
        }
      ]
    }
  },
  {
    week: 33,
    semester: 2,
    babNumber: 3,
    babTitle: 'Komputer Grafis',
    topic: 'Area Kerja Vektor & Fitur Pembentukan Objek: Shaping CorelDRAW & Pathfinder Illustrator',
    sourceReference: 'Buku Semester 2 Bab 3 hlm. 96-116',
    isOfficialCurriculum: true,
    prerequisites: 'Pengenalan jenis software minggu ke-32',
    coreConcepts: [
      'Elemen area kerja CorelDRAW (Gambar 3.6): Menu Bar, Standard Bar, Property Bar, Status Bar, Page Area, Ruler, Toolbox, Color Palette',
      'Elemen area kerja Illustrator (Gambar 3.25): Menu Bar, Toolbox, Artboards, Color Palette, Transparency Palette (Opacity Mask), Layer Palette',
      'Anatomi kurva bezier (Gambar 3.47 & 3.48): Anchor Point, Segment (garis lengkung/lurus), Direction Point (pengatur arah lengkung), Bounding Box & 8 Handle',
      'Path terbuka vs Path tertutup, Compound Path',
      'Fitur 8 Shaping CorelDRAW (Gambar 3.15) & Pathfinder Illustrator (Gambar 3.36):',
      '- Combine (menyatukan, irisan berlubang)',
      '- Weld / Unite (menyatukan tanpa irisan menjadi satu objek padu)',
      '- Trim / Minus Front (memotong objek dengan objek lain)',
      '- Intersect (mengambil area irisan tumpang tindih)',
      '- Simplify (memotong objek tumpang tindih di belakang)',
      '- Front Minus Back / Back Minus Front',
      '- Create Boundary (menghasilkan garis luar outline gabungan)'
    ],
    summary: 'Mempelajari operasi pembentukan geometri vektor tingkat lanjut: membedah anatomi kurva bezier (anchor point, handle) serta menguasai 8 operasi Boolean matematika pembentukan objek (Weld, Trim, Intersect, Combine, Simplify, Minus Front).',
    glossaryTerms: [
      { term: 'Anchor Point', definition: 'Titik koordinat penambat yang menghubungkan segmen-segmen garis atau kurva pada grafis vektor.' },
      { term: 'Weld / Unite', definition: 'Perintah penggabungan dua objek atau lebih menjadi satu kesatuan objek baru yang utuh tanpa garis irisan di dalamnya.' },
      { term: 'Trim', definition: 'Perintah pemotongan sebagian bentuk objek menggunakan bentuk objek lain yang bersinggungan.' }
    ],
    simulationId: 'komputer-grafis',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Area Kerja Vektor & Anatomi Kurva Bezier (Anchor Point, Handle)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami elemen antarmuka software vektor dan anatomi kurva bezier'],
        triggerQuestion: 'Bagaimana pen tool mengubah garis lurus kaku menjadi kurva melengkung mulus hanya dengan menarik handle arah (direction point)?',
        activities: {
          pendahuluan: ['Doa bersama', 'Membuka software CorelDRAW dan Adobe Illustrator di lab komputer'],
          inti: ['Menelaah Gambar 3.47 & 3.48: Anchor Point, Direction Point, Segment, Bounding Box, dan Handle', 'Praktik membuat path terbuka (garis) dan path tertutup (bidang berwana)', 'Eksplorasi Toolbox: Pen Tool, Pick/Selection Tool, Shape/Direct Selection Tool'],
          penutup: ['Refleksi keluwesan tangan menggambar kurva', 'Latihan meniru kontur bentuk daun']
        },
        deepLearning5C: {
          criticalThinking: 'Memahami bahwa jumlah anchor point yang terlalu banyak akan membuat kurva bergelombang tidak rata',
          creativity: 'Membentuk siluet objek menggunakan seminimal mungkin titik penambat',
          collaboration: 'Praktik mandiri terbimbing saling membantu',
          communication: 'Menjelaskan fungsi handle kontrol arah',
          connectionToRealLife: 'Keahlian pen tool mutlak diperlukan bagi ilustrator vektor profesional'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Fitur 8 Shaping CorelDRAW & Pathfinder Illustrator: Boolean Objek Vektor',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mempraktikkan operasi Combine, Weld, Trim, Intersect, Simplify, dan Minus Front'],
        triggerQuestion: 'Bagaimana cara membuat bentuk bulan sabit sempurna dari perpotongan dua bentuk lingkaran sederhana?',
        activities: {
          pendahuluan: ['Review kurva bezier', 'Menelaah Gambar 3.15 diagram 8 fitur shaping CorelDRAW'],
          inti: ['Simulasi Interaktif Boolean Objek di Lab: Memotong lingkaran dengan persegi (Trim)', 'Menyatukan beberapa lingkaran menjadi bentuk awan utuh (Weld / Unite)', 'Tugas Mandiri (hlm. 139): Mempraktikkan pembuatan karakter Indonesia menggunakan kombinasi shape dasar dan shaping/Pathfinder'],
          penutup: ['Uji coba hasil karakter siswa', 'Pengunggahan file vector ke portofolio']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis urutan seleksi objek (objek mana yang menjadi pemotong dan mana yang terpotong)',
          creativity: 'Menggubah bentuk geometris dasar (lingkaran, kotak) menjadi karakter wayang atau manusia modern',
          collaboration: 'Peer check: Memastikan tidak ada garis irisan liar yang tertinggal',
          communication: 'Mempresentasikan langkah demi langkah kombinasi shape yang digunakan',
          connectionToRealLife: 'Dasar konstruksi ikon aplikasi, maskot, dan tipografi logo presisi'
        }
      }
    ],
    quiz: {
      id: 'quiz-w33',
      title: 'Kuis Formatif Minggu 33: Shaping & Pathfinder Vektor',
      questions: [
        {
          id: 'q1',
          question: 'Fitur pembentukan objek pada CorelDRAW yang berfungsi menggabungkan dua atau lebih objek menjadi satu kesatuan utuh tanpa garis irisan di dalamnya adalah...',
          options: ['Combine', 'Weld', 'Trim', 'Intersect'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 3 hlm. 102-103 menjelaskan Weld menggabungkan dua atau lebih objek menjadi satu kesatuan utuh tanpa irisan.'
        },
        {
          id: 'q2',
          question: 'Pada Adobe Illustrator, titik-titik koordinat yang membentuk suatu garis atau kurva dan menghubungkan segmen disebut...',
          options: ['Anchor Point', 'Bounding Box', 'Option Bar', 'Color Palette'],
          correctIndex: 0,
          explanation: 'Buku Semester 2 Bab 3 hlm. 116 menerangkan objek dibentuk dari titik-titik koordinat yang disebut anchor point.'
        }
      ]
    }
  },
  {
    week: 34,
    semester: 2,
    babNumber: 3,
    babTitle: 'Komputer Grafis',
    topic: 'Penyuntingan Gambar Bitmap Adobe Photoshop: Area Kerja, Layer, & 6 Teknik Seleksi',
    sourceReference: 'Buku Semester 2 Bab 3 hlm. 117-124',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman software grafis minggu ke-32 & 33',
    coreConcepts: [
      'Area kerja Photoshop (Gambar 3.50): Menu Bar, Option Bar, Toolbox, Document Title, Palette (Navigator, Color, History, Layer)',
      'Konsep Panel Layer (Gambar 3.56): tumpukan lapisan gambar transparan yang dapat diatur urutan depan-belakang tanpa merusak gambar asli',
      '6 Cara menyeleksi gambar pada Photoshop:',
      '1. Elliptical/Rectangular Marquee: seleksi bentuk geometris baku (Gambar 3.57)',
      '2. Lasso Tool (Polygonal & Magnetic): seleksi bebas mengikuti tepi gambar (Gambar 3.58)',
      '3. Magic Wand Tool: menyeleksi area berpiksel warna serupa atau kontras dengan cepat (Gambar 3.59)',
      '4. Pen Tool: seleksi presisi tinggi mengikuti jalur tepi vektor (Gambar 3.60)',
      '5. Color Range: seleksi warna kontras untuk objek rumit seperti percikan air (Gambar 3.61)',
      '6. Color Channels: seleksi super detail untuk rambut/bulu memanfaatkan duplikat kanal warna kontras hitam-putih (Gambar 3.62)',
      'Aktivitas 3.3 Ayo Berkreasi: Membuat kolase menyusun beberapa foto menggunakan Selection Tool'
    ],
    summary: 'Mendalami peranti lunak manipulasi raster Adobe Photoshop: memahami filosofi lapisan non-destruktif (Layer Panel) dan menguasai 6 teknik isolasi objek/seleksi dari bentuk baku, tongkat sihir, jalur pen tool, hingga seleksi rambut rumit melalui kanal warna.',
    glossaryTerms: [
      { term: 'Layer', definition: 'Panel lapisan kerja bertumpuk yang memungkinkan perancangan elemen terpisah tanpa mengubah elemen lain di bawahnya.' },
      { term: 'Color Channels', definition: 'Panel saluran informasi warna primer (RGB) yang dapat dimanfaatkan untuk isolasi objek berdetail helai rambut halus secara akurat.' }
    ],
    simulationId: 'komputer-grafis',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Area Kerja Photoshop, Hirarki Layer, & Seleksi Geometris Marquee & Lasso',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Menguasai struktur antarmuka Photoshop, manajemen layer, dan teknik seleksi dasar'],
        triggerQuestion: 'Mengapa bekerja tanpa menggunakan layer terpisah dianggap sebagai kesalahan paling fatal dalam penyuntingan gambar digital?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 3.56 ilustrasi tumpukan lapisan kue lapis Layer Photoshop'],
          inti: ['Eksplorasi antarmuka: Menu, Toolbox, Option bar dinamis, dan Palette panel', 'Praktik membuat dokumen baru, menambah layer, mengatur opacity, dan masking', 'Praktik seleksi wajah pasfoto menggunakan Elliptical Marquee dan Polygonal Lasso (Gambar 3.57 & 3.58)'],
          penutup: ['Refleksi kebersihan tepi hasil potongan', 'Formatif pemahaman layer']
        },
        deepLearning5C: {
          criticalThinking: 'Menentukan toleransi warna pada Magic Wand untuk memisahkan latar belakang polos dengan cepat',
          creativity: 'Menggabungkan dua foto berbeda ke dalam kanvas baru dengan transisi layer mask halus',
          collaboration: 'Praktik mandiri di komputer lab',
          communication: 'Menjelaskan urutan tumpukan layer kepada rekan sebangku',
          connectionToRealLife: 'Pengeditan foto profil, pasfoto ijazah, dan materi promosi digital'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Teknik Seleksi Tingkat Lanjut: Pen Tool, Color Range, & Masking Rambut Color Channels',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu melakukan isolasi objek rumit menggunakan Pen Tool, Color Range, dan Color Channels'],
        triggerQuestion: 'Bagaimana cara memotong foto seseorang berambut ikal atau berbulu halus agar helai-helai rambutnya tidak terpotong kaku?',
        activities: {
          pendahuluan: ['Review seleksi dasar', 'Menelaah tantangan seleksi Gambar 3.61 (percikan air) & Gambar 3.62 (rambut boneka)'],
          inti: ['Praktik Pen Tool untuk memotong kontur bodi produk dengan garis tepi sangat mulus', 'Eksplorasi Menu Select -> Color Range untuk memisahkan latar kontras', 'Praktik menduplikasi Blue Channel, menaikkan level kontras hitam putih, dan memuatnya sebagai seleksi rambut', 'Aktivitas 3.3 Ayo Berkreasi: Membuat poster kolase foto produk gizi seimbang (hlm. 140)'],
          penutup: ['Pameran karya kolase digital', 'Refleksi keahlian isolasi objek']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis perbedaan tonal antar saluran RGB untuk menemukan kanal dengan kontras tertinggi',
          creativity: 'Menciptakan komposisi kolase surealis yang memadukan berbagai potongan foto secara harmonis',
          collaboration: 'Saling bertukar aset foto mentah beresolusi tinggi',
          communication: 'Mempresentasikan teknik seleksi yang dipilih dan alasannya',
          connectionToRealLife: 'Keahlian digital imaging profesional untuk materi poster film dan iklan komersial'
        }
      }
    ],
    quiz: {
      id: 'quiz-w34',
      title: 'Kuis Formatif Minggu 34: Layer & Seleksi Photoshop',
      questions: [
        {
          id: 'q1',
          question: 'Metode seleksi pada Adobe Photoshop yang paling direkomendasikan untuk menyeleksi objek rumit berhelai halus seperti rambut atau bulu binatang adalah...',
          options: ['Rectangular Marquee', 'Color Channels', 'Elliptical Marquee', 'Crop Tool'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 3 hlm. 123 menjelaskan Color Channels biasanya digunakan untuk seleksi yang lebih rumit misalnya rambut atau bulu.'
        }
      ]
    }
  },
  {
    week: 35,
    semester: 2,
    babNumber: 3,
    babTitle: 'Komputer Grafis',
    topic: 'Pembuatan Produk Rancangan Grafis Nyata: Desain Mug, Desain Logo Modern, & Desain Kartu Nama',
    sourceReference: 'Buku Semester 2 Bab 3 hlm. 124-137',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan software vektor dan bitmap minggu ke-33 & 34',
    coreConcepts: [
      'Perancangan produk grafis komersial sesuai spesifikasi industri:',
      '1. Desain Mug (hlm. 124-126): ukuran bidang lembar kerja standar cetak mug 8 cm x 20 cm, resolusi 300 dpi CMYK, teknik ekspor JPEG Ctrl+E',
      '2. Desain Logo Vektor (hlm. 126-131): lembar kerja HD 1920x1080 px, perancangan pola persegi panjang 800x400 px, shape tool, rotasi, fitur Weld, Tool Bezier, Back Minus Front, Break Apart (Ctrl+K), Interactive Fill Tool gradasi warna, penambahan font pendukung (Gambar 3.77)',
      '3. Desain Kartu Nama (hlm. 135-137): ukuran standar 9 cm x 6 cm (F6), Pick tool pewarnaan, penambahan ikon sosial media/identitas (Gambar 3.88), penempatan logo dan barcode QR (Gambar 3.89)'
    ],
    summary: 'Menerapkan kecakapan teknis ke dalam 3 produk riil industri: mendesain bidang cetak mug keramik (8x20 cm), membangun logo perusahaan geometris modern bertahap, dan merancang kartu nama bisnis elegan (9x6 cm).',
    glossaryTerms: [
      { term: 'Break Apart', definition: 'Perintah pada CorelDRAW (Ctrl+K) untuk memisahkan kurva atau objek gabungan yang terpotong menjadi bagian mandiri yang dapat diwarnai terpisah.' },
      { term: 'Interactive Fill Tool', definition: 'Alat pewarnaan interaktif untuk membuat gradasi warna linear, radial, atau mesh pada permukaan bidang vektor.' }
    ],
    simulationId: 'komputer-grafis',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Desain Cetak Mug Keramik (8 x 20 cm) & Konstruksi Logo Vektor',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu merancang desain sesuai pola ukuran mug 8x20 cm dan mengonstruksi bentuk logo vektor bertahap'],
        triggerQuestion: 'Mengapa perancangan desain mug harus diset tepat berukuran 8 cm x 20 cm dan tidak boleh melebihi dimensi keliling gelas keramik?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 3.63 & 3.64 lembar kerja mug'],
          inti: ['Praktik setup lembar kerja mug 8x20 cm, menyusun background dan ilustrasi (Gambar 3.65 & 3.66)', 'Ekspor format cetak JPEG resolusi tinggi (Ctrl+E)', 'Praktik langkah demi langkah konstruksi logo modern (Gambar 3.68-3.77): rectangle 800x400 -> shape tool oval -> gandakan 400x400 -> rotasi -> Weld -> Bezier -> Back Minus Front -> Break Apart -> Interactive Fill Tool'],
          penutup: ['Evaluasi keselarasan warna logo', 'Penyimpanan file vektor master CDR/AI']
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung batas aman margin potong dan kelengkungan mug agar teks tidak tertutup pegangan gelas',
          creativity: 'Menciptakan paduan warna gradasi modern menggunakan Interactive Fill Tool',
          collaboration: 'Praktik mandiri di komputer lab dengan bimbingan sejawat',
          communication: 'Menjelaskan filosofi bentuk logo yang diciptakan',
          connectionToRealLife: 'Unit produksi cetak mug sablon souvenir di sekolah'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Desain Kartu Nama Bisnis (9 x 6 cm) Lengkap dengan Ikon & QR Code',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu merancang kartu nama bisnis standar 9x6 cm dengan hierarki tipografi dan identitas profesional'],
        triggerQuestion: 'Informasi apa saja yang wajib dicantumkan pada kartu nama berukuran 9x6 cm agar tetap terbaca rapi tanpa terkesan penuh sesak?',
        activities: {
          pendahuluan: ['Review sesi desain mug dan logo', 'Menelaah Gambar 3.86 sampai 3.89 tahapan kartu nama'],
          inti: ['Setup kotak 9 cm x 6 cm dengan Rectangle Tool (F6)', 'Penerapan kurva dinamis dan skema warna korporat', 'Penyusunan elemen identitas: Nama, Jabatan, Ikon sosial media, Kontak, Logo yang telah dibuat, dan tautan QR Code', 'Cetak coba dumi kartu nama pada kertas art carton 260 gsm'],
          penutup: ['Pemeriksaan keterbacaan hasil cetak', 'Pengunggahan desain ke portofolio siswa']
        },
        deepLearning5C: {
          criticalThinking: 'Memeriksa ukuran font kartu nama agar tidak lebih kecil dari 7 pt demi keterbacaan mata',
          creativity: 'Memadukan tata letak modern minimalis dengan ruang kosong (white space) yang seimbang',
          collaboration: 'Saling bertukar kartu nama dumi antar siswa',
          communication: 'Simulasi memperkenalkan identitas profesional kepada mitra kerja',
          connectionToRealLife: 'Mempersiapkan kartu identitas bisnis diri bagi lulusan DKV yang siap kerja'
        }
      }
    ],
    quiz: {
      id: 'quiz-w35',
      title: 'Kuis Formatif Minggu 35: Produk Komputer Grafis',
      questions: [
        {
          id: 'q1',
          question: 'Ukuran standar bidang lembar kerja untuk membuat desain cetak mug keramik pada CorelDRAW menurut buku adalah...',
          options: ['5 cm x 10 cm', '8 cm x 20 cm', '9 cm x 6 cm', '21 cm x 29.7 cm'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 3 hlm. 125 menerangkan ukuran standar desain mug adalah 8 cm x 20 cm.'
        },
        {
          id: 'q2',
          question: 'Ukuran standar baku untuk membuat perancangan desain kartu nama profesional adalah...',
          options: ['9 cm x 6 cm', '8 cm x 20 cm', '10 cm x 15 cm', '12 cm x 8 cm'],
          correctIndex: 0,
          explanation: 'Buku Semester 2 Bab 3 hlm. 135 menjelaskan ukuran baku kartu nama adalah 9 cm x 6 cm.'
        }
      ]
    }
  },
  {
    week: 36,
    semester: 2,
    babNumber: 3,
    babTitle: 'Komputer Grafis',
    topic: 'Proyek Terpadu, Desain Kemasan Makanan (Packaging Box & PowerClip), Portofolio Digital, Asesmen Akhir, & Refleksi 1 Tahun Pembelajaran',
    sourceReference: 'Buku Semester 2 Bab 3 hlm. 132-135 & Latihan Soal Akhir Semester 2 hlm. 143-156',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan seluruh unit kompetensi semester 1 dan 2',
    coreConcepts: [
      'Alur lengkap desain packaging pada CorelDRAW (Gambar 3.78 - 3.85): lembar kerja sentimeter, pola jaring kemasan kotak dengan Polygon dan Rectangle, pewarnaan gradient cokelat muda/tua, penyiapan gambar pendukung pizza/kuliner, teknik PowerClip Inside objek, penambahan keterangan tipografi, hingga desain akhir kemasan',
      'Pembuatan dumi fisik cetak coba pada kertas art carton 260 gsm (hlm. 140)',
      'Konsolidasi Portofolio Digital 1 Tahun: kurasi karya sketsa, tipografi, fotografi, vektor logo, dan dumi kemasan',
      'Asesmen Sumatif Akhir Tahun Pembelajaran (40 Soal Pilihan Ganda & Evaluasi Mendalam Kurikulum Merdeka)',
      'Refleksi pembelajaran mendalam (Deep Learning: Mindful, Meaningful, Joyful)'
    ],
    summary: 'Puncak kulminasi pembelajaran 36 minggu (432 JP). Siswa mengeksekusi proyek desain kemasan kuliner lengkap dengan teknik PowerClip, merakit dumi kemasan art carton 260 gsm, mengompilasi portofolio digital 1 tahun, dan menuntaskan asesmen akhir semester 2.',
    glossaryTerms: [
      { term: 'PowerClip Inside', definition: 'Fitur pada CorelDRAW untuk menempatkan dan membatasi objek gambar/foto ke dalam wadah kurva atau bidang objek lain (masking vektor).' },
      { term: 'Dumi (Dummy)', definition: 'Model cetak coba purwarupa fisik berskala 1:1 dari produk cetakan/kemasan untuk menguji kesesuaian dimensi, lipatan, dan estetika sebelum cetak massal.' }
    ],
    simulationId: 'packaging',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Eksekusi Desain Kemasan Kuliner (PowerClip Inside) & Perakitan Dumi Art Carton 260 gsm',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu merancang pola kemasan digital dengan PowerClip Inside dan merakit dumi cetak coba fisik pada kertas art carton 260 gsm'],
        triggerQuestion: 'Bagaimana fitur PowerClip Inside membantu desainer memasukkan foto makanan ke dalam bidang trapesium lipatan kemasan secara rapi?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 3.78 sampai 3.85 alur desain packaging pizza di CorelDRAW'],
          inti: ['Praktik menyusun jaring pola kemasan dengan Rectangle dan Polygon Tool di software', 'Aplikasi teknik PowerClip Inside memasukkan grafis pendukung ke bidang kemasan (Gambar 3.82 & 3.83)', 'Pencetakan hasil desain pada kertas art carton 260 gsm dan perakitan fisik dumi 3D'],
          penutup: ['Pemeriksaan uji buka-tutup kotak dumi kemasan', 'Refleksi ketepatan dimensi pola']
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung toleransi ketebalan kertas art carton 260 gsm pada sudut lipatan agar kotak tidak sobek',
          creativity: 'Menciptakan desain kemasan makanan yang menggugah selera pembeli di rak etalase',
          collaboration: 'Praktik kelompok 4-5 orang saling membantu proses scoring (menggores garis lipat) dan perekatan',
          communication: 'Mempresentasikan konsep branding kemasan di depan kelas',
          connectionToRealLife: 'Penyediaan dumi produk siap pakai untuk UMKM binaan SMKN 3 Kuningan'
        },
        lkpdTask: {
          id: 'lkpd-w36-m1',
          title: 'LKPD 3.1: Proyek Terpadu Dumi Kemasan Produk Kreatif CorelDRAW',
          instruction: 'Rancang pola kemasan produk pada CorelDRAW dengan teknik PowerClip Inside, cetak pada kertas art carton 260 gsm, dan rakit menjadi dumi kemasan 3D yang rapi.',
          steps: [
            'Buat lembar kerja CorelDRAW berukuran sentimeter',
            'Bentuk pola persegi panjang dan poligon untuk lidah penutup dan kuncian',
            'Terapkan gradasi warna dan masukkan gambar pendukung dengan PowerClip Inside',
            'Tambahkan keterangan nama produk, komposisi, logo, dan barcode',
            'Cetak pada art carton 260 gsm, potong, lipat, dan rakit menjadi dumi fisik'
          ],
          rubricCriteria: [
            { criteria: 'Ketepatan pola teknis dan presisi kuncian', weight: 35, maxScore: 100 },
            { criteria: 'Kreativitas grafis, komposisi, dan teknik PowerClip', weight: 35, maxScore: 100 },
            { criteria: 'Kerapian dumi fisik dan daya tarik visual produk', weight: 30, maxScore: 100 }
          ]
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Gelar Karya Portofolio Digital, Asesmen Akhir Semester 2, Remedial, & Refleksi 1 Tahun',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Menyelesaikan asesmen sumatif semester 2, mengompilasi portofolio digital 1 tahun, serta merefleksikan pencapaian kompetensi DKV Fase E'],
        triggerQuestion: 'Bagaimana perjalanan belajar 36 minggu ini mengubah caramu memandang dunia visual dan masa depan karirmu?',
        activities: {
          pendahuluan: ['Doa bersama dan pembukaan pameran kelas', 'Penyampaian tata tertib asesmen akhir'],
          inti: ['Pengerjaan Asesmen Sumatif Akhir Semester 2 (40 butir soal komprehensif)', 'Kurasi dan finalisasi Portofolio Digital 1 Tahun (menghubungkan 36 minggu pembelajaran)', 'Sesi refleksi mendalam Deep Learning: Pembelajaran Berkesadaran (Mindful), Bermakna (Meaningful), dan Menggembirakan (Joyful)', 'Pelaksanaan program pengayaan bagi siswa tuntas dan remedial terarah bagi yang memerlukan'],
          penutup: ['Ulasan komprehensif guru atas capaian kelas', 'Pemberian apresiasi karya terbaik', 'Doa syukur penutup tahun pembelajaran']
        },
        deepLearning5C: {
          criticalThinking: 'Mengevaluasi rekam jejak perkembangan kompetensi visual pribadi dari minggu ke-1 hingga ke-36',
          creativity: 'Menata portofolio digital showcase yang memikat untuk keperluan magang kerja (PKL)',
          collaboration: 'Mengorganisasi pameran gelar karya kelas secara mandiri dan gotong royong',
          communication: 'Menyampaikan orasi refleksi diri dan impian masa depan di bidang DKV',
          connectionToRealLife: 'Kesiapan mental, karakter, dan budaya kerja profesional untuk melangkah ke Kelas XI'
        }
      }
    ],
    quiz: {
      id: 'quiz-w36',
      title: 'Asesmen Sumatif Akhir Tahun: Dasar-Dasar DKV Semester 2 (40 Soal)',
      questions: [
        {
          id: 'q1',
          question: 'Fitur pada CorelDRAW yang digunakan untuk memasukkan gambar atau foto pendukung ke dalam suatu wadah objek atau bidang pola desain kemasan adalah...',
          options: ['Weld Inside', 'PowerClip Inside', 'Simplify', 'Trim'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 3 Gambar 3.82 hlm. 134 menjelaskan fitur PowerClip Inside objek untuk memasukkan gambar pendukung.'
        },
        {
          id: 'q2',
          question: 'Jenis kertas yang memiliki karakteristik putih mengilap pada kedua sisinya, sangat tebal dan kokoh, serta umum digunakan untuk dumi cetak kemasan dan kartu nama adalah...',
          options: ['Kertas HVS', 'Kertas Kalkir', 'Kertas Art Carton (Paperboard)', 'Kertas Samson'],
          correctIndex: 2,
          explanation: 'Buku Semester 1 Bab 5 hlm. 105 & Semester 2 Bab 3 hlm. 140 menerangkan Kertas Art Carton (260 gsm) sangat tebal dan cocok untuk kemasan dan kartu nama.'
        },
        {
          id: 'q3',
          question: 'Pada Adobe Photoshop, pengaturan tingkat kecerahan dan kontras gelap terang warna dapat diakses melalui menu...',
          options: ['Duotone', 'Selective Color', 'Brightness/Contrast', 'Replace Color'],
          correctIndex: 2,
          explanation: 'Buku Semester 2 Bab 3 hlm. 79 & 151 menyebutkan pengaturan kecerahan dilakukan melalui menu Brightness/Contrast.'
        },
        {
          id: 'q4',
          question: 'Proses penyesuaian pencahayaan yang terjadi di dalam bodi kamera disebut proses exposure, sedangkan pencahayaan yang diatur di luar bodi kamera disebut...',
          options: ['Aperture', 'Lighting', 'Lightmeter', 'Shutter Speed'],
          correctIndex: 1,
          explanation: 'Buku Semester 2 Bab 2 hlm. 150 menjelaskan proses pencahayaan di luar badan kamera disebut lighting.'
        }
      ]
    }
  }
];

export const ALL_UNITS_DATA = [...UNITS_DATA_SEMESTER_2]; // Will be combined in unified store
